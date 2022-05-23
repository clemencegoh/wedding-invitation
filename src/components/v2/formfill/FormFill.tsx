import { Container, useMediaQuery } from "@mui/material";
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
import invitationLogo from "../assets/invitation-cover-hd.jpg";

type Props = {};

export default function FormFill({}: Props) {
  const { family, invitationCode } = useFamily();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [step, setStep] = useState<number>(0);
  const [attending, setAttending] = useState<string[]>([]);
  const [dietRestriction, setDietRestriction] = useState<string>("");

  useEffect(() => {
    const members = family?.members;
    if (members) {
      setAttending(members);
    }
  }, [family]);

  if (!family || !invitationCode) {
    return <InvitationCodeNotFound />;
  }

  const stepNext = (step: number) => {
    setStep(step);
  };

  const rejectInvitation = () => {
    fetch(
      BASE_URL +
        new URLSearchParams({
          action: "rsvp",
          name: invitationCode,
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
          action: "rsvp",
          name: invitationCode,
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
              stepNext(4);
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
      disableGutters
      sx={{
        backgroundColor: bgPrimaryColor,
        color: textPrimaryColor,
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {step < 3 && <OmniHeader />}

      <Container
        sx={{
          margin: "auto",
          maxWidth: "800px !important",
        }}
      >
        {getFormfillStep()}
      </Container>
      {step < 3 && (
        <img
          style={{
            objectFit: "cover",
            objectPosition: "0 20%",
            maxWidth: "100%",
            display: isMobile ? "none" : "flex",
            height: "100vh",
          }}
          src={invitationLogo}
          alt="Clemence and Zhimin"
        />
      )}
    </Container>
  );
}
