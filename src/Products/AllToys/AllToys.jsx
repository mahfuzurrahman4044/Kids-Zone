import './AllToys.css'
import { useLoaderData } from "react-router-dom";
import AllToysCard from "../AllToysCard";

const AllToys = () => {
    const loadToys = useLoaderData();
    console.log(loadToys);

    return (
        <div className="bg-slate-400">
            {loadToys.length === 0 ? (
                <div className='py-5 flex justify-center'>
                    <div className='allToys border border-blue-400 rounded-md bg-base-200 flex justify-center items-center'>
                        <h2 className='text-4xl font-semibold'>No toys are available now!</h2>
                    </div>
                </div>
            ) : (
                loadToys.map((toy) => <AllToysCard key={toy._id} toy={toy}></AllToysCard>)
            )}
        </div>
    );
};

export default AllToys;
