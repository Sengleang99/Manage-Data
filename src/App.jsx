import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Analytics from "./component/Analytics";
import Newletter from "./component/Newletter";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
