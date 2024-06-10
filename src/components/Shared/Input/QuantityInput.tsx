import ButtonPlusLess from "@/components/Shared/Button/ButtonPlusLess";
import { Box, TextField } from "@mui/material";

interface QuantityInputProps {
  id: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onClick: (id: number, quantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  id,
  quantity,
  setQuantity,
  onClick,
}) => {
  const handleIncrement = () => {
    onClick(id, quantity + 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onClick(id, quantity - 1);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
    >
      <ButtonPlusLess plus={false} onClick={handleDecrement} />
      <TextField
        value={quantity}
        inputProps={{ readOnly: true, style: { textAlign: "center" } }}
        sx={{
          height: 20,
          width: 40,
          mx: 0,
          borderRadius: 0,
          ".MuiInputBase-input": { padding: "0", height: 20, width: 40 },
          ".MuiInputBase-root": { borderRadius: 0 },
        }}
      />
      <ButtonPlusLess onClick={handleIncrement} />
    </Box>
  );
};

export default QuantityInput;
