import React from "react";
import { Box } from "@mui/material";
import Tooltips from "../../Common/Tooltip";

import { Link } from "react-router-dom";
import { menuItems } from "./Data";

const MenuButton: React.FC = () => {
  return (
    <Box>
      <Box className="!flex !justify-evenly !py-8">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <Tooltips title={item.title} icons={item.icon} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default MenuButton;
