import Slider from "./Mainsection/Slider";
import Services from './Mainsection/Services';
import ProductSection from '../ProductsSection/ProductSection';
import Bannar from './Banar/Banar';
import SimpleSlider from './Carousels/Multi_carousel';
import Head_2 from './head_Section/Head_2';
import Multi_carousel2 from './Carousels/Multi_carousel2';
import Multi_carousel3 from './Carousels/Multi_carousel3';

function Home() {
    window.onload = () => {
        console.log('d')
        window.scrollTo(0,0)
    }

    return ( 
        <>
            <Slider />
            <Services />
            <ProductSection />
            <Bannar />
            <Head_2 />
            <SimpleSlider />
            <Multi_carousel2 />
            <Multi_carousel3 />
        </>
     );
}

export default Home;