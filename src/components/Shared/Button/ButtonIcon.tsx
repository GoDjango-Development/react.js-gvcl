import { Button } from "@mui/material";

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: () => void;
  bgcolor?: string;
  color?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onClick,
  bgcolor = "grey",
  color = "white",
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        minWidth: 0,
        m: 2,
        bgcolor,
        color,
        fontSize: 40,
        backdropFilter: "blur(5px)",
        borderRadius: "50%",
      }}
    >
      {icon}
    </Button>
  );
};

export default ButtonIcon;
