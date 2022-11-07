import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Latest from "../src/components/MoviesTypes/Latest";
import Popular from "../src/components/MoviesTypes/Popular";
import TopRated from "../src/components/MoviesTypes/TopRated";
import Upcoming from "../src/components/MoviesTypes/Upcoming";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
