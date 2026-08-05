# System Architecture

## Overview

HealthTalk AI follows a modular architecture where each component has a dedicated responsibility. The application is built using Next.js with the App Router, while external AI services handle speech recognition, healthcare information retrieval, and text-to-speech conversion.

---

## Architecture Diagram

```
                User
                  │
                  ▼
          Voice Recorder
                  │
                  ▼
      AssemblyAI Speech-to-Text
                  │
                  ▼
        Transcribed User Query
                  │
                  ▼
        Medical Information API
                  │
                  ▼
      Healthcare Information
                  │
                  ▼
      Google Text-to-Speech
                  │
                  ▼
         Voice Response
                  │
                  ▼
                User
```

---

## Project Layers

### Presentation Layer

Responsible for displaying information to users.

Components include:

- Header
- Footer
- VoiceRecorder
- ChatWindow
- MessageBubble
- AudioPlayer
- LoadingSpinner

---

### Business Logic Layer

Contains reusable logic.

Files include:

- useRecorder.ts
- helpers.ts
- constants.ts
- types.ts

---

### Service Layer

Responsible for communicating with external APIs.

Services:

- assemblyAI.ts
- medicalAPI.ts
- textToSpeech.ts

---

### API Layer

Next.js API Routes act as the backend.

Routes:

- /api/speech
- /api/medical
- /api/tts

---

## Advantages of the Architecture

- Modular
- Reusable
- Easy to maintain
- Scalable
- Separation of concerns
- Easy integration with additional AI services
