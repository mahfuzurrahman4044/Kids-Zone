import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const { logIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setMessage("Logged in successfully");
                setError("")
            })
            .then(error => {
                console.log(error);
                setMessage("");
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                </div>
                                <p className="my-2">New to Car Doctor? Please <Link to="/signup" className="btn btn-primary">Sign Up</Link></p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {
                                message ? <h4 className='text-center'>{message}</h4> : <h4 className='text-center'>{error}</h4>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;