# HealthTalk AI

HealthTalk AI is an AI-powered healthcare consultation web application that enables users to interact using voice instead of typing. The application converts spoken input into text, analyzes the query, retrieves relevant medical information through external APIs, and provides both text and voice responses.

## Features

- Voice-based healthcare consultation
- Speech-to-Text using AssemblyAI
- Medical information retrieval using API Ninjas
- Text-to-Speech response generation
- Responsive user interface
- Built with Next.js, React, and TypeScript

## Tech Stack

- Next.js
- React
- TypeScript
- AssemblyAI API
- API Ninjas
- Google Text-to-Speech
- CSS

## Project Structure

```
HealthTalk-AI
├── public
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   ├── services
│   ├── styles
│   └── utils
├── docs
└── README.md
```

## Workflow

1. User speaks a healthcare-related query.
2. Audio is converted into text using AssemblyAI.
3. The text is processed and sent to a medical API.
4. The medical information is displayed to the user.
5. The response is converted back into speech.

## Future Improvements

- Appointment booking
- Chat history
- User authentication
- AI-powered symptom analysis
- Multi-language support

## License

This project is licensed under the MIT License.
