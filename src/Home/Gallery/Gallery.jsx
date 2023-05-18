import gallaryImg1 from "../../assets/Gallary/2839.jpg"
import gallaryImg2 from "../../assets/Gallary/indian-passenger-train-with-coaches-railway-track-ar-kids-toys-5-original-imagkqfstrumvnyf.webp"
import gallaryImg3 from "../../assets/Gallary/b1edddec7aa3c94f29e0a111fe9c1e66.jpeg"
import "./Gallery.css"

const Gallery = () => {
    return (
        <div className="bg-slate-400 lg:flex justify-around items-center">
            <div>
                <h2 className="text-3xl font-semibold text-warning">
                    Rev up the fun at Kids Zone
                </h2>
                <br />
                <p>
                    Discover an incredible world of vehicles that will ignite <br />
                    your child's imagination. From speedy race cars to mighty <br />
                    monster trucks, we have it all! Watch as your little ones <br />
                    embark on epic adventures and create memories that will <br />
                    last a lifetime. Come visit us today and explore our vast <br />
                    collection of vehicles, designed to fuel their dreams. Kids <br />
                    Zone: Where playtime and imagination collide!" <br />
                    <br />
                    Feel free to modify and personalize this script to best suit <br />
                    your toy shop and target audience. Good luck with your <br /> banner!
                </p>
            </div>
            <div>
                <div className="gallaryImg1">
                    <img src={gallaryImg1} alt="" />
                </div>
                <div className="gallaryImg2">
                    <img src={gallaryImg2} alt="" />
                </div>
                <div className="gallaryImg3">
                    <img src={gallaryImg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;