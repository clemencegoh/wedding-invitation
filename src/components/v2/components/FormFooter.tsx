import { Button, Container, Typography } from "@mui/material";
import {
  ctaPrimaryColor,
  ctaSecondaryColor,
  warningColor,
} from "../styleConstants";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
          <KeyboardArrowUpIcon />
        </Button>
        <Button
          disabled={disableNext}
          size="small"
          sx={{
            backgroundColor: ctaSecondaryColor,
            color: "black",
            "&:hover": {
              backgroundColor: ctaSecondaryColor,
            },
          }}
          onClick={onNext}
        >
          <KeyboardArrowDownIcon />
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
          fontSize={"14px"}
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
