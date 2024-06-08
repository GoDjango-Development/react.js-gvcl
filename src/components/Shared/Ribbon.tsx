import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface RibbonProps {
  msg: string;
  status: "success" | "danger" | "info";
}

const Ribbon: React.FC<RibbonProps> = ({ msg, status }) => {
  const [bgcolor, setBgcolor] = useState<string>("grey");

  useEffect(() => {
    const newBgcolor =
      status === "success"
        ? "rgba(119, 169, 59, 1)"
        : status === "danger"
        ? "rgba(208, 0, 0, 1)"
        : "rgba(100, 101, 246, 1)";
    setBgcolor(newBgcolor);
  }, [status]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "30px",
        left: { xs: "-60px", lg: "-85px" },
        width: "100%",
        bgcolor,
        transform: "rotate(-45deg)",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          textTransform: "uppercase",
          fontSize: { xs: ".9rem", lg: "1rem" },
        }}
      >
        {msg}
      </Typography>
    </Box>
  );
};

export default Ribbon;
