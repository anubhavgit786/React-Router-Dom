import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

const App = ()=>
{
  return (
  <Router>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="product" element= {<Product/>} />
      <Route path="pricing" element= {<Pricing/>} />
      <Route path="login" element= {<Login/>} />
      <Route path="app" element= {<AppLayout/>} />
      <Route path="*" element= {<PageNotFound/>} />
    </Routes>
  </Router>);
}

export default App;



