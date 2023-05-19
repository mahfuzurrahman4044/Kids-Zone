import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysCard from "./MyToysCard";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])
    return (
        <div>
            {
                toys.length === 0 ? (
                    <div className="py-5 flex justify-center">
                        <div className="allToys border border-blue-400 rounded-md bg-base-200 flex justify-center items-center">
                            <h2 className="text-4xl font-semibold">No toys are available now!</h2>
                        </div>
                    </div>
                ) : (

                    <div className="grid grid-cols-4">
                        {
                            toys.map(toy => <MyToysCard key={toy._id} toy={toy} toys={toys} setToys={setToys}></MyToysCard>)
                        }
                    </div>)}
        </div>
    );
};

export default MyToys;