import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoonProductCard from './components/Moon/MoonProductCard';

function App() {
  const product = {
    id: '1',
    name: 'Producto de Prueba',
    description: 'Esta es una descripción de prueba para el producto.',
    image: 'https://via.placeholder.com/150',
    price: 29.99,
    oldPrice: 49.99,
    onSale: true,
    outOfStock: true,
    minPurchase: 2,
    rating: 4.5,
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoonProductCard" element={<MoonProductCard product={product} />} />
      </Routes>
    </Router>
  );
}

export default App;