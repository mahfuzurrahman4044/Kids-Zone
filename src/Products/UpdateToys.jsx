import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const loadToys = useLoaderData();
    console.log(loadToys);
    const { _id, price, ratings, availableQuantity, detailDescription } = loadToys;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const ratings = form.ratings.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const updatedToy = { price, ratings, availableQuantity, detailDescription };
        console.log(updatedToy);


        fetch(`http://localhost:5000/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="bg-slate-400">
            <h2 className="text-center text-4xl text-warning">Updateing for {_id}</h2>
            <div className="hero min-h-screen bg-slate-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form className="card-body text-center" onSubmit={handleUpdate}>
                        <div className="grid grid-cols-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price:</span>
                                </label>
                                <input type="text" defaultValue={price} name="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings:</span>
                                </label>
                                <input type="text" defaultValue={ratings} name="ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity:</span>
                                </label>
                                <input type="number" defaultValue={availableQuantity} name="availableQuantity" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description:</span>
                            </label>
                            <input type="text" defaultValue={detailDescription} name="detailDescription" className="input input-bordered" />
                        </div>
                        <button className="btn btn-primary my-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;
