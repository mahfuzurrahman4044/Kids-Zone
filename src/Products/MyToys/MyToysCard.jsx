

const MyToysCard = ({ toy }) => {
    const { _id, image, seller, name, subCategory, price, availableQuantity } = toy;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{subCategory}</p>
                    <p>
                        <div>Price: ${price}</div>
                        <div>Available Quality: {availableQuantity}</div>
                        <div>Seller: {seller}</div>
                    </p>
                    <div className="card-actions flex justify-around items-center">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;