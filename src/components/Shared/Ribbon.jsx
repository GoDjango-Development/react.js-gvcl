import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Ribbon = ({ msg, status }) => {
  const [bgcolor, setBgcolor] = useState("grey");

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
        top:"30px",
        left:{xs:"-60px", lg:"-85px"},
        width: "100%",
        bgcolor,
        transform: "rotate(-45deg)",
      }}
    >
      <Typography sx={{ textAlign: "center", color: "white", textTransform:"uppercase", fontSize:{xs:".9rem", lg:"1rem"} }}>
        {msg}
      </Typography>
    </Box>
  );
};

Ribbon.propTypes = {
  msg: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["success", "danger", "info"]).isRequired,
};

export default Ribbon;
