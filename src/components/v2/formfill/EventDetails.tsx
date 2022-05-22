import { Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useFamily } from "../hooks/useFamily";
import { formFillPhrases } from "../i18n/phrases";
import OmniHeader from "../OmniHeader";
import {
  bgPrimaryColor,
  textOffColor,
  textPrimaryColor,
} from "../styleConstants";

type Props = {
  attending: string[];
};

export default function EventDetails({ attending }: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { language } = useFamily();
  const isOver = new Date() > new Date("2022-08-01");

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
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
        <Typography fontFamily={"Open Sans"} marginBottom={"4rem"}>
          {formFillPhrases[language].formConfirmation1 +
            attending.join(", ") +
            "."}
        </Typography>

        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          {formFillPhrases[language].formConfirmation2}
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          {formFillPhrases[language].formStep1date}
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          {formFillPhrases[language].formStep1time}
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          {formFillPhrases[language].formStep1venue}
        </Typography>
        {isOver ? (
          <></>
        ) : (
          <Typography
            fontFamily={"Open Sans"}
            color={textOffColor}
            fontSize={"16px"}
            fontStyle={"italic"}
          >
            {formFillPhrases[language].formConfirmationFootnote}
          </Typography>
        )}
      </Container>
      {isOver ? (
        <></>
      ) : (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            fontFamily={"Open Sans"}
            color={textOffColor}
            fontSize={"12px"}
            fontStyle={"italic"}
            paddingBottom="2rem"
          >
            {formFillPhrases[language].formConfirmationFretnot}
          </Typography>
        </Container>
      )}
    </Container>
  );
}
