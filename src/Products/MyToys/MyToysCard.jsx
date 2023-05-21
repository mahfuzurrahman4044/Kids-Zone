import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./MyToysCard.css"


const MyToysCard = ({ toy, toys, setToys }) => {
    const { _id, image, seller, name, subCategory, price, availableQuantity, detailDescription } = toy;

    const btndelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kids-zone-server-mahfuzurrahman4044.vercel.app/uniqueToys/${_id}`, {
                    method: "DELETE"
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset();
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="bg-slate-400">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 myImg">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{subCategory}</p>
                    <p>
                        <div>Price: ${price}</div>
                        <div>Available Quality: {availableQuantity}</div>
                        <div>Seller: {seller}</div>
                        <div>{detailDescription}</div>
                    </p>
                    <div className="card-actions flex justify-around items-center">
                        <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
                        <button className="btn btn-primary" onClick={() => btndelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;