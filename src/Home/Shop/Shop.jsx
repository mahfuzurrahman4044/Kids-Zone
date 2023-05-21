import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";


const Shop = () => {
    const [vehicles, setVehicles] = useState([]);
    const [activeNav, setActiveNav] = useState("Sports Car");

    const handleActiveButton = (event) => {
        setActiveNav(event);
    }

    useEffect(() => {
        fetch("https://kids-zone-server-mahfuzurrahman4044.vercel.app/addToy")
            .then(res => res.json())
            .then(data => {
                setVehicles(data)
            })
    }, [])

    const results = vehicles?.filter(vehicle => vehicle.subCategory == activeNav);
    console.log(results);

    return (
        <div className="bg-slate-400">
            <div className="flex justify-center items-center py-5">
                <button className={`btn btn-primary mx-2 ${activeNav==="Sports Car"? "btn-disabled": "btn-primary"}`} onClick={() => handleActiveButton("Sports Car")}>Sports Car</button>
                <button className={`btn btn-primary mx-2 ${activeNav==="Truck"? "btn-disabled": "btn-primary"}`} onClick={() => handleActiveButton("Truck")}>Truck</button>
                <button className={`btn btn-primary mx-2 ${activeNav==="Train"? "btn-disabled": "btn-primary"}`} onClick={() => handleActiveButton("Train")}>Train</button>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 py-5">
                {
                    results.map(result => <ShopCard key={result._id} result={result}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;