import { Add, KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { chats } from "./Data";

interface Chat {
  icon: JSX.Element;
  name: string;
  message: string;
}

const Conversations = () => {
  return (
    <Box className="!pt-12 lg:!container md:!container !mx-auto lg:!max-w-xs md:!max-w-xs">
      <Navbar />
      <Box sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }} className="">
        <Box className="!flex !justify-between !p-7 !border-b">
          <Box className="!flex items-center">
            <Link
              to="/dialer"
              className="!text-[--purple-400] flex items-center"
            >
              <KeyboardArrowLeft />
              <Typography className="!pl-6 !font-semibold !text-sm">
                Conversations
              </Typography>
            </Link>
          </Box>
          <Link to="/contacts" className="!text-[--purple-400]">
            <Add />
          </Link>
        </Box>
        <Box
          className="!mt-3 overflow-y-auto"
          style={{ maxHeight: "calc(82vh - 304px)" }}
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
        >
          {chats.map((chat: Chat, index: number) => (
            <Box
              key={index}
              className="!flex items-center !p-2 hover:!bg-gray-200"
            >
              <Box className="!mr-4 !p-2 rounded-full !bg-[--gray-300] !text-[--gray-700]">
                {chat.icon}
              </Box>
              <Box>
                <Typography className="!text-sm !text-[--purple-400] !font-semibold">
                  {chat.name}
                </Typography>
                <Typography className="!text-xs !text-[--gray-100] !font-semibold">
                  {chat.message}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Conversations;
