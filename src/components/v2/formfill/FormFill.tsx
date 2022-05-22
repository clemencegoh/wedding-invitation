import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../apiConstants";
import { useFamily } from "../hooks/useFamily";
import InvitationCodeNotFound from "../InvitationCodeNotFound";
import OmniHeader from "../OmniHeader";
import { bgPrimaryColor, textPrimaryColor } from "../styleConstants";
import AttendingQuestion from "./AttendingQuestion";
import DietQuestion from "./DietQuestion";
import EventDetails from "./EventDetails";
import PrematureEndForm from "./PrematureEndForm";
import WhoAttendingQuestion from "./WhoAttendingQuestion";

type Props = {};

export default function FormFill({}: Props) {
  const { family } = useFamily();

  const [step, setStep] = useState<number>(0);
  const [attending, setAttending] = useState<string[]>([]);
  const [dietRestriction, setDietRestriction] = useState<string>("");

  useEffect(() => {
    const members = family?.members;
    if (members) {
      setAttending(members);
    }
  }, [family]);

  if (!family) {
    return <InvitationCodeNotFound />;
  }

  const stepNext = (step: number) => {
    setStep(step);
  };

  const rejectInvitation = () => {
    fetch(
      BASE_URL +
        new URLSearchParams({
          action: "RSVP",
          name: family.members[0],
          going: "no",
          attending: "",
          diet: "",
          total: "0",
        })
    );
  };
  const acceptInvitation = () => {
    fetch(
      BASE_URL +
        new URLSearchParams({
          action: "RSVP",
          name: family.members[0],
          going: "yes",
          attending: attending.join(", "),
          diet: dietRestriction,
          total: `${attending.length}`,
        })
    );
  };

  const getFormfillStep = () => {
    switch (step) {
      case 0:
        return (
          <AttendingQuestion
            onNext={() => stepNext(1)}
            onEnd={() => {
              // this is reject - still submit
              rejectInvitation();
              stepNext(-1);
            }}
          />
        );
      case 1:
        return (
          <WhoAttendingQuestion
            attending={attending}
            setAttending={setAttending}
            onNext={() => stepNext(2)}
            onPrev={() => stepNext(0)}
          />
        );
      case 2:
        return (
          <DietQuestion
            dietRestriction={dietRestriction}
            setDietRestriction={setDietRestriction}
            onNext={() => {
              // This is submit
              acceptInvitation();
              stepNext(3);
            }}
            onPrev={() => stepNext(1)}
          />
        );
      case 3:
        return <EventDetails attending={attending} />;
      default:
        return <PrematureEndForm />;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        minHeight: "100vh",
      }}
    >
      {step !== 3 && <OmniHeader />}

      {getFormfillStep()}
    </Container>
  );
}
