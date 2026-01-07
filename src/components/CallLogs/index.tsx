import { KeyboardArrowLeft, Phone, PhoneCallback } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { callLogsData } from "./Data";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

interface CallLogData {
  icon: JSX.Element;
  name: string;
  date: string;
  time: string;
}

const CallLogs = () => {
  return (
    <Box className="!pt-12 !mx-auto lg:container md:!container lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }}>
        <Box className="!flex !border-b !p-7">
          <Link to="/dialer">
            <KeyboardArrowLeft className="text-[--purple-400]" />
          </Link>
          <Typography className="!text-[--purple-400] !text-sm !font-semibold !px-6">
            Recents
          </Typography>
        </Box>
        {callLogsData.length === 0 ? (
          <Box className="!flex !items-center !flex-col !gap-4 !py-5 !bg-[--gray-350]">
            <PhoneCallback className="!text-[--gray-100]" />
            <Typography className="!text-[--gray-100]">Opss!</Typography>
            <Typography className="!text-[--gray-100]">
              Failed to fetch recent calls
            </Typography>
            <Button className="text-xs text-black">TRY AGAIN</Button>
          </Box>
        ) : (
          <Box
            className="overflow-y-auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "12px",
                backgroundColor: "#f5f5f5",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: "#555",
                },
              },
            }}
            style={{ maxHeight: "calc(82vh - 304px)" }}
          >
            {callLogsData.map((data: CallLogData, index: number) => (
              <Box
                key={index}
                className="!flex !items-center !p-2 hover:!bg-gray-200 !cursor-pointer"
              >
                <Box className="mr-4">{data.icon}</Box>
                <Box className="!flex !flex-row !gap-x-28">
                  <Box>
                    <Typography className="!text-sm !text-[--gray-150]">
                      {data.name}
                    </Typography>
                    <Typography className="!text-xs !text-[--gray-100]">
                      {data.date}
                    </Typography>
                    <Typography className="!text-xs !text-[--gray-100]">
                      {data.time}
                    </Typography>
                  </Box>
                  <Box className=" !flex !items-center">
                    <Link to="/ongoing">
                      <Phone className="!text-xl !text-[--purple-400]" />
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CallLogs;
