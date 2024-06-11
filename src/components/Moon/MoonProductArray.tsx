import React, { useRef, useCallback } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Product } from "../../types/Product";
import MoonProductCard from "./MoonProductCard";

interface MoonProductArrayProps {
  products: Product[];
  loadMoreProducts: () => void;
  hasMore: boolean;
  onLike: (id: number) => void;
  onAddToCart: (id: number) => void;
}

const MoonProductArray: React.FC<MoonProductArrayProps> = ({
  products,
  loadMoreProducts,
  hasMore,
  onLike,
  onAddToCart,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMoreProducts]
  );

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "start", width:"100%"}} >
    <Grid container spacing={2} sx={{p:2}}>
      {products.map((product, index) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={2.4}
          key={product.id}
          ref={products.length - 1 === index ? lastProductRef : null}
        >
          <MoonProductCard
            product={product}
            onLike={onLike}
            onAddToCart={onAddToCart}
          />
        </Grid>
      ))}
      {hasMore && (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
    </Box>
  );
};

export default MoonProductArray;
