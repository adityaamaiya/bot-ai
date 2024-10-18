import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SuggestionCard({ suggestion }) {
  return (
    <Card
      sx={{
        width: "40%",
        height: "15%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: "20px",
            lineHeight: "23px",
            fontFamily: "Ubuntu",
            fontWeight: "700",
            color: "rgba(0, 0, 0, 1)",
            marginBottom: "10px",
          }}
        >
          {suggestion}
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: "16px",
            lineHeight: "22px",
            fontFamily: "Open Sans",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Get immediate AI generated response
        </Typography>
      </CardContent>
    </Card>
  );
}
