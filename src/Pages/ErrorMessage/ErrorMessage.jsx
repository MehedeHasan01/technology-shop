import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const ErrorMessage = () => {
    return (
        <>
        <Navbar/>
        <div className="h-[86vh] flex justify-center items-center text-4xl text-gray-800 font-semibold">
            Page not found
        </div>
        <Footer/>
        </>
    );
};

export default ErrorMessage;