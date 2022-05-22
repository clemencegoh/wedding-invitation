import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import FormFooter from "../components/FormFooter";
import { useFamily } from "../hooks/useFamily";
import { formFillPhrases } from "../i18n/phrases";
import { ctaPrimaryColor, warningColor } from "../styleConstants";
import { FormFillProps } from "./formfill.props";

type Props = {
  attending: string[];
  setAttending: (members: string[]) => void;
} & FormFillProps;

export default function WhoAttendingQuestion({
  attending,
  setAttending,
  onNext,
  onPrev,
}: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { language, family } = useFamily();
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
          2.
        </Typography>
        <Typography fontFamily={"Open Sans"}>
          {formFillPhrases[language].formStep2Greet}
        </Typography>
        <Typography
          fontFamily={"Open Sans"}
          fontSize={"12px"}
          fontStyle={"italic"}
          color={warningColor}
          marginBottom={"1rem"}
        >
          {formFillPhrases[language].formfieldCompulsory}
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <FormGroup>
            {family?.members.map((member: string) => (
              <FormControlLabel
                key={`checkbox-${member}`}
                onChange={(e, checked) => {
                  if (checked) {
                    setAttending(attending.concat([member]));
                  } else {
                    setAttending(
                      attending.filter((person) => person !== member)
                    );
                  }
                }}
                control={
                  <Checkbox
                    sx={{
                      color: ctaPrimaryColor,
                      "&.Mui-checked": {
                        color: ctaPrimaryColor,
                      },
                    }}
                    checked={attending.includes(member)}
                  />
                }
                label={member}
              />
            ))}
          </FormGroup>
        </div>
      </Container>
      <FormFooter
        onNext={() => {
          onNext && onNext();
        }}
        onPrev={() => {
          onPrev && onPrev();
        }}
      />
    </Container>
  );
}
