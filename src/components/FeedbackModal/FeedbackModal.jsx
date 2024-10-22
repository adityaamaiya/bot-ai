// FeedbackModal.js
import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import bulb from "../assets/bulb.svg";
import close from "../assets/close.svg";
const FeedbackModal = ({ open, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback(""); // Clear feedback after submission
    onClose(); // Close the modal
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: { md: "50%", xs: "90%" },
          height: "max-content",
          padding: 3,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 24,
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontFamily: "Open Sans",
            fontSize: { xs: "18px", md: "22px" }, // Responsive font size
            lineHeight: "30px",
            fontWeight: "400",
          }}
          gutterBottom
        >
          <img
            src={bulb}
            alt="bulb"
            style={{ width: "40px", height: "42px", marginRight: "10px" }}
          />
          Provide Additional Feedback
          <img
            src={close}
            alt="close"
            onClick={onClose}
            style={{ float: "right", cursor: "pointer" }}
          />
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          sx={{
            marginTop: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              height: "170px",
              padding: 0,
            },
            "& .MuiOutlinedInput-input": {
              padding: "0 14px",
              height: "170px",
              lineHeight: "41px",
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button onClick={onClose} color="secondary" sx={{ marginRight: 1 }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
            sx={{
              border: "none",
              textTransform: "none",
              fontFamily: "Ubuntu",
              fontSize: { xs: "20px", md: "20px" }, // Responsive font size
              lineHeight: "22px",
              fontWeight: "400",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
