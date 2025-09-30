import Box from "@mui/material/Box";
import { Card } from "../components/Card";

const Page = () => {
  return (
    <Box
      className="container"
      sx={{
        backgroundColor: "#141414",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </Box>
  );
};
export default Page;
