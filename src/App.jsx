import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
