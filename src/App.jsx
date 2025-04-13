import Body from "./components/Body";
import Header from "./components/Header";
import "@fontsource/playfair-display";
import "@fontsource/inter";

function App() {
  return (
    <div className="bg-[#F5F1EE] font-body min-h-screen text-[#333333] py-3 ">
      <Header />
      <Body />
    </div>
  );
}

export default App;
