import img1 from "../../assets/Client/istockphoto-1006670552-612x612.jpg"
import img2 from "../../assets/Client/360_F_42083648_THzvkCjCuQ7CEw72asmZabWThvkAFSvZ.jpg"
import img3 from "../../assets/Client/istockphoto-960250094-612x612.jpg"

const Review = () => {
    return (
        <div className="bg-slate-400 py-5">
            <h2 className="text-4xl font-semibold text-warning text-center">Client Review</h2>
            <div className="py-5 lg:flex justify-around items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2>
                            I was blown away by the exceptional quality and variety of toys at Kids Zone. Their commitment to fostering growth and creativity truly shines through. My child's imagination has soared to new heights with their carefully curated collection! This is our go-to toy shop now!
                        </h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2>
                            The personalized attention and excellent customer service I received at Kids Zone were outstanding. Not only did they help me find the perfect toy for my child, but their free servicing guarantee gave me peace of mind. I highly recommend them for their dedication to customer satisfaction.
                        </h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2>
                            Finding a toy shop that offers both educational and fun toys can be a challenge, but Kids Zone exceeded my expectations. Their knowledgeable staff guided me through their incredible selection, and my children have been engrossed in hours of imaginative play ever since.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;