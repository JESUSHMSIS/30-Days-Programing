import Image from "next/image";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LinkComponent } from "./Link";

const links = [
  {
    linkTitle: "Github",
    link: "https://github.com",
  },
  {
    linkTitle: "Linkedin",
    link: "https://linkedin.com",
  },
  {
    linkTitle: "Twitter",
    link: "https://twitter.com",
  },
  {
    linkTitle: "Instagram",
    link: "https://instagram.com",
  },
  {
    linkTitle: "Facebook",
    link: "https://facebook.com",
  },
];
export const Card = () => {
  return (
    <Box
      className="cardBackground"
      sx={{
        padding: "2rem",
        borderRadius: "0.7rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="/avatar.png"
        alt="image-avatar"
        height={80}
        width={80}
        style={{ borderRadius: "50%", marginBottom: "1.5rem" }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}
      >
        Jesus Huanaco
      </Typography>
      <Typography
        className="neon"
        variant="h2"
        sx={{ fontSize: "1.3125rem", fontWeight: 60, marginBottom: "1.5rem" }}
      >
        Desarrollador Web
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1,325rem", color: "#8f8f8f", marginBottom: "1rem" }}
      >
        Apasionado por crear experiencias web únicas y funcionales.
      </Typography>
      {links.map((link) => {
        return <LinkComponent linkData={link} key={link.link} />;
      })}
    </Box>
  );
};
