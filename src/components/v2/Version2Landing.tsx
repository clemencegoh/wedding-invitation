import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import "./appv2.css";
import {
  bgPrimaryColor,
  textPrimaryColor,
  warningColor,
} from "./styleConstants";
import invitationLogo from "./assets/invitation-cover-hd.jpg";
import { Link } from "react-router-dom";
import { landingPhrases } from "./i18n/phrases";
import InvitationCodeNotFound from "./InvitationCodeNotFound";
import { useFamily } from "./hooks/useFamily";

export default function Version2Landing() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { family, language } = useFamily();

  if (!family) {
    return <InvitationCodeNotFound />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        minHeight: "100vh",
        display: "flex",
        flexFlow: isMobile ? "column" : "row-reverse",
        padding: "0",
        alignItems: "center",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          objectPosition: "0 20%",
          width: "100%",
          maxHeight: isMobile ? "40vh" : "80vh",
        }}
        src={invitationLogo}
        alt="Clemence and Zhimin"
      />
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 10fr 1fr",
          marginTop: "2rem",
        }}
      >
        <div></div>
        <Container
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "left",
          }}
        >
          <Typography fontFamily={"Open Sans"} marginBottom={"1.5rem"}>
            {landingPhrases[language].greeting1} {family?.members[0]},
          </Typography>
          <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
            {landingPhrases[language].greeting2}
            <Typography component="span" fontWeight={"bold"}>
              {landingPhrases[language].greeting3}
            </Typography>
          </Typography>

          <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
            {landingPhrases[language].greeting4}
          </Typography>
          <Typography
            fontFamily={"Open Sans"}
            fontStyle={"italic"}
            marginBottom={"4rem"}
          >
            {landingPhrases[language].pleaseRSVP}
          </Typography>
          <span>
            <Link to={"rsvp"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: warningColor,
                  textTransform: "none",
                  padding: "0.6rem 2rem",
                  "&:hover": {
                    backgroundColor: "#A13919",
                  },
                  fontFamily: "Open Sans",
                }}
              >
                {landingPhrases[language].RSVPButtonText}
              </Button>
            </Link>
          </span>
        </Container>
        <div></div>
      </Container>
    </Container>
  );
}
