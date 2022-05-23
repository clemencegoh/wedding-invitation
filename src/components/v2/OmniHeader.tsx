import { Typography, useMediaQuery } from "@mui/material";
import React from "react";

type Props = {
  positionCenter?: boolean;
};

export default function OmniHeader({ positionCenter }: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Typography
      fontFamily={"Open Sans"}
      style={{
        position: "absolute",
        margin: "1em auto",
        left: 0,
        right: positionCenter || isMobile ? 0 : 720,
        textAlign: "center",
        fontSize: "12px",
        fontStyle: "italic",
      }}
    >
      Wedding of Clemence Goh & Leong Zhi Min
    </Typography>
  );
}
