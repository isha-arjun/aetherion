# ASTRA verification plan

## Analytical checks

1. Circular speed: v = sqrt(μ/r)
2. Escape speed: v_escape = sqrt(2μ/r)
3. Circular period: T = 2π sqrt(r³/μ)
4. Specific orbital energy: ε = v²/2 − μ/r
5. Specific angular momentum: h = r × v
6. Hohmann transfer: ideal two-impulse circular coplanar transfer

## Numerical checks

- Gravitational acceleration is central and inward.
- A circular initial state has near-zero eccentricity.
- Velocity-Verlet approximately conserves specific energy and angular momentum over one circular period.
- Invalid and degenerate states fail explicitly.

## Next verification increments

- Compare propagation against an independently generated analytical Kepler solution.
- Add time-step convergence studies (for example, 4 s, 2 s, 1 s).
- Add eccentric-orbit periapsis and apoapsis cases.
- Add a reference-data provenance note for each physical constant.
- Add uncertainty and numerical-error reporting to the UI.

Passing these tests establishes internal consistency for the stated idealized model only. It does not establish flight readiness or real-world mission suitability.
