# AETHERION — Prototype 007

A cinematic, browser-based interactive engineering environment designed as a showcase prototype. Five connected simulated subsystems share one 3D environment, webcam hand tracking, and optional voice commands.

## First launch

1. Open the project in VS Code and run `index.html` with Live Server.
2. Select **INITIALIZE OPTICAL LINK** and allow camera access.
3. Hold an **open palm** clearly in view of the camera.
4. AETHERION runs its cinematic boot sequence: reactor, spatial table, cosmic navigation, intelligence core, and black box.
5. Select **OPEN PILOT GUIDE** at any time for an in-app control reference.

## Cinematic presentation (Prototype 007)

Cinematic Mode adds a distant ringed world, a moon, a drifting debris belt, layered orbital arcs, atmospheric light and a restrained camera drift. The background environment appears in Cinematic Mode to preserve performance during normal interaction. Each module uses a slightly different camera framing. The scene is procedural and illustrative, not a real astronomical rendering.

## Modules

1. **Reactor Laboratory** — adjust simulated output and containment, trigger energy pulses, pause/resume.
2. **Spatial Engineering Table** — rotate a 3D modular assembly, select components using the UI or hand pinch, explode/reassemble and inspect components.
3. **Cosmic Navigation** — explore a procedural star field, select three fictional showcase worlds, inspect target records and activate a simulated wormhole.
4. **Intelligence Core** — local orchestration state, diagnostic scan, event log and a guided demonstration sequence. No external AI model or API.
5. **Black Box** — unlockable experiment records populated by discoveries made in the other modules.

## Hand controls

- **Open palm before boot:** launch the cinematic startup sequence.
- **Index finger:** move the on-screen cursor.
- **Pinch thumb + index:** click buttons and controls.
- **Pinch + move:** rotate the active 3D environment.
- **Two hands:** spread/close to scale the reactor or assembly.
- **Open-palm swipe left/right:** switch modules after boot.
- **Thumbs-up:** trigger an energy pulse.
- **Closed fist:** pause/resume the simulation.
- **V sign:** context action — deploy a satellite, explode the assembly, or activate the wormhole.

Hand recognition is heuristic and depends on camera angle, lighting, distance and hand visibility. A mouse and keyboard remain available as fallback controls.

## Voice commands

Use **ENABLE VOICE COMMANDS** and allow microphone access. Example phrases:

- Navigation: “open reactor”, “open spatial table”, “cosmic navigation”, “intelligence core”, “black box”.
- Spatial: “explode assembly”, “reassemble”, “inspect component”.
- Cosmic: “show Kepler”, “Nereid”, “Pyra”, “wormhole”.
- Intelligence: “run diagnostics”, “system scan”, “demonstration sequence”.
- Reactor: “pulse”, “reset core”, “pause simulation”, “resume simulation”, “power up”, “power down”.
- Objects: “add satellite”, “add orb”, “clear additions”.
- Help: “show guide” or “commands”.

The recognizer uses the browser's Web Speech API where available. Browser support, microphone permissions, internet connection and recognition quality vary. Chrome is recommended. It may rely on the browser's speech service; voice audio is not guaranteed to be processed locally.

## Feedback

Interactions trigger a visual response and a short synthesized UI tone. On devices/browser combinations that support the Vibration API, compatible interactions also request a brief vibration. Most desktop computers do not have vibration hardware, so the visual/audio feedback is the fallback.

## Run locally

Use VS Code Live Server on `index.html`. Camera access requires localhost or HTTPS; opening the file directly with `file://` will not work. The first launch downloads Three.js, MediaPipe and its hand-landmarker model from public CDNs, so an internet connection is required.

## Privacy and simulation boundaries

Camera frames are processed locally in the browser by MediaPipe; this app does not upload or record camera video. Voice recognition is optional and may use the browser's speech service. The interface uses local JavaScript state and procedural 3D scenes, not a connected AI model.

**Important:** This is a cinematic interactive showcase, not yet an engineering simulator. Reactor output, containment, planetary data, materials, component properties and all engineering telemetry are fictional demonstration values. They must not be used for real design, safety analysis, manufacturing, or operational decisions.
