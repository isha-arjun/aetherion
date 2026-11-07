# AETHERION — Prototype 001

A cinematic, browser-based hand-tracking experiment. Use your webcam to manipulate a virtual reactor with natural hand gestures.

## Features
- Real-time hand landmark tracking using MediaPipe Tasks Vision
- Pinch thumb + index finger to rotate the reactor
- Two-hand distance gesture to scale the reactor
- Procedural Three.js reactor with animated containment rings
- Simulated reactor telemetry and energy pulse
- Local camera processing; no video upload and no AI API keys

## Run locally
1. Open this project folder in Visual Studio Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Open the local page in Chrome or Edge.
5. Click **INITIALIZE CAMERA** and grant camera permission.

Camera access requires a secure context such as `localhost`; opening the HTML directly as a `file://` URL may not work.

## Gestures
- Pinch thumb + index finger, then move your hand: rotate the reactor.
- Show both hands and move them apart/together: scale the reactor.
- **Recenter Core**: reset rotation and scale.
- **Emit Energy Pulse**: trigger a visual reactor pulse.

## Technology
- Three.js for real-time 3D rendering
- MediaPipe Hand Landmarker for webcam-based gesture tracking
- JavaScript, HTML and CSS

## Privacy and network use
Camera frames are processed locally in the browser. The application does not upload or record camera video. On first load, the app downloads Three.js, MediaPipe and the hand-landmarker model from public CDNs, so an internet connection is required.

## Prototype status
This is an experimental prototype. Tracking quality depends on lighting, camera angle and hand visibility. Good lighting and visible hands improve tracking.
