import Body from "./components/Body";
import Header from "./components/Header";
import "@fontsource/playfair-display";
import "@fontsource/inter";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-[#F5F1EE] font-body min-h-screen text-[#333333] pt-3 ">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
