import { Link } from "react-router-dom";
import Title from "../Title/Title";

const Brands = () => {
    return (
        <>







<div className="py-20">
        <div className="max-w-6xl mx-auto px-3 xl:px-0 ">

            <Title
            title={'Our Products Brand'}
            subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptates nam tempora velit reprehenderit voluptate! Itaque cum iste libero ab?'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16  gap-6">

            <Link to={'/oppo'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/gWMptTC/Brand-Oppo.png'
              alt="Brand Oppo" className="h-[6rem] w-[70%] mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Oppo</span></h1>
            </div>
            </Link>


            <Link to={'/nokia'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/NKcGtsK/Brand-Nokia.jpg'
              alt="Image Not Found" className="h-[6rem] w-[70%] mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Nokia</span></h1>
            </div>
            </Link>


            <Link to={'/samsung'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/zGV4BHm/Brand-Samsung.jpg'
              alt="Image Not Found" className="h-[6rem] w-[70%] mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Samsung</span></h1>
            </div>
            </Link>


            <Link to={'/apple'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/98kNSny/brand-Apple.png'
              alt="Image Not Found" className="h-[6rem]  mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Apple</span></h1>
            </div>
            </Link>


            <Link to={'/huawei'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/2h3LvbR/brand-Huawei.jpg'
              alt="Image Not Found" className="h-[6rem] w-[70%] mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Huawei</span></h1>
            </div>
            </Link>


            <Link to={'/google'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/0mKwLn9/brand-Google.jpg'
              alt="Image Not Found" className="h-[6rem]  mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Google</span></h1>
            </div>
            </Link>


            <Link to={'/xiaomi'}>
           <div className="border bg-white p-5 rounded-xl">
            <img
             src='https://i.ibb.co/QmbdrDc/brand-Xiaomi.png'
              alt="Image Not Found" className="h-[6rem] w-[70%] mx-auto rounded" />
            <h1 className="text-center text-xl font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">Xiaomi</span></h1>
            </div>
            </Link>


            </div>
        </div>

        </div>

        </>
    );
};

export default Brands;