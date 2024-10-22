# AI Chatbot with Feedback Application

This project is an interactive application where users can chat with an AI model and provide feedback at various stages of the conversation. The application allows users to save multiple conversations, revisit them, and see the feedback they've provided for each chat.

## Features

### 1. **Chat with an AI Model**

- Users can interact with an AI model and receive responses.
- Conversations are stored, allowing users to revisit them at any time.

### 2. **Feedback Mechanism**

- **Like/Dislike Buttons**: Users can provide instant feedback on each AI response by hovering over the response. Thumbs up (like) and thumbs down (dislike) buttons appear when hovering.
<!-- - **Rating System**: At the end of the conversation, users can provide a rating out of 5. The rating can be represented using:
  - A Likert scale (1–5)
  - A 5-star rating system -->
- **Subjective Feedback**: Users can provide their own subjective feedback about the conversation once it is finished.

### 3. **Saved Conversations**

- Each conversation is saved along with the feedback provided.
- Conversations can be revisited from the sidebar or top bar.
- While viewing a past conversation, users can also see the feedback they provided during that conversation.

## Technologies Used

- **React.js**: For building the user interface.
- **Material UI**: For UI components and responsive design.
- **React Router**: For managing navigation and routing between pages.
- **Local Storage**: For saving conversations and feedback across sessions.
- **Fetch API**: For sending and receiving data from the AI model's API.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adityaamaiya/bot-ai
   ```
2. Navigate to the project directory:
   ```bash
   cd bot-ai
   ```
3. Install dependencies:
   ```bash
    npm install
   ```
4. start the development server:
   ```bash
   npm start
   ```

5.The application should now be running at `http://localhost:3000`. 

## Future Enhancements
- **User Authentication**: Implement user authentication to allow users to save and manage their conversations.
- **AI Model Integration**: Integrate with different AI models to provide a variety of conversational experiences.
- **Feedback Analysis**: Analyze user feedback to improve the AI model's responses.
- **Visualizations**: Create visualizations to display feedback trends over time.
- **Mobile Responsiveness**: Ensure the application is responsive and usable on mobile devices.
- **Error Handling**: Improve error handling for a smoother user experience.

## License
This project is licensed under the MIT License.


