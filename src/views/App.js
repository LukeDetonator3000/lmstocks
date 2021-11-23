import React from "react";
import Header from "./shared/Header";
import Main from "./Main";
import Footer from "./shared/Footer";

function App() {
  const background = {
    background: '#121214',
  }
  return (
    <div style={background}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
