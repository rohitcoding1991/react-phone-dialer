import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

interface DialButtonProps {
  icon?: JSX.Element;
  onClick?: () => void;
}

const DialButton: React.FC<DialButtonProps> = ({ icon, onClick }) => {
  return (
    <Box className="!flex !justify-center !items-center">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          zIndex:-0,
          "& .MuiSpeedDial-fab": {
            backgroundColor: "#3D61F3",
            height: 48,
            width: 48,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#3D61F3",
              boxShadow: "none",
            },
          },
        }}
        icon={icon}
        onClick={onClick}
      ></SpeedDial>
    </Box>
  );
};

export default DialButton;
