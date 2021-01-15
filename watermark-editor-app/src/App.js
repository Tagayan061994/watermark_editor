import React from 'react';
import { Footer } from "./components/footer";
import { Main } from "../src/components/main";
import { Header } from "../src/components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
