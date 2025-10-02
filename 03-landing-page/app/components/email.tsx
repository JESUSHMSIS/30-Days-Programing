"use client";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";

const Email = () => {
  return (
    <Box>
      <Input
        sx={{
          border: "1px solid #bbc7ed",
          borderRadius: "1.5rem",
          width: "26.23rem",
          padding: "0.5rem 1rem",
        }}
        placeholder="Tu direccion de correo electronico"
      />
      <Button
        sx={{
          backgroundColor: "#4c7bf3",
          color: "#fff",
          borderRadius: "1.5rem",
          padding: "0.5rem 1rem",
          width: "200px",
          height: "3.5rem",
          marginLeft: "2rem",
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default Email;
