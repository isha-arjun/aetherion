import test from "node:test";
import assert from "node:assert/strict";
import {
  EARTH,gravitationalAcceleration,specificOrbitalEnergy,specificAngularMomentum,
  velocityVerlet,circularOrbitSpeed,escapeSpeed,circularOrbitPeriod,orbitalElements,hohmannTransfer
} from "../src/orbital-mechanics.js";

const close=(actual,expected,tolerance)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} not within ${tolerance} of ${expected}`);

test("Earth circular-orbit reference values at 400 km",()=>{
  const r=EARTH.meanRadius+400_000;
  close(circularOrbitSpeed(r),7_672.6,0.1);
  close(escapeSpeed(r),10_850.7,0.1);
  close(circularOrbitPeriod(r),5_544.9,0.1);
});

test("gravity points toward the central body and follows inverse-square magnitude",()=>{
  const a=gravitationalAcceleration({x:7_000_000,y:0});
  assert.ok(a.x<0);close(a.y,0,1e-12);
  close(Math.abs(a.x),EARTH.mu/(7_000_000**2),1e-12);
});

test("circular state has near-zero radial velocity and bounded osculating elements",()=>{
  const r=EARTH.meanRadius+400_000,v=circularOrbitSpeed(r);
  const elements=orbitalElements({x:r,y:0},{x:0,y:v});
  close(elements.eccentricity,0,1e-12);
  close(elements.periapsisRadius,r,1e-5);
  close(elements.apoapsisRadius,r,1e-5);
});

test("velocity-Verlet approximately conserves energy and angular momentum over one orbit",()=>{
  const r=EARTH.meanRadius+400_000,v=circularOrbitSpeed(r),period=circularOrbitPeriod(r);
  const initial={p:{x:r,y:0},v:{x:0,y:v},t:0};
  const e0=specificOrbitalEnergy(initial.p,initial.v),h0=specificAngularMomentum(initial.p,initial.v);
  let state=initial;
  const dt=2,steps=Math.round(period/dt);
  for(let i=0;i<steps;i++)state=velocityVerlet(state,dt);
  const e1=specificOrbitalEnergy(state.p,state.v),h1=specificAngularMomentum(state.p,state.v);
  assert.ok(Math.abs((e1-e0)/e0)<1e-7,"specific energy drift exceeded tolerance");
  assert.ok(Math.abs((h1-h0)/h0)<1e-10,"specific angular momentum drift exceeded tolerance");
  close(Math.hypot(state.p.x,state.p.y),r,100);
});

test("Hohmann transfer returns positive burns and half-period transfer time",()=>{
  const result=hohmannTransfer(EARTH.meanRadius+300_000,EARTH.meanRadius+800_000);
  assert.ok(result.deltaV1>0&&result.deltaV2>0&&result.totalDeltaV>0);
  close(result.totalDeltaV,result.deltaV1+result.deltaV2,1e-9);
  close(result.transferTime,Math.PI*Math.sqrt(result.transferSemiMajorAxis**3/EARTH.mu),1e-8);
});

test("invalid and degenerate inputs are rejected",()=>{
  assert.throws(()=>circularOrbitSpeed(0),RangeError);
  assert.throws(()=>velocityVerlet({p:{x:0,y:0},v:{x:1,y:0},t:0},1),RangeError);
  assert.throws(()=>hohmannTransfer(7e6,7e6),RangeError);
  assert.throws(()=>orbitalElements({x:7e6,y:0},{x:1,y:0}),RangeError);
});
