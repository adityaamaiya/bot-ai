import Home from "./components/Home/Home";
import ConversationHistory from "./components/ConversationHistory/ConversationHistory";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversationHistory" element={<ConversationHistory />} />
    </Routes>
  );
}

export default App;
