import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

interface TooltipsProps {
  title: string;
  icons: JSX.Element;
}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#757575",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#757575",
  },
}));

const Tooltips: React.FC<TooltipsProps> = ({ title, icons }) => {
  return (
    <div>
      <BootstrapTooltip title={title} placement="top">
        <IconButton>{icons}</IconButton>
      </BootstrapTooltip>
    </div>
  );
};
export default Tooltips;
