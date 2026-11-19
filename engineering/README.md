# Aetherion Aerospace Engineering

This directory contains the engineering software, verification tests, and model documentation. It is deliberately separated from the cinematic user interface.

## Current capability: ASTRA orbital mechanics

- Two-dimensional Newtonian point-mass gravity
- SI-unit state vectors
- Velocity-Verlet numerical integration
- Specific orbital energy and angular momentum
- Osculating Keplerian elements for planar trajectories
- Circular and escape speed references
- Ideal impulsive Hohmann transfer between circular coplanar orbits
- Automated numerical verification using Node's built-in test runner

## Run verification

Requires Node.js 20 or later:

```sh
npm test
```

GitHub Actions runs the same verification suite when engineering files change.

## Engineering conventions

- Position: metres (m)
- Velocity: metres per second (m/s)
- Time: seconds (s)
- Gravitational parameter: cubic metres per second squared (m³/s²)
- Specific energy: joules per kilogram (J/kg)
- Specific angular momentum: square metres per second (m²/s)

Inputs are validated; invalid, degenerate, and non-finite states are rejected instead of silently producing misleading output.

## Model assumptions and limitations

The propagator assumes a massless spacecraft and a spherical point-mass central body. It does not include atmospheric drag, Earth oblateness (J2), third-body gravity, solar radiation pressure, thrust, finite-burn guidance, attitude dynamics, thermal loads, structural analysis, propulsion performance, or uncertainty propagation.

The Hohmann calculator assumes two circular coplanar orbits and ideal instantaneous impulses. It is a textbook preliminary-design calculation, not an operational manoeuvre recommendation.

This repository is an educational engineering project. It is not flight-qualified, and its output must not be used for real mission design, navigation, safety-critical analysis, or operational decisions. Independent validation against authoritative references is required before expanding model fidelity.
