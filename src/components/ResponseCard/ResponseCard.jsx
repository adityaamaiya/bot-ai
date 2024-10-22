import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo2.svg";
import avatar from "../assets/avatar.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import style from "./responsecard.module.css"

export default function ResponseCard({ response }) {
  const getTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"15px",
        width:"100%",

    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: { xs: "10px", md: "20px" },
          width: "100%",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.13)",
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.13) 0%, rgba(151, 133, 186, 0.13) 100%)",
        }}
      >
        <img src={avatar} alt="avatar" sx={{ width: "30px", height: "30px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            gap: "10px",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Ubuntu",
              lineHeight: "18px",
            }}
          >
            You
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Open Sans",
              lineHeight: "21px",
            }}
          >
            {response.prompt}
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "10px", md: "12px" },
              fontFamily: "Open Sans",
              lineHeight: "16px",
            }}
          >
            {getTime()}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: { xs: "10px", md: "20px" },
          width: "100%",

          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.13)",
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.13) 0%, rgba(151, 133, 186, 0.13) 100%)",
        }}
      >
        <img src={logo} alt="logo" sx={{ width: "30px", height: "30px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            gap: "10px",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Ubuntu",
              lineHeight: "18px",
            }}
          >
            Soul AI
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Open Sans",
              lineHeight: "21px",
            }}
          >
            {response.response}
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "10px", md: "12px" },
              fontFamily: "Open Sans",
              lineHeight: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              "&:hover img": {
                // Targeting images on hover
                visibility: "visible",
              },
            }}
          >
            {getTime()}
            <img src={like} alt="like" className={style.image} />
            <img src={dislike} alt="dislike" className={style.image} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
