import { useEffect, useState } from "react";
import "./AllToys.css";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysTable";

const AllToys = () => {
    const toys = useLoaderData();
    const [loadToys, setLoadToys] = useState(toys);
    const [showAll, setShowAll] = useState(false);
    const visibleRows = showAll ? loadToys.length : 20;
    const [searchText, setSearchText] = useState();

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleSearch = (event) => {
        // console.log("Clicked");
        event.preventDefault();
        const text = event.target.text.value;
        setSearchText(text);
    }

    // console.log(searchText);

    useEffect(() => {
        if (searchText) {
            fetch(`https://kids-zone-server-mahfuzurrahman4044.vercel.app/searchName/${searchText}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoadToys(data);
                })
        } else {
            setLoadToys(toys);
        }
    }, [searchText]);


    return (
        <div className="bg-slate-400 pt-5">
            {loadToys.length === 0 ? (
                <div className="py-5 flex justify-center">
                    <div className="allToys border border-blue-400 rounded-md bg-base-200 flex justify-center items-center">
                        <h2 className="text-4xl font-semibold">No toys are available now!</h2>
                    </div>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto w-full">
                        <form onSubmit={handleSearch} className="flex justify-center p-5 text-2xl">
                            <input className="ps-1 ms-2 rounded-md" type="text" name="text" placeholder="search" />
                            <button className="btn btn-primary ms-2">Search</button>
                        </form>
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
                        <div className="flex justify-center p-4">
                            <button className="btn btn-primary" onClick={handleShowAll}>Show All</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllToys;
