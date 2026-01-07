import { KeyboardArrowLeft, Voicemail } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const VoiceMail = () => {
  return (
    <Box className="!pt-12 !mx-auto lg:!container md:!container lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }}>
        <Box className="!flex !items-center !p-8 !gap-10">
          <Link to="/dialer" className="!text-[--purple-400] !flex !items-center">
            <KeyboardArrowLeft />
            <Typography className="!text-sm !font-semibold !ml-8">
              Voicemails
            </Typography>
          </Link>
        </Box>
        <Box className="!bg-[--gray-350]">
          <Box className="!flex !flex-col !items-center !py-24 !gap-5">
            <Voicemail className="!text-[--gray-100] !mt-16" />
            <Typography className="!text-[--gray-100] !font-bold !text-lg !text-center">
              No Voice Messages Found :(
            </Typography>
            <Box className="!mb-16">
              <Button className="!text-black !text-sm">
                REFRESH
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VoiceMail;
