
import './App.css';
// import Cake from './components/DataContext/zeft';
import Header from './components/Header/Header';
// import Slider from './components/Mainsection/Slider';
// import Services from './components/Mainsection/Services';
// import ProductSection from './components/ProductsSection/ProductSection';
// import Bannar from './components/Banar/Banar';
// import Head_2 from './components/head_Section/Head_2';
// import Trending from './components/Trendings/Trendings';
import Footer from './components/Footer/Footer';
// import SimpleSlider from './components/Carousels/Multi_carousel';
// import Multi_carousel2 from './components/Carousels/Multi_carousel2';
// import Multi_carousel3 from "./components/Carousels/Multi_carousel3";
import Upp_button from './components/Go_up/Upp_button';
import { Route , Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ProductSection from './components/ProductsSection/ProductSection';
import Product_page from './components/Product_page/Product_page';
import Page_Not_Found from './components/Page_Not_Found/Page_Not_Found';
import Contact_page from './components/Contact_page/Contact';
import Shop_page from './components/shop/Shop';
import Blog from './components/Blog_page/Blog';
import Get_response from './components/ProductsSection/Product_hover/Ask_prompt';


function App() {
  return (
    <div className="App">
      <Header />
      <Get_response />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductSection />} />
        <Route path='/products/:productId' element={<Product_page />} />
        <Route path='/contact' element={<Contact_page />} />
        <Route path='/shopping' element={<Shop_page />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Page_Not_Found />} />
      </Routes>
      <Upp_button />
      <Footer />
    </div>
  );
}

export default App;
