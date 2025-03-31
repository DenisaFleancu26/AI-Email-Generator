# AI Email Generator & Chrome Extension

## 🚀 About the Project

This project is an AI-powered email assistant that helps users generate email responses efficiently. It includes:

 → A Spring Boot backend for AI-generated email suggestions.

 → A React frontend for interacting with the email generator.

 → A Chrome extension that integrates the functionality directly into Gmail.

## 🛠 Technologies Used

→ **Spring Boot** - Backend framework for handling API requests.  

→ **Spring AI** - AI integration for generating email content.  

→ **Gemini AI** - AI model used for text generation.  

→ **React** - Frontend for managing email generation.  

→ **JavaScript** - Used in both the React frontend and Chrome extension.  

→ **Axios** - Handles HTTP requests between the frontend and backend.  

→ **Chrome Extension** - Injects AI functionality into Gmail.  

## 🔧 Installation & Setup

### Backend (Spring Boot)

1. Navigate to the backend folder:

`
cd email-writer-sb
`

2. Build and run the application:

`mvn spring-boot:run`

3. The API will be available at http://localhost:8080

### Frontend (React)

1. Navigate to the frontend folder:

`cd email-writer-react`

2. Install dependencies:

`npm install`

3. Start the development server:

`npm run dev`

4. React will run on http://localhost:5173/

### Chrome Extension

1. Open Chrome and go to chrome://extensions/.

2. Enable Developer Mode (top right corner).

3. Click Load unpacked and select the chrome-extension folder.

4. The extension should now be active in Gmail.
