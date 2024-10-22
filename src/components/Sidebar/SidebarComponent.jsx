import React from "react";
import {
  Box,
  Typography,
  Button
  
} from "@mui/material";
import logo from "../../logo.svg";
import editIcon from "../../components/assets/edit.svg";

export default function SidebarComponent({savedResponse}) {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between", // Changed for better alignment
      width: "100%", // Full width
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "47px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around", // Changed for better alignment
        alignItems: "center",
        backgroundColor: "#D7C7F4",
        marginBottom: "10px",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: "20px",
          lineHeight: "23px",
          color: "#000000",
          fontWeight: "400",
          fontFamily: "Ubuntu",
        }}
      >
        New Chat
      </Typography>
      <img src={editIcon} alt="editIcon" style={{ cursor: "pointer" }} />
    </Box>

    <Button
      variant="contained"
      
      
      sx={{
        fontSize: "16px",
        lineHeight: "19px",
        color: "#414146",
        background: "#D7C7F4",


        fontWeight: "700",
        fontFamily: "Ubuntu !important",
        textAlign: "enter",
        width: "90%", // Full width
        height: "39px",
        
        borderRadius: "10px",
        marginBottom: 1, // Space between elements
        border:"none",
      }}
    >
      Past Conversations
    </Button>
  </Box>
  )
}