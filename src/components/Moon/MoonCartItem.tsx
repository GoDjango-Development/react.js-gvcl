import { type Product } from "@/types/Product";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QuantityInput from "@/components/Shared/Input/QuantityInput";

interface MoonCartItemProps {
  product: Product;
  initilQuantity?: number;
  onBuyProduct: (id: number, quantity: number) => void;
}

const MoonCartItem: React.FC<MoonCartItemProps> = ({
  product,
  initilQuantity,
  onBuyProduct,
}) => {
  const [quantity, setQuantity] = useState(initilQuantity || 1);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 7,
        borderRadius: 3,
        width: "95%",
        maxWidth: 400,
        minWidth: 300,
        height: 150,
        overflow: "hidden",
        p: 1,
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          width: "35%",
          borderRadius: 3,
        }}
        image={product?.image}
        title={product?.name}
      />
      <CardContent
        sx={{
          height: "100%",
          width: "60%",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            textTransform: "uppercase",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product?.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
            mt: 1,
          }}
        >
          <Stack spacing={2}>
            <Typography sx={{ fontSize: ".9rem" }}>Precio</Typography>
            <Typography sx={{ fontSize: ".9rem" }}>Cantidad</Typography>
            <Typography sx={{ fontSize: ".9rem" }}>Subtotal</Typography>
          </Stack>
          <Stack spacing={2} alignItems="flex-end">
            <Typography sx={{ fontSize: ".9rem" }}>
              <Typography component="sup" sx={{ fontSize: ".5rem" }}>
                CUP
              </Typography>
              {product?.price}
            </Typography>
            <Box sx={{ fontSize: ".9rem" }}>
              <QuantityInput id={Number(product?.id)} quantity={quantity} setQuantity={setQuantity} onClick={onBuyProduct} />
            </Box>
            <Typography sx={{ fontSize: ".9rem" }}>
              <Typography component="sup" sx={{ fontSize: ".5rem" }}>
                CUP
              </Typography>
              {(product?.price * quantity).toFixed(2)}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoonCartItem;
