import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";


const AddToys = () => {
    const { user } = useContext(AuthContext);
    const btnSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;

        const addToy = { image, name, seller, email, subCategory, price, ratings, availableQuantity, detailDescription }
        console.log(addToy);

        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                // if (data.insertedId) {
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Successfully added',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //     })
                // }
            })
    }
    return (
        <div className="bg-slate-400">
            <div className="hero min-h-screen bg-slate-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form className="card-body text-center" onSubmit={btnSubmit}>
                        <div className="grid grid-cols-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image:</span>
                                </label>
                                <input type="url" placeholder="image" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller:</span>
                                </label>
                                <input type="text" value={user.displayName} name="seller" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" name="email" value={user.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category:</span>
                                </label>
                                <input type="text" placeholder="sub-category" name="subCategory" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price:</span>
                                </label>
                                <input type="text" placeholder="price" name="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings:</span>
                                </label>
                                <input type="text" placeholder="ratings" name="ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity:</span>
                                </label>
                                <input type="number" placeholder="available quantity" name="availableQuantity" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description:</span>
                            </label>
                            <input type="text" placeholder="detail description" name="detailDescription" className="input input-bordered" />
                        </div>
                        <button className="btn btn-primary my-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;
