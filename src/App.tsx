import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <main>
      <CartProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </CartProvider>
    </main>
  );
}

export default App;
