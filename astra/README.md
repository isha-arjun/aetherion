# ASTRA — Orbital Mechanics Lab

ASTRA is an educational orbital mechanics module inside Aetherion. It models a spacecraft moving under the gravity of one central body using a two-dimensional Newtonian two-body approximation.

## Open it

Open [astra/index.html](index.html) in a modern browser, or publish the repository with GitHub Pages and visit `/astra/`.

## Model

- SI units internally: metres, seconds, kilograms.
- Point-mass central body with gravitational parameter \(\mu = GM\).
- Two-dimensional Newtonian gravity.
- Velocity-Verlet numerical integration.
- Adjustable initial altitude, tangential speed, and simulation speed.
- Circular-orbit and escape-speed reference values.

## Model boundaries

This is an educational two-body model, not a flight-qualified tool. It omits atmospheric drag, oblateness, third-body perturbations, thrust, finite-burn guidance, and relativistic effects. It must not be used for real mission design or operational decisions.

## Controls

- **Play / Pause**: run or pause the simulation.
- **Reset**: restore the selected initial conditions.
- **Altitude** and **speed**: change the initial state and reset.
- **Time scale**: change simulated seconds per real second.

No backend, API key, hardware, or external library is required.
