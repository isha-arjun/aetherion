# AETHERION — Engineering & Robotics Laboratory

Aetherion is a project-led engineering learning environment spanning robotics, electronics, software, mechanical design, AI and aerospace systems. It combines interactive visualisations, a tested orbital mechanics core, and an Engineering Academy that turns each discipline into practical milestones and capstone builds. It is designed to develop engineering competence through building, testing, debugging and documentation—not through physics-heavy theory alone.

## Engineering Academy

The Academy contains six learning paths: Robotics & Control, Electronics & Embedded Systems, Software Engineering, Mechanical Design & CAD, AI/Vision & Autonomy, and Aerospace & Systems. Each path has practical milestones, while the capstone queue includes a robot-arm digital twin, smart sorting system, autonomous explorer simulation, SCRIPTOR writing-robot design, and an integrated engineering portfolio. Checklist progress is saved locally in the browser; it is a learning tracker, not an externally verified qualification.

The curriculum is project-first. Physics is introduced when needed to model or explain a system. The strongest evidence of progress is a working prototype or simulation, tests, design notes, and a clear technical review.

## Current engineering capability: ASTRA

ASTRA is an Earth-centred orbital mechanics module implementing:

- Two-dimensional Newtonian point-mass gravity
- SI-unit state vectors and validated inputs
- Velocity-Verlet numerical propagation
- Specific orbital energy and angular momentum
- Osculating eccentricity, semi-major axis, periapsis and apoapsis
- Circular speed, escape speed and orbital period
- Ideal impulsive Hohmann transfer calculations between circular coplanar orbits
- Live trajectory visualization and orbital telemetry

The UI imports its physics functions from `engineering/src/orbital-mechanics.js`; the interface does not maintain a separate copy of the equations.

## Engineering verification

Run the test suite with Node.js 20 or later:

```sh
npm test
```

GitHub Actions runs the same suite when engineering code, UI integration, or test configuration changes. Tests cover analytical reference values, gravity direction, circular-orbit elements, numerical energy/angular-momentum conservation, Hohmann transfer outputs, and invalid inputs.

- [Engineering model and assumptions](engineering/README.md)
- [Verification plan](engineering/VALIDATION.md)
- [ASTRA orbital mechanics source](engineering/src/orbital-mechanics.js)
- [Automated tests](engineering/tests/orbital-mechanics.test.js)

## Architecture

```
Aetherion
├── index.html                 Browser engineering interface
├── main.js                    Three.js visuals, controls, ASTRA presentation
├── style.css                  Responsive interface styling
├── engineering/
│   ├── src/orbital-mechanics.js  Independent physics calculation library
│   ├── tests/                    Numerical and analytical verification
│   ├── README.md                 Model assumptions and conventions
│   └── VALIDATION.md             Verification plan
└── .github/workflows/            Continuous integration
```

## Model assumptions and limitations

ASTRA currently models a massless spacecraft under a spherical point-mass Earth. It omits atmospheric drag, Earth oblateness (J2), third-body gravity, solar radiation pressure, thrust, finite-burn guidance, attitude dynamics, thermal loads, structural analysis, propulsion performance, and uncertainty propagation.

The Hohmann transfer calculator assumes circular coplanar orbits and ideal instantaneous impulses. These are textbook preliminary-design models, not operational manoeuvre recommendations.

This is an educational engineering project, not flight-qualified software. Do not use its outputs for real mission design, navigation, safety-critical analysis, or operational decisions. Model expansion requires independent reference comparisons, numerical convergence studies, and documented validation.
