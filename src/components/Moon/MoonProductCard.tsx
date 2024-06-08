import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Ribbon from "../Shared/Ribbon";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  oldPrice?: number;
  onSale?: boolean;
  outOfStock?: boolean;
  minPurchase?: number;
}

interface MoonProductCardProps {
  product: Product;
  onLike: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const MoonProductCard: React.FC<MoonProductCardProps> = ({ product, onLike, onAddToCart }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: { xs: 190, lg: 250 },
        height: { xs: 310, lg: 380 },
        overflow: "hidden",
        boxShadow: 4,
      }}
    >
      {product?.outOfStock && <Ribbon msg="Agotado" status="danger" />}
      <CardMedia
        sx={{
          height: { xs: 100, lg: 140 },
          width: "100%",
        }}
        image={product?.image}
        title={product?.name}
      />
      <CardContent>
        <Typography
          sx={{
            fontSize: { xs: "1rem", lg: "1.4rem" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product?.name}
        </Typography>
        <Typography
          color="textSecondary"
          sx={{
            height: { xs: "40px", lg: "60px" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: { xs: 2, lg: 3 },
            WebkitBoxOrient: "vertical",
            fontSize:".9rem"
          }}
        >
          {product?.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 30,
          }}
        >
          {product?.minPurchase && (
            <>
              <InfoOutlinedIcon sx={{ mr: 1, fontSize: "inherit" }} />
              <Typography
                sx={{ my: 1, fontWeight: "bold", fontSize:".9rem" }}
              >
                Compra mínima: {product?.minPurchase}
              </Typography>
            </>
          )}
        </Box>
        <Rating
          name="product-rating"
          value={product?.rating}
          precision={0.1}
          readOnly
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            height: 65,
          }}
        >
          <Typography sx={{fontSize:".9rem"}}>
            CUP
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 65,
                fontSize: "1.1rem",
              }}
            >
              {product?.onSale && (
                <Typography component="span"
                  sx={{ textDecoration: "line-through", color: "grey" }}
                >
                  ${product?.oldPrice}
                </Typography>
              )}
              ${product?.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                mt: 0,
              }}
            >
              <IconButton
                sx={{ p: 0.5, m: 0 }}
                aria-label="add to favorites"
                onClick={() => onLike(product?.id)}
              >
                <FavoriteBorderIcon sx={{ color: "#ebb14d" }} />
              </IconButton>
              <IconButton
                sx={{ p: 0.5, m: 0 }}
                aria-label="add to cart"
                onClick={() => onAddToCart(product?.id)}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "#ebb14d" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoonProductCard;
