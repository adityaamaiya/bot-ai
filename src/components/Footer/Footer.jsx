import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Footer({ onAsk, onSave, onFeedback }) {
  const [input, setInput] = React.useState("");
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: 30,
        padding: "10px",
        alignItems: "center",
        gap: { xs: "15px", md: "20px" }, // Reduced gap for mobile
        marginTop: 2,
      }}
    >
      <TextField
        variant="outlined"
        onChange={(event) => setInput(event.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            height: "41px",
            padding: 0,
          },
          "& .MuiOutlinedInput-input": {
            padding: "0 14px",
            height: "41px",
            lineHeight: "41px",
          },
          width: { xs: "100%", md: "746px" }, // Responsive width
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={onAsk(input)}
        sx={{
          border: "none",
          height: "41px",
          fontFamily: "Ubuntu",
          fontWeight: "400",
          fontSize: { xs: "16px", md: "20px" }, // Responsive font size
          textTransform: "none",
          width: { xs: "63px", md: "73px" }, // Full width on mobile
        }}
      >
        Ask
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={onSave()}
        sx={{
          border: "none",
          height: "41px",
          fontFamily: "Ubuntu",
          fontWeight: "400",
          fontSize: { xs: "16px", md: "20px" }, // Responsive font size
          textTransform: "none",
          width: { xs: "63px", md: "73px" }, // Full width on mobile
        }}
      >
        Save
      </Button>
    </Box>
  );
}
