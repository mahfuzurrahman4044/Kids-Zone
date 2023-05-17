import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(image, email, password, confirmPassword);


        if (password != confirmPassword) {
            setError("Password doesn't match");
            return;
        }
        else if (password.length < 6) {
            setError("Password is too short");
            return;
        }
        else {
            // setMessage("Account has been craeted successfully")
            
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setMessage("Account has been craeted successfully");
                setError("");
            })
            .catch(error => {
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
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image:</span>
                                    </label>
                                    <input type="url" placeholder="image" name="image" className="input input-bordered" required />
                                </div>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password:</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" name="confirmPassword" className="input input-bordered" />
                                </div>
                                <p className="my-2">Already have an accounnt? Please <Link to="/login" className="btn btn-primary">Login</Link></p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary submit">Sign Up</button>
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

export default SignUp;