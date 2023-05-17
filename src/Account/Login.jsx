import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h3>
                Log in page
            </h3>
            <h3>
                <Link to="/signup">Sign Up</Link>
            </h3>
        </div>
    );
};

export default Login;