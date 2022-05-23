import { Button, Container, Typography } from "@mui/material";
import {
  ctaPrimaryColor,
  ctaSecondaryColor,
  warningColor,
} from "../styleConstants";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { formFillPhrases } from "../i18n/phrases";
import { useFamily } from "../hooks/useFamily";

type Props = {
  onNext: () => void;
  onPrev: () => void;
  isLast?: boolean;
  disablePrev?: boolean;
  disableNext?: boolean;
};

export default function FormFooter({
  onNext,
  onPrev,
  isLast,
  disablePrev,
  disableNext,
}: Props) {
  const { language } = useFamily();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Button
          disabled={disablePrev}
          size="small"
          sx={{
            backgroundColor: ctaSecondaryColor,
            color: "black",
            marginRight: "0.5rem",
            "&:hover": {
              backgroundColor: ctaSecondaryColor,
            },
          }}
          onClick={onPrev}
        >
          <KeyboardArrowLeftIcon />
        </Button>
      </div>
      <Button
        size="medium"
        sx={{
          backgroundColor: isLast ? warningColor : ctaPrimaryColor,
          width: "6rem",
          color: "white",
          "&:hover": {
            backgroundColor: isLast ? warningColor : ctaPrimaryColor,
          },
        }}
        onClick={onNext}
      >
        <Typography
          fontFamily={"Open Sans"}
          color={"white"}
          fontSize={"15px"}
          sx={{
            textTransform: "none",
          }}
        >
          {isLast
            ? formFillPhrases[language].formStepSubmitRSVP
            : formFillPhrases[language].formStepNext}
        </Typography>
      </Button>
    </Container>
  );
}
