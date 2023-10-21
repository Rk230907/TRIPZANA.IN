import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";
import Footer from "./components/Footer";
import DestinationPage from "./components/DestinationPage";
import About from "./components/About";
import TouristPlaceDetails from "./components/TouristPlaceDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DestinationList />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<TouristPlaceDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
