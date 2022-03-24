import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/Productlist";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import Skills from "./components/skill/Skills";

const App = () => {
  
  return (
  <div>
  <Toggle />
  <Intro/>
  <About/>
  <Skills/>
  <ProductList/>
  <Contact/>
  
  </div>
  )
};

export default App;
