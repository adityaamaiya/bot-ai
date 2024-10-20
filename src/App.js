import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Import the theme from the file
import SuggestionCard from "./components/SuggestionCard/SuggestionCard";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import logo from "./logo.svg";
import editIcon from "./components/assets/edit.svg";
import logo2 from "./components/assets/logo2.svg";
import CloseIcon from "@mui/icons-material/Close";
import hamburgerIcon from "./components/assets/hamburger.svg";
import ResponseCard from "./components/ResponseCard/ResponseCard";

function App() {
  const apiKey = "AIzaSyATDP5navPLLFX3-o5gm9RsXYmoJxEbYVc"; // Use your actual API key
  const [input, setInput] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const isMobile = useMediaQuery("(max-width:600px)");

  const suggestions = [
    "Hi, what is the weather",
    "Hi, what is my location",
    "Hi, what is the temperature",
    "Hi, how are you",
  ];

  const displayedSuggestions = isMobile ? suggestions.slice(0, 3) : suggestions;

  const handleAsk = async () => {
    setIsLoading(true);
    setError(null);
    setResponse("");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: input }],
            },
          ],
        }),
      });
      const data = await response.json();
      console.log("API Response:", data);
      setResponse(data?.candidates[0].content.parts[0].text);
      console.log(data?.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Change direction based on screen size
          height: "100vh",
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
          <SidebarContent />
        </Box>

        {/* Mobile Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <SidebarContent />
        </Drawer>

        {/* Hamburger Icon for Mobile */}

        <Box
          sxx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "24px", md: "28px" }, // Responsive font size
              lineHeight: "32px",
              color: "#9785BA",
              fontWeight: "700",
              fontFamily: "Ubuntu",
              marginTop: 2,
              width: "max-content",
              marginLeft: { xs: 0, md: 5 }, // Add margin on mobile,
              display: "flex",
              aliignItems: "center",
            }}
          >
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, width: "max-content" }}
              onClick={toggleDrawer(true)}
            >
              <img src={hamburgerIcon} alt="toggle sidebar" />
            </IconButton>
            Bot AI
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            width: { md: "75%", xs: "100%" }, // Change width based on screen size
            padding: { xs: 2, md: 0 }, // Add padding on mobile
          }}
        >
          <ResponseCard response={response} />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "20px", md: "28px" }, // Responsive font size
              lineHeight: "32px",
              color: "#000000",
              fontWeight: "500",
              fontFamily: "Ubuntu",
              marginTop: 1,
              display: "none",
            }}
          >
            How Can I Help You Today?
          </Typography>
          <img
            src={logo2}
            alt="logo2"
            style={{
              marginTop: 20,
              display: "none",
            }}
          />
          <Box
            sx={{
              display: "none",
              flexWrap: "wrap",
              width: "100%",
              gap: "10px", // Reduced gap for mobile
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            {displayedSuggestions.map((suggestion, index) => (
              <SuggestionCard key={index} suggestion={suggestion} />
            ))}
          </Box>
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
              onClick={handleAsk}
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
              onClick={handleSave}
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
        </Box>
      </Box>

      {/* Snackbar for Error Messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={error ? "An error occurred. Please try again." : ""}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </ThemeProvider>
  );
}

const SidebarContent = () => (
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

    <Typography
      variant="h2"
      component="h2"
      sx={{
        fontSize: "16px",
        lineHeight: "19px",
        color: "#414146",
        background: "#D7C7F4",
        fontWeight: "700",
        fontFamily: "Ubuntu",
        textAlign: "center",
        width: "90%", // Full width
        height: "39px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        marginBottom: 1, // Space between elements
      }}
    >
      Past Conversations
    </Typography>
  </Box>
);

export default App;
