import { Link } from 'react-router-dom';
import logo from '../../assets/image/banner/logo.png'
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>

<footer className="border-t py-4 bg-[#021444] text-white">
    <div className="max-w-[1200px] mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-start">
            <div className="companySlogan w-full justify-self-center md:justify-self-start py-3 md:py-0">
                <div className="logo mx-auto md:mx-0">

                    <Link to={'/'} className="rtl:space-x-reverse">
                <img src={logo} alt="" className="h-[3rem] hover:bg-gray-300 duration-500 rounded bg-gray-200 p-[1px]" />
            </Link>
                </div>
                <div className="slogan pt-4">
                    A Co-curricular Edu-Tech Platform
                </div>
            </div>

            <div className="footerNavLinks w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">Important Link</h5>
                <ul className="text-center md:text-start grid gap-2 mt-2">
                    <li><Link to={'Add Products'} className="hover:text-[#6d28d9]">Home</Link></li>
                    <li><Link to={'/My Cart'}  className="hover:text-[#6d28d9]">My Card</Link></li>
                    <li>
                        <Link to={'/login'}  className="hover:text-[#6d28d9] w-fit border-b hover:border-[#6d28d9]">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="footerContact w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">Our Contact Us</h5>
                <div className="text-center md:text-start mt-2">
                    <div>
                        <p>Call Me: <a href="tel:01644042241" className="text-[#6d28d9]">016440429897</a>,
                            <a href="tel:01722842564" className="text-[#6d28d9]">017228972564</a>
                        </p>

                        <p>Email: <a href="mailto:info@ninish.com" className="text-[#6d28d9]">info@ninish.com</a></p>
                    </div>

                    <div className=" w-fit mx-auto md:mx-0 border-t md:border-0 pt-2 mt-4 md:mt-0 text-4xl hover:text-[#6d28d9]">
                        <Link href="https://www.messenger.com/t/100033293404646" >

                            <IoLogoFacebook/>

                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <p className="text-center md:pt-8">Copy rigth By 2023</p>
    </div>
</footer>

        </div>
    );
};

export default Footer;