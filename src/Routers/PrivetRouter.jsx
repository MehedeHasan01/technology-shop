import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <>
        <div className='h-screen flex justify-center items-center'>

            <div className=''>
            <span className="loading loading-spinner loading-lg text-error"></span>
            </div>

        </div>

        </>
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname}  to={'/login'}></Navigate>
};

export default PrivetRouter;