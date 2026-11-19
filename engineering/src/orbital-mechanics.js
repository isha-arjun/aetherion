// Aetherion ASTRA — educational orbital mechanics core.
// SI units throughout. Two-body point-mass model; not flight-qualified software.
export const EARTH = Object.freeze({
  name: "Earth",
  mu: 3.986004418e14, // m^3 s^-2, WGS-84-compatible standard gravitational parameter
  meanRadius: 6_371_000, // m; spherical reference only
});

const finite = (value, label) => {
  if (!Number.isFinite(value)) throw new TypeError(`${label} must be finite`);
};
const positive = (value, label) => {
  finite(value, label);
  if (value <= 0) throw new RangeError(`${label} must be greater than zero`);
};
const vector = (v, label="vector") => {
  if (!v || typeof v !== "object") throw new TypeError(`${label} is required`);
  finite(v.x, `${label}.x`);
  finite(v.y, `${label}.y`);
  return {x:v.x,y:v.y};
};
export const norm = v => Math.hypot(v.x,v.y);
export const dot = (a,b) => a.x*b.x+a.y*b.y;
export const cross2 = (a,b) => a.x*b.y-a.y*b.x;

export function gravitationalAcceleration(position, mu=EARTH.mu) {
  const p=vector(position,"position");
  positive(mu,"mu");
  const r=norm(p);
  positive(r,"distance from central body");
  const factor=-mu/(r*r*r);
  return {x:p.x*factor,y:p.y*factor};
}

export function specificOrbitalEnergy(position, velocity, mu=EARTH.mu) {
  const p=vector(position,"position"),v=vector(velocity,"velocity");
  positive(mu,"mu");
  const r=norm(p);
  positive(r,"distance from central body");
  return dot(v,v)/2-mu/r;
}

export function specificAngularMomentum(position, velocity) {
  return cross2(vector(position,"position"),vector(velocity,"velocity"));
}

// Velocity-Verlet integration for a conservative point-mass gravitational field.
export function velocityVerlet(state, dt, mu=EARTH.mu) {
  if (!state || !Number.isFinite(state.t)) throw new TypeError("state.t must be finite");
  positive(dt,"dt");
  const p=vector(state.p,"state.p"),v=vector(state.v,"state.v");
  const a0=gravitationalAcceleration(p,mu);
  const nextP={x:p.x+v.x*dt+0.5*a0.x*dt*dt,y:p.y+v.y*dt+0.5*a0.y*dt*dt};
  const a1=gravitationalAcceleration(nextP,mu);
  const nextV={x:v.x+0.5*(a0.x+a1.x)*dt,y:v.y+0.5*(a0.y+a1.y)*dt};
  return {p:nextP,v:nextV,t:state.t+dt};
}

export function circularOrbitSpeed(radius,mu=EARTH.mu) {
  positive(radius,"radius");positive(mu,"mu");
  return Math.sqrt(mu/radius);
}
export function escapeSpeed(radius,mu=EARTH.mu) {
  return Math.sqrt(2)*circularOrbitSpeed(radius,mu);
}
export function circularOrbitPeriod(radius,mu=EARTH.mu) {
  positive(radius,"radius");positive(mu,"mu");
  return 2*Math.PI*Math.sqrt(radius**3/mu);
}

// Classical planar osculating elements for a non-radial state.
export function orbitalElements(position,velocity,mu=EARTH.mu) {
  const p=vector(position,"position"),v=vector(velocity,"velocity");
  positive(mu,"mu");
  const r=norm(p),speed2=dot(v,v),h=specificAngularMomentum(p,v);
  positive(r,"radius");
  if (Math.abs(h)<1e-9) throw new RangeError("radial trajectories do not have a defined orbital plane");
  const energy=speed2/2-mu/r;
  const eccentricity=Math.sqrt(Math.max(0,1+(2*energy*h*h)/(mu*mu)));
  const semiMajorAxis=Math.abs(eccentricity-1)<1e-10?Infinity:-mu/(2*energy);
  const periapsis=h*h/mu/(1+eccentricity);
  const apoapsis=eccentricity<1?semiMajorAxis*(1+eccentricity):Infinity;
  const period=eccentricity<1?2*Math.PI*Math.sqrt(semiMajorAxis**3/mu):Infinity;
  return {specificEnergy:energy,specificAngularMomentum:h,eccentricity,semiMajorAxis,periapsisRadius:periapsis,apoapsisRadius:apoapsis,period};
}

// Ideal impulsive, coplanar Hohmann transfer between circular orbits.
export function hohmannTransfer(r1,r2,mu=EARTH.mu) {
  positive(r1,"initial orbital radius");positive(r2,"target orbital radius");positive(mu,"mu");
  if (Math.abs(r2-r1)<1e-6) throw new RangeError("initial and target radii must differ");
  const a=(r1+r2)/2;
  const v1=circularOrbitSpeed(r1,mu),v2=circularOrbitSpeed(r2,mu);
  const transferAt1=Math.sqrt(mu*(2/r1-1/a));
  const transferAt2=Math.sqrt(mu*(2/r2-1/a));
  const deltaV1=Math.abs(transferAt1-v1),deltaV2=Math.abs(v2-transferAt2);
  return {transferSemiMajorAxis:a,deltaV1,deltaV2,totalDeltaV:deltaV1+deltaV2,transferTime:Math.PI*Math.sqrt(a**3/mu),initialCircularSpeed:v1,targetCircularSpeed:v2,transferSpeedAtInitial:transferAt1,transferSpeedAtTarget:transferAt2};
}
