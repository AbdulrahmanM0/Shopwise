
import './App.css';
// import Cake from './components/DataContext/zeft';
import Header from './components/Header/Header';
import Slider from './components/Mainsection/Slider';
import Services from './components/Mainsection/Services';
import ProductSection from './components/ProductsSection/ProductSection';
import Bannar from './components/Banar/Banar';
import Head_2 from './components/head_Section/Head_2';
import Trending from './components/Trendings/Trendings';
import Footer from './components/Footer/Footer';
import SimpleSlider from './components/Carousels/Multi_carousel';
import Multi_carousel2 from './components/Carousels/Multi_carousel2';
import Multi_carousel3 from "./components/Carousels/Multi_carousel3";
import Upp_button from './components/Go_up/Upp_button';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <ProductSection />
      <Bannar />
      <Head_2 />
      <SimpleSlider />
      {/* <Trending /> */}
      <Multi_carousel2 />
      <Multi_carousel3 />
      <Footer />
      <Upp_button />
    </div>
  );
}

export default App;
