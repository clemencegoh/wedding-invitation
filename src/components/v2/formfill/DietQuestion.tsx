import { Container, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FormFooter from "../components/FormFooter";
import { useFamily } from "../hooks/useFamily";
import { formFillPhrases } from "../i18n/phrases";
import {
  ctaSecondaryColor,
  ctaSecondaryColorDisabled,
} from "../styleConstants";
import { FormFillProps } from "./formfill.props";

type Props = {
  dietRestriction: string;
  setDietRestriction: (val: string) => void;
} & FormFillProps;

export default function DietQuestion({
  dietRestriction,
  setDietRestriction,
  onNext,
  onPrev,
}: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { language } = useFamily();
  return (
    <Container
      sx={{
        height: isMobile ? "100vh" : "80vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: isMobile ? "space-between" : "center",
        paddingBottom: "3rem",
      }}
    >
      <div></div>
      <Container
        sx={{
          marginBottom: isMobile ? "1rem" : "4rem",
        }}
      >
        <Typography fontFamily={"Open Sans"} marginBottom={"1rem"}>
          3.
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"0.5rem"}>
          {formFillPhrases[language].formStep3Greet}
        </Typography>
        <Typography
          fontFamily={"Open Sans"}
          fontSize={"12px"}
          fontStyle={"italic"}
          color={ctaSecondaryColor}
          marginBottom={"1rem"}
        >
          {formFillPhrases[language].formStep3Example}
        </Typography>
        <TextField
          fullWidth
          sx={{
            input: { color: "white" },
            label: { color: `${ctaSecondaryColor} !important` },
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: `${ctaSecondaryColor} !important`,
            },
          }}
          value={dietRestriction}
          onChange={(e) => setDietRestriction(e.target.value)}
          label={formFillPhrases[language].formStep3TextHint}
        />
      </Container>
      <FormFooter
        onNext={() => {
          onNext && onNext();
        }}
        onPrev={() => {
          onPrev && onPrev();
        }}
        disableNext
      />
    </Container>
  );
}
