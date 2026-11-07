# AETHERION — Prototype 002

A cinematic, browser-based engineering interface with real-time webcam hand tracking, a procedural 3D reactor, optional voice commands, additional 3D objects, and adjustable simulated reactor telemetry.

## Features
- Real-time hand landmark tracking using MediaPipe Tasks Vision
- Pinch thumb + index finger and move to rotate the reactor
- Two-hand distance gesture to scale the reactor
- Optional voice commands (browser Web Speech API)
- Add orbiting satellites and energy orbs to the 3D scene
- Adjustable simulated core output and containment parameters
- Pause/resume simulation, recenter core, and trigger an energy pulse
- Camera frames are processed locally in the browser; no camera video upload or recording by this app
- No AI API keys

## Run locally
1. Open this project folder in Visual Studio Code.
2. Use Live Server to open `index.html`.
3. Click **INITIALIZE CAMERA** and grant camera permission.
4. Optional: click **ENABLE VOICE COMMANDS** and grant microphone permission if the browser asks.

Camera access requires a secure context such as `localhost`; opening the HTML directly as a `file://` URL may not work.

## Voice commands
Say **help** for the in-app command reminder. Supported examples:
- "Pulse"
- "Recenter"
- "Add satellite"
- "Add orb"
- "Clear additions"
- "Rotate left" / "Rotate right"
- "Pause simulation" / "Resume simulation"
- "Increase power" / "Decrease power"

Voice recognition depends on browser support. The Web Speech API may send audio to a browser speech-recognition service; voice is off until explicitly enabled. Camera tracking remains separate and local to this app.

## Technology
- Three.js for real-time 3D rendering
- MediaPipe Hand Landmarker for webcam-based gesture tracking
- Browser Web Speech API for optional voice commands
- JavaScript, HTML and CSS

## Network and privacy
On first load, the app downloads Three.js, MediaPipe and the hand-landmarker model from public CDNs, so an internet connection is required. This app does not upload or record camera video. Voice recognition is a separate optional browser feature and may use the browser provider's service.

## Prototype status
AETHERION is an experimental visual simulation. Reactor telemetry is fictional UI data, not real engineering measurements or a model of an operational reactor. Tracking quality depends on lighting, camera angle and hand visibility.