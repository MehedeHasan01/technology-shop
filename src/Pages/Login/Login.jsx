import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";




const Login = () => {

    const { login, resetPassword} = useAuth()
    const [loginError, setLoginError] = useState('');

    const location = useLocation()
    const Navigate = useNavigate()
    const handleLoginForm = e =>{

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // if(regex.test(password)){
        //     setLoginError('Minimum 8 characters, at least one letter, one number and one special character.')
        // }
        login(email, password)
        .then((res) => {
            const user = res.user

            if(user.emailVerified){
                location?.state ? Navigate(location.state) : Navigate('/ ')
                e.target.reset()
            }else{
                swal('Email not Verify', 'Please Verify Your Email', 'error')

            }
        })
        .catch(() =>{
            swal( 'Dont’t Have An Account ?',`Create a New Account `, 'error')
        })
    }

    // Handle reset password and email
    const [resetEmail, setResetEmail]= useState('')

    const handleResetPassword =()=>{
        setLoginError('')
        const emailRegex =  /^[^@]+@[^@]+\.[^@]+$/;
        if(!emailRegex.test(resetEmail)){

            setLoginError('Your Email not vailed!!')
            return
        }

        //  Reset password
         resetPassword(resetEmail)
         .then(()=>{
             swal('Change your password', 'Please Chack Your Email', 'success')
         })
         .catch((errors)=>{
             const error = errors.message
            toast.error(error)
         })
    }


    return (
        <div className="bg-[#F3F3F3]  py-16">


            <div className="w-10/12 md:w-1/2 mx-auto bg-white p-3 py-3 md:px-20 md:py-5">
                <div>

            <h1 className="font-semibold text-4xl text-titleGrey   text-center">Login your account</h1>
            <hr className="text-titleGrey my-8" />
            <form onSubmit={handleLoginForm}>
                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl text-titleGrey   text-center label-text">Email address</span>
                    </label>
                    <input onChange={(e)=>setResetEmail(e.target.value)} type="text" placeholder="Enter your email address" name="email" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />
                    <p className="text-base font-semibold text-error mt-1">{loginError}</p>
                    </div>
                    <div className="form-control">
                    <label className="label">
                    <span className="font-semibold mt-6 text-xl text-titleGrey   text-center label-text">Password</span>

                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />
                    <label className="label">
                        <p href="#" onClick={handleResetPassword} className="label-text-alt link font-semibold  text-[#F75B5F] text-sm link-hover">Forgot password?</p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button    className="bg-[#403F3F] py-2 rounded text-white text-xl font-semibold">Login</button>
                    </div>
            </form>
                    <div className="text-titleGrey mt-7 text-center font-semibold " >
                        <span>Dont’t Have An Account ?</span>
                        <Link to={'/register'} className="ml-1 text-[#F75B5F] link-hover">Register</Link>
                    </div>
                </div>
            </div>


        <Toaster/>
        </div>
    );
};

export default Login;