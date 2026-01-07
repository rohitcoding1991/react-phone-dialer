import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import CallEndIcon from "@mui/icons-material/CallEnd";

const CallingPage = () => {
  return (
    <Box className="!pt-12 !mx-auto lg:container md:!container lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box
        sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }}
        className="!bg-[--purple-400]"
      >
        <Box className="!pb-16">
          <Typography className="!text-sm !text-white !text-center">
            Outgoing Calling
          </Typography>
          <Link to="/dialer">
            <KeyboardArrowLeft className="!text-white !ml-3" />
          </Link>
        </Box>
        <Box className="!space-y-32">
          <Box className=" !flex !flex-col !items-center !gap-4 py-2">
            <Person2Icon className="!text-8xl !p-3 !rounded-full !bg-white !text-[--purple-400]" />
            <Typography className="!text-white !text-xl !font-semibold !text-center">
              1800902357
            </Typography>
            <Typography className="!text-white !text-sm !font-light !text-center">
              Connecting...
            </Typography>
          </Box>
          <Box className="!flex !justify-center !py-8">
            <Link to="/call-deny">
            <CallEndIcon className="!text-red-500 !bg-white !rounded-full !p-3 !text-5xl" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CallingPage;
