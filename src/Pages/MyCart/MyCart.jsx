import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const MyCart = () => {
    const myCart = useLoaderData();
    return (
        <div className="py-10 max-w-6xl mx-auto">
            <div className="mb-4">
                <Title title={'My Cart'} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
            {
                myCart?.map(cart => <div key={cart._id}>

           <div className="border bg-white  rounded-xl ">
            <div className="p-5">
            <img
             src={cart.productImage}
              alt="Image Not Found" className="h-[6rem] w-fit mx-auto rounded" />
            <h1 className="text-center text-lg font-medium text-gray-700 mt-3">Brand Name: <span className="text-2xl font-bold ml-1 uppercase">{cart.productName}</span></h1>
            </div>
            <button className="btn btn-primary w-full text-xl">Buy Now</button>
            </div>


                </div>)
            }
            </div>

        </div>
    );
};

export default MyCart;