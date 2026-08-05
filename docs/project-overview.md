# Project Overview

## Introduction

HealthTalk AI is an AI-powered healthcare consultation web application designed to provide users with a simple voice-based interaction for obtaining general healthcare information. Instead of typing, users can speak their symptoms or healthcare-related questions, making the interaction more natural and accessible.

The application demonstrates how multiple cloud-based AI services can work together to create a seamless healthcare consultation experience.

---

## Objectives

The primary objectives of this project are:

- Develop a voice-based healthcare consultation interface.
- Convert spoken input into text using AssemblyAI.
- Retrieve healthcare information from an external Medical API.
- Convert the generated response back into speech.
- Build a responsive and user-friendly interface using Next.js and React.

---

## Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- CSS

### APIs

- AssemblyAI Speech-to-Text API
- API Ninjas Medical API
- Google Text-to-Speech API

---

## Project Workflow

1. User starts voice recording.
2. Audio is processed using AssemblyAI.
3. Speech is converted into text.
4. The text is sent to the Medical API.
5. Relevant healthcare information is retrieved.
6. The response is displayed to the user.
7. The response is converted into speech using Google Text-to-Speech.

---

## Key Features

- Voice-based consultation
- Speech-to-Text conversion
- Medical information retrieval
- AI-generated voice response
- Responsive user interface
- Modular project architecture

---

## Future Scope

Possible future improvements include:

- User authentication
- Chat history
- Appointment scheduling
- AI-powered symptom prediction
- Multi-language voice support
- Electronic Health Record (EHR) integration
