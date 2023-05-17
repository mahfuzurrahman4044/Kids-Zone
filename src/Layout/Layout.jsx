import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Header/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;