import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
