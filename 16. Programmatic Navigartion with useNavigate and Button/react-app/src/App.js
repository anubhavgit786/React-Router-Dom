import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
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
        <Route path="cities/:cityId" element={<City/>} />
        <Route path="countries" element= {<CountryList cities={cities} isLoading={isLoading} error={error} />} />
        <Route path="form" element= {<Form/>} />
      </Route>
      <Route path="*" element= {<PageNotFound/>} />
    </Routes>
  </Router>);
}

export default App;



