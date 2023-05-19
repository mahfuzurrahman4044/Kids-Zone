import { Link } from "react-router-dom";
import img from "../assets/404/404-error-page-not-found.jpg"
import './Error.css'

const Error = () => {
    return (
        <div>
            <div className='error flex justify-center mt-5'>
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className='error flex justify-center mt-5'>
                <Link className="btn btn-primary" to="/">Home</Link>
            </div>
        </div>
    );
};

export default Error;