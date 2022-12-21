import "./style/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <>
      <main className="container">
        <Navbar />
        <Header />
        <Features />
        <Cta />
        <Footer2 />
      </main>
      <Footer />
    </>
  );
}

export default App;
