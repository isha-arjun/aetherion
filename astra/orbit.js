// ASTRA v0.1 — educational Newtonian two-body orbital model.
const MU = 3.986004418e14; // Earth standard gravitational parameter, m^3/s^2
const EARTH_RADIUS = 6_371_000; // m
const canvas = document.querySelector("#orbitCanvas");
const ctx = canvas.getContext("2d");
const $ = (id) => document.getElementById(id);
const ui = {
  altitude: $("altitude"), speed: $("speed"), timeScale: $("timeScale"),
  altitudeLabel: $("altitudeLabel"), speedLabel: $("speedLabel"),
  timeScaleLabel: $("timeScaleLabel"), circularSpeed: $("circularSpeed"),
  escapeSpeed: $("escapeSpeed"), elapsed: $("elapsed"),
  currentAltitude: $("currentAltitude"), currentSpeed: $("currentSpeed"),
  energy: $("energy"), orbitClass: $("orbitClass"),
  play: $("playBtn"), reset: $("resetBtn")
};
let state, running = true, lastFrame = 0, accumulator = 0, trail = [];
const STEP = 2; // fixed integration step in simulated seconds

const fmt = (n, digits=2) => Number.isFinite(n) ? n.toFixed(digits) : "—";
function acceleration(p) {
  const r2 = p.x*p.x + p.y*p.y;
  const r = Math.sqrt(r2);
  const factor = -MU / (r2*r);
  return {x:p.x*factor, y:p.y*factor};
}
function energy(s) {
  const r = Math.hypot(s.p.x,s.p.y);
  const v2 = s.v.x*s.v.x+s.v.y*s.v.y;
  return v2/2-MU/r;
}
function integrate(s, dt) {
  // Velocity-Verlet: second-order, time-reversible for conservative forces.
  const a0 = acceleration(s.p);
  const nextP = {x:s.p.x+s.v.x*dt+.5*a0.x*dt*dt,y:s.p.y+s.v.y*dt+.5*a0.y*dt*dt};
  const a1 = acceleration(nextP);
  const nextV = {x:s.v.x+.5*(a0.x+a1.x)*dt,y:s.v.y+.5*(a0.y+a1.y)*dt};
  return {p:nextP,v:nextV,t:s.t+dt};
}
function createState() {
  const radius = EARTH_RADIUS + Number(ui.altitude.value)*1000;
  const speed = Number(ui.speed.value)*1000;
  state = {p:{x:radius,y:0},v:{x:0,y:speed},t:0};
  trail = [{x:state.p.x,y:state.p.y}];
  accumulator = 0;
  updateReadouts();
}
function updateLabels() {
  const r = EARTH_RADIUS + Number(ui.altitude.value)*1000;
  const vc = Math.sqrt(MU/r)/1000, ve = Math.sqrt(2*MU/r)/1000;
  ui.altitudeLabel.textContent = Number(ui.altitude.value)+" km";
  ui.speedLabel.textContent = fmt(Number(ui.speed.value))+" km/s";
  ui.circularSpeed.textContent = fmt(vc)+" km/s";
  ui.escapeSpeed.textContent = fmt(ve)+" km/s";
  ui.timeScaleLabel.textContent = ui.timeScale.value+"×";
}
function classify(e) {
  const scale = MU/EARTH_RADIUS;
  if (e < -0.0005*scale) return "BOUND / ELLIPTIC";
  if (e > 0.0005*scale) return "UNBOUND / ESCAPE";
  return "NEAR PARABOLIC";
}
function updateReadouts() {
  const r = Math.hypot(state.p.x,state.p.y);
  const v = Math.hypot(state.v.x,state.v.y);
  ui.elapsed.textContent = new Date(state.t*1000).toISOString().slice(11,19);
  ui.currentAltitude.textContent = fmt((r-EARTH_RADIUS)/1000,1)+" km";
  ui.currentSpeed.textContent = fmt(v/1000,3)+" km/s";
  ui.energy.textContent = fmt(energy(state)/1e6,2)+" MJ/kg";
  ui.orbitClass.textContent = classify(energy(state));
}
function resize() {
  const rect = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio||1,2);
  canvas.width = Math.max(1,Math.round(rect.width*dpr));
  canvas.height = Math.max(1,Math.round(rect.height*dpr));
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
function draw() {
  const w=canvas.clientWidth,h=canvas.clientHeight,cx=w/2,cy=h/2;
  ctx.clearRect(0,0,w,h);
  const maxR=Math.max(EARTH_RADIUS*1.35,Math.hypot(state.p.x,state.p.y)*1.25);
  const scale=Math.min(w,h)*.43/maxR;
  // Subtle plotting grid.
  ctx.strokeStyle="rgba(110,160,195,.09)";ctx.lineWidth=1;
  for(let i=1;i<=4;i++){const r=maxR*scale*i/4;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();}
  ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(w,cy);ctx.moveTo(cx,0);ctx.lineTo(cx,h);ctx.stroke();
  // Earth.
  const earthR=EARTH_RADIUS*scale;
  const glow=ctx.createRadialGradient(cx,cy,earthR*.7,cx,cy,earthR*2.8);
  glow.addColorStop(0,"rgba(53,155,220,.23)");glow.addColorStop(1,"rgba(53,155,220,0)");
  ctx.fillStyle=glow;ctx.beginPath();ctx.arc(cx,cy,earthR*2.8,0,Math.PI*2);ctx.fill();
  const planet=ctx.createRadialGradient(cx-earthR*.35,cy-earthR*.35,1,cx,cy,earthR);
  planet.addColorStop(0,"#80d9ef");planet.addColorStop(.55,"#2475a8");planet.addColorStop(1,"#102c52");
  ctx.fillStyle=planet;ctx.beginPath();ctx.arc(cx,cy,earthR,0,Math.PI*2);ctx.fill();
  // Trail.
  if(trail.length>1){ctx.beginPath();trail.forEach((p,i)=>{const x=cx+p.x*scale,y=cy-p.y*scale;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.strokeStyle="#5de2e7";ctx.lineWidth=1.7;ctx.globalAlpha=.85;ctx.stroke();ctx.globalAlpha=1;}
  // Spacecraft marker.
  const sx=cx+state.p.x*scale,sy=cy-state.p.y*scale;
  ctx.save();ctx.translate(sx,sy);ctx.rotate(-Math.atan2(state.v.y,state.v.x));
  ctx.fillStyle="#ffbd75";ctx.shadowColor="#ffbd75";ctx.shadowBlur=15;ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(-7,-5);ctx.lineTo(-4,0);ctx.lineTo(-7,5);ctx.closePath();ctx.fill();ctx.restore();
  ctx.fillStyle="#a8bed3";ctx.font="10px system-ui";ctx.fillText("EARTH",cx-earthR*.6,cy+earthR+14);
}
function frame(now) {
  if(!lastFrame)lastFrame=now;
  const realDt=Math.min((now-lastFrame)/1000,.05);lastFrame=now;
  if(running){
    accumulator+=realDt*Number(ui.timeScale.value);
    let steps=0;
    while(accumulator>=STEP&&steps<120){
      state=integrate(state,STEP);accumulator-=STEP;steps++;
      if(Math.hypot(state.p.x,state.p.y)<=EARTH_RADIUS){running=false;ui.play.textContent="▶  PLAY";break;}
      if(steps%3===0){trail.push({x:state.p.x,y:state.p.y});if(trail.length>1800)trail.shift();}
    }
    updateReadouts();
  }
  draw();requestAnimationFrame(frame);
}
function reset(){createState();updateLabels();if(!running){running=true;ui.play.textContent="Ⅱ  PAUSE";}}
ui.altitude.addEventListener("input",()=>{updateLabels();reset();});
ui.speed.addEventListener("input",()=>{updateLabels();reset();});
ui.timeScale.addEventListener("input",updateLabels);
ui.reset.addEventListener("click",reset);
ui.play.addEventListener("click",()=>{running=!running;ui.play.textContent=running?"Ⅱ  PAUSE":"▶  PLAY";});
new ResizeObserver(resize).observe(canvas);
updateLabels();createState();resize();requestAnimationFrame(frame);
