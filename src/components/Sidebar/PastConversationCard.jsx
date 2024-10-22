import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PastConversationCard({ conversation }) {
  const navigate = useNavigate();

  const handleBtnClick = (item) => {
    navigate("/conversationHistory", { state: { item } });
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Render conversation details here */}
      {conversation.map((item, index) => (
        <Button key={index} onClick={() => handleBtnClick(item)}>
          {/* Render each item in the conversation */}
          <p>{item.time}</p>
          {/* You can access item properties like item.question and item.response */}
        </Button>
      ))}
    </Box>
  );
}
