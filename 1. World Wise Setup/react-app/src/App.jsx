import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

const App = ()=>
{
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="product" element={<Product/>} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>)
}

export default App;
