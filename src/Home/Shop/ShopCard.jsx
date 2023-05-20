import { Link } from "react-router-dom";


const ShopCard = ({ result }) => {
    const { _id, image, seller, name, subCategory, price, ratings, availableQuantity, detailDescription } = result;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 myImg">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{subCategory}</p>
                    <p>
                        <div>Price: ${price}</div>
                        <div>Ratings: {ratings}</div>
                        <div>Available Quality: {availableQuantity}</div>
                        <div>Seller: {seller}</div>
                        <div>{detailDescription}</div>
                    </p>
                    <div>
                        <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;