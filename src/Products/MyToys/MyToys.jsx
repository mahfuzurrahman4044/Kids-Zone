import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        fetch(`https://kids-zone-server-mahfuzurrahman4044.vercel.app/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user]);

    const sortToys = (order) => {
        const sortedToys = [...toys].sort((a, b) => {
            if (order === "asc") {
                return a.price - b.price;
            } else if (order === "desc") {
                return b.price - a.price;
            }
            return 0;
        });

        setSortOrder(order);
        setToys(sortedToys);
    };

    return (
        <div>
            <div className="flex justify-center my-4">
                <button className={`mr-2 btn ${sortOrder === "asc" ? "btn-disabled" : "btn-primary"}`} onClick={() => sortToys("asc")}>
                    Low to High
                </button>
                <button className={`btn ${sortOrder === "desc" ? "btn-disabled" : "btn-primary"}`} onClick={() => sortToys("desc")}>
                    High to Low
                </button>
            </div>
            {toys.length === 0 ? (
                <div className="py-5 flex justify-center">
                    <div className="allToys border border-blue-400 rounded-md bg-base-200 flex justify-center items-center">
                        <h2 className="text-4xl font-semibold">
                            No toys are available now!
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-4">
                    {toys.map(toy => (
                        <MyToysCard
                            key={toy._id}
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                        ></MyToysCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyToys;
