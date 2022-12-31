import "./style/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer2 from "./components/Footer2";
import Hero from "./components/Hero";

import { useState } from "react";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <main className="main">
        <Hero />
        <Features />
        <Cta />
      </main>
      <Footer2 />
      <Footer />
    </>
  );
}

export default App;
