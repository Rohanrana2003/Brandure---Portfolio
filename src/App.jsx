import Body from "./components/Body";
import Header from "./components/Header";
import "@fontsource/playfair-display";
import "@fontsource/inter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F5F1EE] font-body min-h-screen text-[#333333] pt-3 ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
