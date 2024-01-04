import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/image/logo.png'
import useAuth from "../../Hooks/useAuth";


// name with logo, Home, Add Product, My Cart, and Login


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {user, logOut} = useAuth();

    const handleLogOut =()=>{
        logOut()
        .then(()=> console.log('log out successfuly'))
        .catch(error => console.error(error))
    }


    return (
        <>
        <nav className="bg-[#021444]  sticky w-full border-b border-[#021444] z-20 top-0 start-0 text-xl py-3 text-white">

        <div className=" flex flex-wrap items-center justify-between  max-w-6xl  mx-auto px-3  xl:px-0 z-50  py-2">

            {/* Menu bar */}
            <button className="lg:hidden" type="button" onClick={()=> setOpenMenu(!openMenu)}>
                        <div className="text-4xl">
                        {
                            openMenu ? <BiMenuAltLeft/> : <IoMenu/>
                        }
                        </div>
            </button>


            {/* Logo */}
            <Link to={'/'} className="rtl:space-x-reverse">
                <img src={Logo} alt="" className="h-[3rem] hover:bg-gray-300 duration-500 rounded bg-gray-200 p-[1px]" />
            </Link>


        {/* Account btn*/}

        {
            user ?
            <div className="flex lg:order-2  rtl:space-x-reverse items-center gap-2">
                <h3 className="hidden sm:block">{user?.displayName}</h3>
                 <Link to={'/'} >

                    <img src={user?.photoURL} alt="Ninish" className=" h-[3rem] rounded-full border border-[#ff00c8]
                 " />
                </Link>
                 <button onClick={handleLogOut} className=" cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white hover:text-[#ff00c8]">
                    Log Out
                    </button>
            </div>

            :
            <div className="flex lg:order-2  rtl:space-x-reverse">
                    <Link to={'/login'} className=" cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white hover:text-[#ff00c8]">
                    Login
                    </Link>
        </div>
        }



        {/* Nav link */}
        <div className={`items-center justify-between  w-full lg:flex h-[100vh]  lg:h-fit  lg:w-auto lg:order-1 ${openMenu? 'block' : 'hidden'} `}
        onClick={()=> setOpenMenu(!openMenu)}
        >

            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium  border-t lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 duration-500">

            <li >
                <NavLink className={'hover:text-[#6200ff] '} to={'/'}>Home</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            <li >
                <NavLink className={'hover:text-[#6200ff] '} to={'/addProducts'}>Add Products</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            {
            <li>
                <NavLink className={'hover:text-[#6200ff] text-or'}  to={'/myCart'}> My Cart</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            }

            <li >
                <NavLink className={'hover:text-[#6200ff] '} to={'/register'}>Register</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>



            </ul>
        </div>
        </div>
        </nav>
        </>
    );
};

export default Navbar;