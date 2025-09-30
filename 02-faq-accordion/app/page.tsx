import Box from "@mui/material/Box";
import { FAQcontainer } from "@/components/FAQcontainer";
import Image from "next/image";

const HomaPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "none",
        backgroundColor: "#f8eeff",
      }}
    >
      <Box>
        <Image
          src="/background-pattern-desktop.svg"
          alt="background"
          height={320}
          width={1440}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        />
      </Box>
      <FAQcontainer />
    </Box>
  );
};

export default HomaPage;
