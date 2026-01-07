import { KeyboardArrowLeft, Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <Box className="!pt-12 !mx-auto lg:!container md:!container lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px", height: "534px" }}>
        <Box className="!flex !items-center !p-5 !border-b">
          <Link to="/dialer" className="!text-[--purple-400] !flex !items-center">
            <KeyboardArrowLeft className="!mr-4" />
            <Box>
              <Typography className="!text-sm !font-semibold">
                Settings
              </Typography>
              <Typography className="!text-xs !text-[--gray-250] !font-semibold !mt-1">
                Coming Soon....
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box className="!bg-[--gray-350]" style={{ height: "calc(100% - 80.125px)" }}>
          <Box className="!overflow-y-auto">
            <Box className="!m-6 !flex !p-4 !rounded-xl !bg-white">
              <Box className="!mr-3 !p-3">
                <Person className="!text-3xl" />
              </Box>
              <Box>
                <Typography className="!text-xl !font-extrabold">
                  Lorem Ispum Dolor
                </Typography>
                <Typography className="!text-xs !text-[--gray-100] !font-light">
                  Phone109
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
