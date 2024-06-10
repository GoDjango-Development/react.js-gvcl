import { createBoard } from "@wixc3/react-board";
import MoonProductCard from "../../../components/Moon/MoonProductCard";

const product = {
  id: 1,
  name: "Producto de Prueba",
  description: "Esta es una descripción de prueba para el producto.",
  image: "https://via.placeholder.com/150",
  price: 29.99,
  oldPrice: 49.99,
  onSale: true,
  outOfStock: true,
  minPurchase: 2,
  rating: 4.5,
};

// Cambia el tipo de parámetro de number a string
const onLike = (id: number) => {
  console.log(`Liked product with id: ${id}`);
};

// Cambia el tipo de parámetro de number a string
const onAddToCart = (id: number) => {
  console.log(`Added product with id ${id} to cart`);
};

export default createBoard({
  name: "MoonProductCard",
  Board: () => (
    <MoonProductCard
      product={product}
      onLike={onLike}
      onAddToCart={onAddToCart}
    />
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1300,
  },
});
