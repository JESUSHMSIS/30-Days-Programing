"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

type QAProps = {
  data: {
    answer: string;
    question: string;
  };
};

export const QuestionAccordion = ({ data }: QAProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const WIDTH = "36.5rem";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: WIDTH,
        marginTop: "1rem",
        padding: "1rem",
        borderBottom: "1px solid #E0E0E0",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: WIDTH }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            "&:hover": {
              color: "#ad28eb",
            },
          }}
        >
          {data.question}
        </Typography>
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          sx={{
            backgroundColor: showAnswer ? "#301534" : "#ad28eb",
            padding: 0,
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            minWidth: "0",
            "&:hover": {
              backgroundColor: "#301534",
            },
          }}
          variant="contained"
        >
          {showAnswer ? (
            <Typography sx={{ fontSize: "1.5rem", color: "#FFF" }}>
              -
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "1.5rem", color: "#FFF" }}>
              +
            </Typography>
          )}
        </Button>
      </Box>
      <Box sx={{ width: WIDTH, display: showAnswer ? "flex" : "none" }}>
        <Typography sx={{ color: "#8B6990" }}>{data.answer}</Typography>
      </Box>
    </Box>
  );
};
