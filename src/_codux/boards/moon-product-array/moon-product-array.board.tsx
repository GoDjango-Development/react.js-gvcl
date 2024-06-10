import { createBoard } from "@wixc3/react-board";
import MoonProductArray from "../../../components/Moon/MoonProductArray";
import React, { useState, useEffect } from "react";
import { Product } from "@/types/Product";

const MoonProductArrayBoard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreProducts = () => {
    // Lógica para cargar más productos
    // Por ejemplo, una solicitud fetch para obtener más productos
    // Aquí solo se agrega un ejemplo de producto estático
    setTimeout(() => {
      setProducts((prevProducts) => [
        ...prevProducts,
        {
          id: prevProducts.length + 1,
          name: "Producto de Prueba",
          description: "Esta es una descripción de prueba para el producto.",
          image: "https://via.placeholder.com/150",
          price: 29.99,
          oldPrice: 49.99,
          onSale: true,
          outOfStock: true,
          minPurchase: 2,
          rating: 4.5,
        },
      ]);
      // Ejemplo de cómo determinar si hay más productos
      if (products.length >= 50) {
        setHasMore(false);
      }
    }, 1500);
  };

  const onLike = (id: number) => {
    console.log(`Liked product with id: ${id}`);
  };

  const onAddToCart = (id: number) => {
    console.log(`Added product with id ${id} to cart`);
  };

  useEffect(() => {
    // Inicial carga de productos
    loadMoreProducts();
  }, []);

  return (
    <MoonProductArray
      products={products}
      loadMoreProducts={loadMoreProducts}
      hasMore={hasMore}
      onLike={onLike}
      onAddToCart={onAddToCart}
    />
  );
};

export default createBoard({
  name: "MoonProductArray",
  Board: MoonProductArrayBoard,
  isSnippet: true,
});
