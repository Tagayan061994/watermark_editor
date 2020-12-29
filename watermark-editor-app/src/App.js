import './App.css';
import GlobalFonts from './fonts/fonts';
import Header from "../src/components/header";
import Main from "../src/components/main";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Main />
      <Footer />
    </div >
  );
};

export default App;
