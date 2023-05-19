import { useState } from "react";
import "./AllToys.css";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "../AllToysCard";

const AllToys = () => {
    const loadToys = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const visibleRows = showAll ? loadToys.length : 20;

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className="bg-slate-400">
            {loadToys.length === 0 ? (
                <div className="py-5 flex justify-center">
                    <div className="allToys border border-blue-400 rounded-md bg-base-200 flex justify-center items-center">
                        <h2 className="text-4xl font-semibold">No toys are available now!</h2>
                    </div>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* <thead>
                                <tr>
                                    <th>Name and Sub-category</th>
                                    <th className="text-center">Price and Available Quantity</th>
                                    <th className="text-center">Seller</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {loadToys.slice(0, visibleRows).map((toy) => (
                                    <AllToysCard key={toy._id} toy={toy}></AllToysCard>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {loadToys.length > 20 && !showAll && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="btn btn-primary"
                                onClick={handleShowAll}
                            >
                                Show All
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllToys;
