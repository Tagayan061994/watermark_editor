import { useState } from "react";
import './App.css';
import { Header } from "../src/components/header";
import { Main } from "../src/components/main";
import { Footer } from './components/footer';

function App() {
  const [defaultSidebar, setdefaultSidebar] = useState(true)
  const [imgSidebar, setimgSidebar] = useState(false);
  const [textSidebar, settextSidebar] = useState(false);

  const switchToSidebar = (sideBar) => {
    if (sideBar === "ImageSideBar") {
      setimgSidebar(true);
      settextSidebar(false);
      setdefaultSidebar(false);
    } else if (sideBar === "TextSideBar") {
      settextSidebar(true);
      setimgSidebar(false);
      setdefaultSidebar(false);
    } else if (sideBar === "DefaultSideBar") {
      setdefaultSidebar(true);
      setimgSidebar(false);
      settextSidebar(false);
    }
  }

  return (
    <div className="App">
      <Header />
      <Main
        defaultSidebar={defaultSidebar}
        imgSidebar={imgSidebar}
        textSidebar={textSidebar}
        switchToSidebar={switchToSidebar}
      />
      <Footer switchToSidebar={switchToSidebar} />
    </div >
  );
};

export default App;
