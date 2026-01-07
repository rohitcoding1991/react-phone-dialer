import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box } from "@mui/material";
import DialerSipIcon from "@mui/icons-material/DialerSip";
import DialButton from "../DialButton";
import Phone from "@mui/icons-material/Phone";
import { data } from "./Data";
import Tooltips from "../../Common/Tooltip";
import MenuButton from "../MenuButton";
import QuickDial from "../QuickDial";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const CustomDropdown = () => {
  return (
    <Box
      sx={{ width: "-webkit-fill-available" }}
      className="!top-0 !left-0 !bg-[--gray-350] !min-w-[50%] !h-full !border-[--gray-300]"
    >
      <QuickDial />
    </Box>
  );
};

const DialerScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = (digit: any) => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + String(digit));
  };

  const handleBackspace = () => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    const quickDialButton = document.getElementById("quickDialButton");
    if (quickDialButton) {
      const leftPosition = !isDropdownOpen ? "calc(100% - 65px)" : "-31px";
      quickDialButton.style.left = leftPosition;
    }
  };

  return (
    <Box className="!pt-12">
      <Navbar />
      <Box
        className="lg:!container md:!container !mx-auto !rounded-md lg:!max-w-xs md:!max-w-xs !relative"
        sx={{ boxShadow: "rgb(61 71 82 / 20%) 0 2px 12px" }}
      >
        <Box
          id="quickDialButton"
          className="!-rotate-90 !absolute !w-[86px] !z-10"
          style={{
            left: "-31px",
            top: " calc((100% / 2) - 12px)",
          }}
        >
          <Button
            className="!text-xs !font-semibold !bg-white !py-1 !px-2 !capitalize !text-gray-900 !text-center !shadow-md !rounded-md !cursor-pointer"
            style={{
              boxShadow:
                "inset rgb(0 0 0 / 20%) 0 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
            }}
            onClick={toggleDropdown}
          >
            Quick Dial
          </Button>
        </Box>
        <TextField
          variant="filled"
          value={phoneNumber}
          fullWidth
          dir="rtl"
          className="!bg-gray-50 !outline-none !border-0 !shadow-none hover:!bg-gray-50"
          InputProps={{
            startAdornment: (
              <Button
                onClick={handleBackspace}
                sx={{ color: "#a9a9a9 ", minWidth: 0 }}
              >
                <BackspaceIcon className="!mr-3 !mt-2" />
              </Button>
            ),
            sx: {
              "& input": {
                color: "#3D61F3",
                fontSize: "20px",
                fontWeight: 700,
              },
            },
          }}
        />
        <Box className="!flex  !flex-row !text-center !justify-center">
          <Box className="grid grid-cols-3 !gap-2 !text-center !mt-3">
            {data.map((row) => (
              <Box className="!flex !flex-col" key={row.label}>
                <Button
                  className="!text-3xl !font-bold !text-[--purple-400]"
                  onClick={() => handleButtonClick(row.label)}
                >
                  {row.label}
                </Button>
                <Box className="!text-[10px] !font-extrabold !text-[--gray-300] ">
                  {row.value}
                </Box>
              </Box>
            ))}
            <Button className="!ml-4 !mb-1 ">
              <Tooltips
                title="Dialer"
                icons={<DialerSipIcon className="!text-[--purple-400]" />}
              />
            </Button>
            <Box className="!ml-6 !mb-2">
              <Link to="/ongoing">
                <DialButton icon={<Phone />} />
              </Link>
            </Box>
          </Box>
        </Box>
        <div className="!border-b  !border-[--gray-300]"></div>
        <Box>
          <MenuButton />
        </Box>
        {isDropdownOpen && (
          <>
            <Box className="!absolute top-animation !left-0 !min-w-[90%] !top-0 !h-full">
              <CustomDropdown />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DialerScreen;
