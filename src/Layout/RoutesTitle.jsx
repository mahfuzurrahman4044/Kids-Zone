import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const RoutesTitle = () => {
    const [title, setTitle] = useState("Kids Zone"); // Initial title

    useEffect(() => {
        const currentPath = window.location.pathname;
        let newTitle = "Kids Zone";

        if (currentPath === "/") {
            newTitle = "Kids Zone";
        } else if (currentPath === "/blogs") {
            newTitle = "Kids Zone Blogs";
        } else if (currentPath === "/login") {
            newTitle = "Kids Zone Login";
        } else if (currentPath === "/signup") {
            newTitle = "Kids Zone Sign Up";
        } else if (currentPath === "/addToys") {
            newTitle = "Kids Zone Add Toy";
        } else if (currentPath === "/myToys") {
            newTitle = "Kids Zone My Toy";
        } else if (currentPath.startsWith("/update/")) {
            newTitle = "Kids Zone Update";
        } else if (currentPath === "/allToys") {
            newTitle = "Kids Zone All Toys";
        } else if (currentPath.startsWith("/details/")) {
            newTitle = "Kids Zone Details";
        } else {
            newTitle = "Error Page";
        }

        setTitle(newTitle);
    }, []);

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

export default RoutesTitle;
