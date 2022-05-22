import { Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function OmniHeader({}: Props) {
  return (
    <Typography
      fontFamily={"Open Sans"}
      style={{
        position: "absolute",
        margin: "1em auto",
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: "12px",
        fontStyle: "italic",
      }}
    >
      Wedding of Clemence Goh & Leong Zhi Min
    </Typography>
  );
}
