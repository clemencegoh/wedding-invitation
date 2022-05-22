import { Container, Typography, useMediaQuery } from "@mui/material";
import { useFamily } from "../hooks/useFamily";
import { formFillPhrases } from "../i18n/phrases";
import { textOffColor } from "../styleConstants";

type Props = {};

export default function PrematureEndForm({}: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { language } = useFamily();

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
      }}
    >
      <div></div>
      <div>
        <Typography
          component={"h3"}
          marginBottom={"1rem"}
          fontFamily={"Open Sans"}
          fontSize={"20px"}
        >
          {formFillPhrases[language].prematureEnd1}
        </Typography>
        <Typography fontFamily={"Open Sans"} fontSize={"16px"}>
          {formFillPhrases[language].prematureEnd2}
        </Typography>
      </div>
      <Typography
        marginBottom={"3rem"}
        fontFamily={"Open Sans"}
        fontStyle={"italic"}
        fontSize={"12px"}
        color={textOffColor}
      >
        {formFillPhrases[language].formConfirmationFretnot}
      </Typography>
    </Container>
  );
}
