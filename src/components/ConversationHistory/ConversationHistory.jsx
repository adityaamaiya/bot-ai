import { useLocation } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton, Drawer } from "@mui/material";
import SidebarComponent from "../Sidebar/SidebarComponent";
import hamburgerIcon from "../assets/hamburger.svg";
import ResponseCard from "../ResponseCard/ResponseCard";
import theme from "../../theme"; // Import the theme from the file
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const ConversationHistory = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Access 'item' passed via state
  const navigate = useNavigate();
  const savedResponses =
    JSON.parse(localStorage.getItem("saved-response")) || [];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDeleteConversation = () => {
    if (item) {
      // Assuming item.time is unique for each conversation
      const updatedResponses = savedResponses.filter(
        (response) => response.time !== item.time
      );
      localStorage.setItem("saved-response", JSON.stringify(updatedResponses));
      // Optionally, navigate back to previous page or show a confirmation message
      navigate("/"); // Replace with your desired route
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Change direction based on screen size
          height: "100vh",
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on mobile
            backgroundColor: "white",
            width: { md: "15%", xs: "100%" }, // Change width based on screen size
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sidebar Content */}
          <SidebarComponent savedResponse={savedResponses} />
        </Box>

        {/* Mobile Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <SidebarComponent savedResponse={savedResponses} />
        </Drawer>
        {/* Hamburger Icon for Mobile */}

        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, width: "max-content" }}
          onClick={toggleDrawer(true)}
        >
          <img src={hamburgerIcon} alt="toggle sidebar" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            overflowY: "auto",
            width: { md: "75%", xs: "100%" }, // Change width based on screen size
            padding: { xs: 2, md: 2 }, // Add padding on mobile

            marginTop: { xs: 0, md: 5 }, // Add margin on mobile
          }}
        >
          <Typography
            variant="h1"
            textAlign="center"
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { xs: "24px", md: "28px" }, // Responsive font size
              lineHeight: "32px",
              fontWeight: "400",
              marginBottom: { xs: 2, md: 10 }, // Add margin on mobile
            }}
          >
            {" "}
            Conversation History
          </Typography>
          {console.log(item)}
          {item ? (
            <>
              <Typography
                sx={{
                  fontFamily: "Ubuntu",
                  fontSize: { xs: "18px", md: "20px" }, // Responsive font size
                  lineHeight: "23px",
                  fontWeight: "400",
                  marginBottom: { xs: 2, md: 5 }, // Add margin on mobile
                }}
              >
                {item.time}
              </Typography>
              {item.response.map((item, index) => (
                <ResponseCard key={index} response={item} />
              ))}
              {/* <p>Item Name: {item.response[0].response}</p> */}
              {/* Display more details from 'item' */}
            </>
          ) : (
            <p>No item data available</p>
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteConversation} // Call delete function on click
            sx={{
              border: "none",
              height: "41px",
              fontFamily: "Ubuntu",
              fontWeight: "400",
              fontSize: { xs: "16px", md: "20px" }, // Responsive font size
              textTransform: "none",
              marginTop: 2,
            }}
          >
            Delete Conversation
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ConversationHistory;
