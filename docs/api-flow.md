# API Flow

## Overview

HealthTalk AI integrates multiple external APIs to provide a voice-based healthcare consultation experience. The application processes the user's voice input, retrieves relevant healthcare information, and converts the response back into speech.

---

## Complete Request Flow

```
User
 │
 │ Speak Query
 ▼
VoiceRecorder Component
 │
 ▼
useRecorder Hook
 │
 ▼
POST /api/speech
 │
 ▼
AssemblyAI Service
 │
 ▼
Speech-to-Text
 │
 ▼
Transcript
 │
 ▼
POST /api/medical
 │
 ▼
Medical API Service
 │
 ▼
Healthcare Information
 │
 ▼
POST /api/tts
 │
 ▼
Google Text-to-Speech
 │
 ▼
Generated Audio
 │
 ▼
AudioPlayer Component
 │
 ▼
User Hears Response
```

---

## API Endpoints

### POST `/api/speech`

**Purpose**

Converts user speech into text.

**Input**

```json
{
  "audioUrl": "recorded-audio-url"
}
```

**Output**

```json
{
  "id": "transcript_id",
  "status": "completed",
  "text": "I have a headache."
}
```

---

### POST `/api/medical`

**Purpose**

Retrieves healthcare information based on the transcript.

**Input**

```json
{
  "query": "I have a headache."
}
```

**Output**

```json
{
  "title": "Headache",
  "description": "Common causes include dehydration, stress, or lack of sleep."
}
```

---

### POST `/api/tts`

**Purpose**

Converts the response into speech.

**Input**

```json
{
  "text": "Stay hydrated and get adequate rest."
}
```

**Output**

```json
{
  "audioContent": "Base64EncodedAudio"
}
```

---

## Error Handling

Each API route validates user input before calling external services.

Possible HTTP status codes include:

- **200** — Success
- **400** — Invalid request
- **500** — Internal server error

---

## External Services

| Service | Purpose |
|----------|---------|
| AssemblyAI | Speech-to-Text |
| API Ninjas | Medical Information |
| Google Text-to-Speech | Voice Response |

---

## Benefits

- Modular API design
- Easy to maintain
- Easy to replace external providers
- Clear separation between frontend and backend logic
