import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

interface ButtonPlusLessProps {
  plus?: boolean;
  onClick: () => void;
}

const ButtonPlusLess: React.FC<ButtonPlusLessProps> = ({
  plus = true,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        border: 1,
        borderColor: "grey.400",
        borderRadius: plus ? "0 4px 4px 0" : "4px 0 0 4px",
        color: "black",
        height: 20,
        width: 30,
        minWidth: "auto",
        padding: 0,
        margin: 0,
      }}
    >
      {plus ? <AddIcon fontSize="small" /> : <RemoveIcon fontSize="small" />}
    </Button>
  );
};

export default ButtonPlusLess;
