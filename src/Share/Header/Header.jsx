import { Link } from "react-router-dom";
import logo from "../../assets/Logo/colorful-3d-logo-kids-zone-isolated-on-white-background.jpg"
import "./Header.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div>
            <div className="navbar bg-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                            {
                                user ? <><li><Link to="/myToys">My Toys</Link></li>
                                    <li><Link to="/addToys">Add Toy</Link></li>
                                    <div className="profile" title={`${user.displayName}`}>
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                    <li><Link className="btn btn-primary btn-logOut" title={user.displayName} onClick={handleLogOut}>Log out</Link></li></> : <li><Link to="/login">Log in</Link></li>
                            }
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="logo-header">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        {
                            user ? <><li><Link to="/myToys">My Toys</Link></li>
                                <li><Link to="/addToys">Add Toy</Link></li>
                                <div className="profile" title={`${user.displayName}`}>
                                    <img src={user.photoURL} alt="" />
                                </div>
                                <li><Link className="btn btn-primary mt-3 ms-2" onClick={handleLogOut}>Log out</Link></li></> : <li><Link to="/login">Log in</Link></li>
                        }
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
