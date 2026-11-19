
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Sitemap from "./pages/Sitemap.jsx";
import StoreLocator from "./pages/StoreLocator.jsx";
import Support from "./pages/Support.jsx";
import Technology from "./pages/Technology.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export default function App() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <CartProvider>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>
  );
}
