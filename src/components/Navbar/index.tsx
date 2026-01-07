import { Box } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import Tooltips from "../../Common/Tooltip";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box className="!bg-[--transparent] lg:container md:!container !mx-auto lg:!max-w-xs md:!max-w-xs">
      <Box className="!flex !justify-between ">
        <Box className="!flex !flex-row">
          <Tooltips
            title="Un-dock to enable dragging"
            icons={
              <DragIndicatorIcon className="!text-xs !cursor-not-allowed" />
            }
          />
          <Tooltips
            title="Un-dock Widget"
            icons={<FolderCopyIcon className="!text-xs !cursor-pointer" />}
          />
        </Box>
        <Box>
          <Link to="/">
            <Close className="!text-xs !cursor-pointer !mr-2" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
