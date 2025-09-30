import Link from "next/link";
import Box from "@mui/material/Box";

type Props = {
  linkData: {
    link: string;
    linkTitle: string;
  };
};
export const LinkComponent = ({ linkData }: Props) => {
  return (
    <Box
      className="linkBackground"
      sx={{
        padding: "0.75rem 5.625rem",
        width: "14rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.5rem 0",
        borderRadius: "0.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#333",
          transform: "scale(1.05)",
        },
      }}
    >
      <Link className="linkContact" href={linkData.link} target="_blank">
        {linkData.linkTitle}
      </Link>
    </Box>
  );
};
