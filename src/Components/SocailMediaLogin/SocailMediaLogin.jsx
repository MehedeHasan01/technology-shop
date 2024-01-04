import {  IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";


const SocailMediaLogin = () => {
    const {googleLogin, gitHubLogin, } = useAuth()

    const handleSocailMediaLogin =(media)=>{
        media().then(()=> {
            toast.success('User logged in successfully');
        })
        .catch(() => toast.error('Login closed! Try Again Login.'))
    }

    return (
        <div>
        <div className="flex items-center gap-1 mb-2">
            <div className="border border-paragraphGrey w-full"></div>
            <div className="text-xl font-bold text-titleGrey">OR</div>
            <div className="border border-paragraphGrey w-full"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
            <div  onClick={()=> handleSocailMediaLogin(googleLogin) } className="p-2 text-blue-600
            hover:text-blue-700
            hover:bg-blue-100 bg-red-100 w-fit rounded-full cursor-pointer">

            <IoLogoGoogle className="text-2xl"/>
            </div>
            <div onClick={()=> handleSocailMediaLogin(gitHubLogin)} className="p-2 text-black-400
            cursor-pointer
            hover:bg-blue-100 bg-red-100 w-fit rounded-full ">

            <IoLogoGithub className="text-2xl"/>
            </div>

        </div>
        <Toaster/>
        </div>
    );
};

export default SocailMediaLogin;