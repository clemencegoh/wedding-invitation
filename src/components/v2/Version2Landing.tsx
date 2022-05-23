import { Button, Container, Typography, useMediaQuery } from "@mui/material";
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
  const { family, language, invitationCode } = useFamily();

  if (!invitationCode || !family) {
    return <InvitationCodeNotFound />;
  }

  const fontSize = "17px";

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        minHeight: "100vh",
        display: "flex",
        flexFlow: isMobile ? "column" : "row-reverse",
        alignItems: "center",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          objectPosition: "0 20%",
          maxWidth: isMobile ? "" : "100%",
          width: isMobile ? "100%" : "",
          height: isMobile ? "40vh" : "100vh",
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
          <Typography
            fontStyle={"italic"}
            fontFamily={"Open Sans"}
            fontSize={fontSize}
            marginBottom={"1.5rem"}
          >
            {landingPhrases[language].greeting1} {family?.address},
          </Typography>
          <Typography
            fontSize={fontSize}
            fontFamily={"Open Sans"}
            marginBottom={"1rem"}
          >
            {landingPhrases[language].greeting2}
            <Typography
              fontSize={fontSize}
              component="span"
              fontWeight={"bold"}
            >
              {landingPhrases[language].greeting3}
            </Typography>
          </Typography>

          <Typography
            fontSize={fontSize}
            fontFamily={"Open Sans"}
            marginBottom={"1rem"}
          >
            {landingPhrases[language].greeting4}
          </Typography>
          <Typography
            fontSize={fontSize}
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
