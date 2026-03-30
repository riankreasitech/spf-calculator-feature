# spf.io Technical Integrations & Specs

This document highlights the technical mechanisms, platform support, and setup requirements for integrating spf.io into existing workflows.

## 1. Supported Platforms

### Video Conferencing
- **Zoom**: Full bidirectional support (Standard & Gov).
- **Microsoft Teams**: Via RTMP or external viewer.
- **Google Meet**: Browser-based caption overlay.
- **Webex**: Native integration or external viewer.

### Live Streaming & RTMP
- **YouTube Live**: Native Closed Captions (608/708).
- **Social Media**: Facebook Live, Twitch.
- **Streaming Software**: OBS Studio, vMix, Streamlabs, Wirecast, StreamYard.

### Event Platforms
- **Hopin**, **Crowdcast**, **Airmeet**, **Cvent**, **Subsplash**.

---

## 2. Audio Capture Mechanisms (Input)

Spf.io requires a clean audio feed to generate accurate captions.

- **Cloud Loopback (CLB)**: 
    - **Method**: A specialized "bot" joins the meeting/event as a guest.
    - **Best for**: Easiest setup; handles multiple speakers without local hardware requirements.
- **Local Loopback**:
    - **Method**: Virtual audio drivers route sound from the conferencing app to the spf.io Operator interface.
    - **Hardware/Software**: Requires a secondary computer (the "Captioning Station") usually running **VB-Audio Cable** or **Loopback (macOS)**.
- **Direct Microphone**: Standard USB/XLR input for in-person events.

---

## 3. Caption Delivery Mechanisms (Output)

- **Platform-Specific API**:
    - **Zoom Caption API Token**: Delivers text directly into the "Closed Caption" field in Zoom.
    - **Ingestion URL**: Used by **YouTube Live** (HTTP POST) to ingest 608/708 captions.
- **External Viewer / Overlay**:
    - **Browser Source**: A transparent URL that can be added as a layer in OBS or vMix.
    - **IFrame Embed**: A customized viewer that can be embedded into any website or event platform.
    - **Mobile Link**: A unique QR code or link for attendees to view live translation on their own devices.

---

## 4. Technical Requirements

- **Network**: Minimum **1.0 Mbps** dedicated upload/download. **Wired Ethernet** is highly recommended for live broadcasting.
- **Operating System**: 
    - No specific OS for Cloud Loopback (CLB).
    - Windows or macOS for Local Loopback (to support virtual audio drivers).
- **Browsers**: Chrome (latest), Firefox, Safari, Edge.
- **Permissions**:
    - **Zoom**: Enable "Closed Captioning" and "API Token" in meeting settings.
    - **YouTube**: Livestream-enabled channel with "Closed Captions" active in Studio.

---

## 5. Summary Table

| Feature | Zoom | YouTube Live | Other RTMP |
| :--- | :--- | :--- | :--- |
| **Input** | CLB or Local | CLB or RTMP | RTMP / Source |
| **Output** | Native CC (API) | Native CC (URL) | Overlay / Link |
| **Bidirectional** | Yes | No (1-way) | No (1-way) |
| **Language Count** | 100+ channels | 1-2 streams | 100+ channels |

---
*Technical specifications compiled on 2026-03-30.*
