
const AllToysCard = ({ toy }) => {
    const { _id, image, seller, name, subCategory, price, availableQuantity } = toy;

    return (
        <div className="bg-slate-400">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name and Sub-category</th>
                            <th className="text-center">Price and Available Quantity</th>
                            <th className="text-center">Seller</th>
                            <th className="text-center"></th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{subCategory}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                Price: ${price}
                                <br />
                                <span className="badge badge-ghost badge-sm">Available Quantity: {availableQuantity}</span>
                            </td>
                            <td className="text-center">{seller}</td>
                            <th>
                                <button className="btn btn-primary">details</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default AllToysCard;
