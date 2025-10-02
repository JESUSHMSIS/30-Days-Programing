import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Email from "./components/email";
const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      <Image
        src="/logo.svg"
        height={39}
        width={90}
        alt="logo"
        style={{ margin: "1.5rem 0" }}
      />
      <Typography variant="h2" sx={{ color: "#969696", fontWeight: 400 }}>
        Se hara el lanzamiento{" "}
        <span style={{ color: "#15202a", fontWeight: 600 }}>Pronto!</span>
      </Typography>
      <Typography
        sx={{
          color: "#15202a",
          fontSize: "1.25rem",
          marginTop: "0.75rem",
        }}
      >
        Suscribete para recibir notificaciones
      </Typography>
      <Email />
      <Image
        src="/illustration-dashboard.png"
        alt="image-dashboard"
        height={383}
        width={640}
      />
    </Box>
  );
};

export default HomePage;
