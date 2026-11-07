# AETHERION — Prototype 003

A cinematic, browser-based engineering environment. Five interconnected simulated subsystems share one 3D scene and one webcam hand-control layer.

## Modules
1. **Reactor Laboratory** — adjust simulated output and containment, trigger energy pulses, pause/resume.
2. **Spatial Engineering Table** — manipulate a 3D modular assembly with hand rotation and two-hand scaling; explode/reassemble and inspect components.
3. **Cosmic Navigation** — explore a procedural star field, select planets with the hand cursor, inspect planetary records and activate a simulated wormhole.
4. **Intelligence Core** — local state-machine orchestration, diagnostic scan, event log and a demonstration sequence. No external AI model or API.
5. **Black Box** — records unlock when simulated discoveries occur.

## Signature interaction system
Hand tracking is the primary interaction layer:
- **Point** with the index fingertip to move the on-screen cursor.
- **Pinch** thumb and index finger to activate interface buttons and controls.
- **Pinch + move** to rotate the reactor, assembly or cosmic view.
- **Two-hand spread / close** to scale the active reactor or assembly.
- **Open-palm swipe left/right** to switch between the five modules.
- **Thumbs-up** triggers an energy pulse.
- **Closed fist** toggles simulation pause/resume.
- **V sign** performs a context-sensitive action: deploy a satellite, explode the assembly, or activate the wormhole.
- Normal mouse/touch controls remain available as a fallback. Gesture detection depends on camera angle, lighting and hand visibility; gestures can occasionally be misclassified.

## Expanded voice commands
- Navigation: "reactor lab", "spatial table", "cosmic navigation", "intelligence core", "black box archive".
- Reactor: "pulse", "fire", "reset core", "pause simulation", "resume simulation", "power up", "power down".
- Objects: "add satellite", "add orb", "clear additions".
- Spatial table: "explode assembly", "reassemble", "inspect component".
- Cosmic navigation: "Kepler", "Nereid", "Pyra", "wormhole".
- Intelligence: "run scan", "diagnostics", "demonstration sequence".

Voice recognition depends on browser support and may use the browser's speech service.

## Run locally
Open the folder in VS Code and use Live Server on `index.html`. Allow camera permission. Webcam access requires localhost or another secure context. First load downloads Three.js, MediaPipe and its hand-landmarker model from public CDNs, so internet is needed initially.

## Voice commands
Optional browser speech recognition: pulse, reset, satellite, orb, explode, reassemble, wormhole, reactor, spatial, cosmic, intelligence, archive, scan, pause, resume, left, right, power up, power down. Browser support and recognition quality vary. Voice recognition may use the browser's speech service.

## Privacy and simulation boundaries
Camera frames are processed locally in the browser by MediaPipe; this app does not upload or record camera video. Voice is optional and separate. The interface uses local JavaScript state machines, not a paid AI API. Reactor output, containment, planetary data and all engineering telemetry are fictional visual simulation values, not real measurements, engineering advice or an operational reactor model.
