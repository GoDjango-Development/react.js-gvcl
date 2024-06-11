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
import { type Product } from "../../types/Product";

interface MoonProductCardProps {
  product: Product;
  onLike: (id: number) => void;
  onAddToCart: (id: number) => void;
}

const MoonProductCard: React.FC<MoonProductCardProps> = ({
  product,
  onLike,
  onAddToCart,
}) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: { xs: 150, md: 190, lg: 250 },
        height: { xs: 280, md: 310, lg: 380 },
        overflow: "hidden",
        boxShadow: 4,
      }}
    >
      {product?.outOfStock ? (
        <Ribbon msg="Agotado" status="danger" />
      ) : (
        product?.oldPrice && <Ribbon msg="Oferta" status="info" />
      )}
      <CardMedia
        sx={{
          height: { xs: 100, lg: 140 },
          width: "100%",
        }}
        image={product?.image}
        title={product?.name}
      />
      <CardContent sx={{ p: { xs: 1, md: 2 } }}>
        <Typography
          sx={{
            fontSize: { xs: ".8rem", md: "1rem", lg: "1.4rem" },
            fontWeight: "600",
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
            fontSize: { xs: ".8rem", md: ".9rem" },
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
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  fontSize: { xs: ".75rem", md: ".9rem" },
                }}
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
          sx={{ fontSize: { xs: "1.1rem", md: "1.2rem" } }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            height: { xs: 55, md: 65 },
          }}
        >
          <Typography sx={{ fontSize: { xs: ".8rem", md: ".9rem" } }}>
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
                height: { xs: 55, md: 65 },
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              {product?.onSale && (
                <Typography
                  component="span"
                  sx={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: { xs: ".9rem", md: "1rem" },
                  }}
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
                <FavoriteBorderIcon
                  sx={{ height: { xs: 20, md: 30 }, color: "#ebb14d" }}
                />
              </IconButton>
              <IconButton
                sx={{ p: 0.5, m: 0 }}
                aria-label="add to cart"
                onClick={() => onAddToCart(product?.id)}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ height: { xs: 20, md: 30 }, color: "#ebb14d" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoonProductCard;
