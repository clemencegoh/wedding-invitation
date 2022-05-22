import { Container, Typography, useMediaQuery } from "@mui/material";
import OmniHeader from "./OmniHeader";
import oopsCloud from "./assets/oops_cloud.png";
import { bgPrimaryColor, textPrimaryColor } from "./styleConstants";

type Props = {};

export default function InvitationCodeNotFound({}: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        height: "100vh",
        width: "100%",
      }}
    >
      <OmniHeader />
      <Container
        sx={{
          display: "flex",
          flexFlow: "column",
          height: "100%",
          padding: "0 2rem",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <img src={oopsCloud} alt="oops not found" />
        </div>
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          Oops! Looks like the url you have entered is incorrect.
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          Please check the url again or contact the couple.
        </Typography>
        <Typography fontFamily={"Open Sans"}>
          Thank you and have a nice day!
        </Typography>
      </Container>
    </Container>
  );
}
