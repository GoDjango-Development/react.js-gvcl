import { createBoard } from "@wixc3/react-board";
import MoonCartItem from "../../../components/Moon/MoonCartItem";

const product = {
  id: "1",
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

const handleBuyProduct = (id: number, quantity: number) => {
  console.log(`Buying product with id: ${id} and quantity ${quantity}`);
};

export default createBoard({
  name: "MoonCartItem",
  Board: () => (
    <MoonCartItem
      product={product}
      initilQuantity={2}
      onBuyProduct={handleBuyProduct}
    />
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 826,
  },
});
