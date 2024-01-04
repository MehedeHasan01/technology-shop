import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Roots = () => {
    return (
        <div className="RobotoFont">
        <Navbar/>
        <div className="bg-gray-200">
        <Outlet/>
        </div>
        <Footer/>
        </div>
    );
};

export default Roots;