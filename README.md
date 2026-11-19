# AETHERION — Aerospace Engineering Environment

Aetherion is a cinematic, browser-based engineering environment evolving into an educational aerospace simulation workspace. It preserves its original interactive showcase while introducing ASTRA, a physics-based orbital mechanics lab.

## Open the application

- Production site: https://aetherion-clear-board.vercel.app
- GitHub repository: https://github.com/isha-arjun/aetherion

The app is a static browser experience. No server, API key, or hardware is needed to explore the simulation. Camera and microphone are optional.

## Core modules

1. **Reactor Laboratory** — the original fictional energy-core visual experiment. Its telemetry is illustrative, not physical engineering data.
2. **Spatial Engineering Table** — interactive modular assembly with component inspection, explode/reassemble, and gesture-friendly manipulation.
3. **ASTRA Orbital Dynamics** — an Earth-centred two-body orbital simulator with adjustable initial altitude and tangential speed, adjustable time scale, play/pause/reset, trajectory plotting, and live telemetry.
4. **Intelligence Core** — local subsystem diagnostic log and demonstration sequence. It does not call an external AI model.
5. **Black Box Archive** — unlockable experiment records.

## ASTRA model

ASTRA integrates Newtonian point-mass gravity using a velocity-Verlet method. State vectors are represented in SI units, with Earth's standard gravitational parameter:

- μ = 3.986004418 × 10^14 m³/s²
- Earth reference radius: 6,371,000 m
- Fixed simulation step: 2 seconds

The initial state is circularly tangential at the selected altitude. The interface shows circular speed, escape speed, specific orbital energy, estimated orbit class, current altitude, current speed, and elapsed simulation time.

### Model limitations

The educational model assumes a spherical point-mass Earth and a massless spacecraft. It does not include atmospheric drag, Earth oblateness (J2), third-body perturbations, solar radiation pressure, thrust, finite-burn guidance, or relativistic effects. It is not a flight-qualified tool and must not be used for real mission planning, navigation, safety analysis, or operational decisions.

## Interaction

- The existing optical interface can use optional local browser hand tracking.
- Voice commands are optional and use the browser's Web Speech API where available.
- Mouse and touch controls remain available.
- Cinematic Mode remains available for full-screen presentation.

Camera and voice permissions should only be granted when the user chooses to enable those features. Hand tracking depends on camera quality, lighting, and browser support.

## Development

This is a static site using Three.js from a public CDN and optional MediaPipe hand tracking. Open `index.html` through a local static server or use the Vercel deployment. Camera access requires HTTPS or localhost.

## Simulation integrity

Aetherion is a showcase and educational environment. ASTRA's two-body module contains real Newtonian equations and documented assumptions, but it is not a substitute for validated aerospace engineering software. Other legacy modules intentionally remain fictional visual simulations.