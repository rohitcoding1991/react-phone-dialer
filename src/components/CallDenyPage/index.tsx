import { CallEnd, KeyboardArrowLeft, Person2 } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const CallDenyPage = () => {
  return (
    <Box className="!pt-12 !mx-auto lg:container md:!container lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box
        sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }}
        className="!bg-red-400"
      >
        <Box className="!p-4">
          <Link to="/dialer">
            <KeyboardArrowLeft className="!text-white" />
          </Link>
        </Box>
        <Box className="!space-y-28">
          <Box className="!flex !flex-col !items-center !gap-4 !pt-16">
            <Person2 className="!text-8xl !text-red-500 !bg-white !p-3 !rounded-full" />
            <Typography className="!text-white !text-xl !font-semibold !text-center">
              1800902357
            </Typography>
            <Typography className="!text-white !text-sm !font-light !text-center">
              Address Incomplete
            </Typography>
          </Box>
          <Box className="!flex !justify-center !py-8">
            <Link to="/call-logs">
              <CallEnd className="!text-red-500 !bg-white !rounded-full !p-3 !text-5xl" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CallDenyPage;
