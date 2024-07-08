import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from './components/Checkout'


function App() {

  return (
    <BrowserRouter basename='/' >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
