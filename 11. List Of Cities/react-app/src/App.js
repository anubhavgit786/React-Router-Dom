import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useCities } from "./hooks/useCities"; 

const App = ()=>
{
  const { cities, isLoading, error } = useCities();
  return (
  <Router>
    <Routes>
      <Route index element= {<HomePage/>} />
      <Route path="product" element= {<Product/>} />
      <Route path="pricing" element= {<Pricing/>} />
      <Route path="login" element= {<Login/>} />
      <Route path="app" element= {<AppLayout/>}>
        <Route index element= {<CityList cities={cities} isLoading={isLoading} error={error} />} />
        <Route path="cities" element= {<CityList cities={cities} isLoading={isLoading} error={error} />} />
        <Route path="countries" element= {<p>List of countries</p>} />
        <Route path="form" element= {<p>Form</p>} />
      </Route>
      <Route path="*" element= {<PageNotFound/>} />
    </Routes>
  </Router>);
}

export default App;



