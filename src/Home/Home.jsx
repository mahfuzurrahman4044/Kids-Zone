import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Services from "./Services";
import Review from "./Review";
import Shop from "./Shop/Shop";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
            <Shop></Shop>
            <Review></Review>
        </div>
    );
};

export default Home;