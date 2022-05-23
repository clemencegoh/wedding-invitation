import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import FormFooter from "../components/FormFooter";
import { useFamily } from "../hooks/useFamily";
import { formFillPhrases } from "../i18n/phrases";
import { ctaPrimaryColor, warningColor } from "../styleConstants";
import { FormFillProps } from "./formfill.props";

type Props = {} & FormFillProps;

export default function AttendingQuestion({ onEnd, onNext }: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [answer, setAnswer] = useState<boolean>(true);
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
          1.
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"2rem"}>
          {formFillPhrases[language].formStep1greet}
        </Typography>

        <Typography fontFamily={"Open Sans"}>
          {formFillPhrases[language].formStep1date}
        </Typography>
        <Typography fontFamily={"Open Sans"}>
          {formFillPhrases[language].formStep1time}
        </Typography>
        <Typography fontFamily={"Open Sans"} marginBottom={"2rem"}>
          {formFillPhrases[language].formStep1venue}
        </Typography>

        <Typography fontFamily={"Open Sans"}>
          {formFillPhrases[language].formStep1joinus}
        </Typography>
        <Typography
          fontFamily={"Open Sans"}
          fontSize={"12px"}
          fontStyle={"italic"}
          color={warningColor}
          marginBottom={"2rem"}
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
          <Button
            fullWidth
            size={isMobile ? "medium" : "large"}
            variant="contained"
            sx={{
              backgroundColor: ctaPrimaryColor,
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: ctaPrimaryColor,
                border: "4px solid white",
              },
              "&:hover": {
                backgroundColor: ctaPrimaryColor,
              },
              border: answer ? "4px solid white" : "",
            }}
            onClick={() => setAnswer(true)}
          >
            <Typography
              fontFamily={"Open Sans"}
              color={"white"}
              fontSize={"15px"}
              sx={{
                textTransform: "none",
              }}
            >
              {formFillPhrases[language].formConfirm}
            </Typography>
          </Button>
          <span style={{ margin: "0 0.5rem" }}></span>
          <Button
            fullWidth
            size={isMobile ? "medium" : "large"}
            sx={{
              backgroundColor: ctaPrimaryColor,
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: ctaPrimaryColor,
                border: "4px solid white",
              },
              "&:hover": {
                backgroundColor: ctaPrimaryColor,
              },
              border: !answer ? "4px solid white" : "",
            }}
            onClick={() => setAnswer(false)}
          >
            <Typography
              fontFamily={"Open Sans"}
              color={"white"}
              fontSize={"15px"}
              sx={{
                textTransform: "none",
              }}
            >
              {formFillPhrases[language].formReject}
            </Typography>
          </Button>
        </div>
      </Container>
      <FormFooter
        disablePrev
        onNext={() => {
          if (!answer) {
            onEnd && onEnd();
          } else {
            onNext && onNext();
          }
        }}
        onPrev={() => {}}
      />
    </Container>
  );
}
