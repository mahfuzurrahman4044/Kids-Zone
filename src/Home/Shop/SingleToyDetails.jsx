import { useLoaderData } from "react-router-dom";
import "./SingleToyDetails.css";

const SingleToyDetails = () => {
    const loadSingleToyDetails = useLoaderData();
    const { _id, image, seller, name, email, price, ratings, availableQuantity, detailDescription } = loadSingleToyDetails;
    return (
        <div className="py-5 bg-slate-400 flex justify-center">
            <div className="bg-base-100 bgSingleToyImg">
                <div className="singleToyImg flex justify-center m-3">
                    <img src={image} alt="" />
                </div>
                <div className="py-5">
                    <h2 className="flex justify-center">Toy ID: {_id}</h2>
                    <h2 className="text-3xl flex justify-center text-warning">{name}</h2>
                    <h2 className="flex justify-center">Price: ${price}</h2>
                    <h2 className="flex justify-center">Ratings: {ratings}</h2>
                    <h2 className="flex justify-center">Available quantity: {availableQuantity}</h2>
                    <h2 className="flex justify-center">Seller: {seller}</h2>
                    <h2 className="flex justify-center">Email:: {email}</h2>
                    <h2 className="flex justify-center">Details:: {detailDescription}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;