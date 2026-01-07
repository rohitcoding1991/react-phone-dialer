
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";
import DialButton from "../DialButton";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Box className="!fixed !top-2/3 !left-1/2">
          <Link to="/dialer">
          <DialButton icon={<PhoneIcon />} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;