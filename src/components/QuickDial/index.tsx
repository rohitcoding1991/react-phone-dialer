import { Box, Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const QuickDial = () => {
  return (
    <Box className="!container">
      <Box className="!border-b !border-[--white-200] !bg-white">
        <Typography className="!text-[--purple-400] !font-bold !py-6 !pl-8">
          Quick Dial
        </Typography>
      </Box>
      <Box className="!bg-[--gray-350] !mt-14 !space-y-5 !h-full !text-center">
        <StarRateIcon className="!text-[--gray-100]" />
        <Typography className="!text-[--gray-100] !font-bold">
          Favorite contact list is empty.
        </Typography>
        <Button className="!text-black !text-xs !font-normal">REFRESH</Button>
      </Box>
    </Box>
  );
};

export default QuickDial;
