# AETHERION — Prototype 003

A cinematic, browser-based engineering environment. Five interconnected simulated subsystems share one 3D scene and one webcam hand-control layer.

## Modules
1. **Reactor Laboratory** — adjust simulated output and containment, trigger energy pulses, pause/resume.
2. **Spatial Engineering Table** — manipulate a 3D modular assembly with hand rotation and two-hand scaling; explode/reassemble and inspect components.
3. **Cosmic Navigation** — explore a procedural star field, select planets with the hand cursor, inspect planetary records and activate a simulated wormhole.
4. **Intelligence Core** — local state-machine orchestration, diagnostic scan, event log and a demonstration sequence. No external AI model or API.
5. **Black Box** — records unlock when simulated discoveries occur.

## Hand controls
- Point with the index finger to move the on-screen cursor.
- Pinch thumb and index finger to activate interface buttons and controls.
- Pinch and move to rotate the reactor, assembly or cosmic view.
- Use two hands and spread/bring them together to scale the active reactor or assembly.
- The hand cursor and gestures work across the interface; normal mouse/touch input remains available as a fallback.

## Run locally
Open the folder in VS Code and use Live Server on `index.html`. Allow camera permission. Webcam access requires localhost or another secure context. First load downloads Three.js, MediaPipe and its hand-landmarker model from public CDNs, so internet is needed initially.

## Voice commands
Optional browser speech recognition: pulse, reset, satellite, orb, explode, reassemble, wormhole, reactor, spatial, cosmic, intelligence, archive, scan, pause, resume, left, right, power up, power down. Browser support and recognition quality vary. Voice recognition may use the browser's speech service.

## Privacy and simulation boundaries
Camera frames are processed locally in the browser by MediaPipe; this app does not upload or record camera video. Voice is optional and separate. The interface uses local JavaScript state machines, not a paid AI API. Reactor output, containment, planetary data and all engineering telemetry are fictional visual simulation values, not real measurements, engineering advice or an operational reactor model.
