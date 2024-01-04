import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {productName, productImage, brandName, category, Price, details} = productDetails;
    const handleMyCart =()=>{
            fetch(`https://technology-shop-server-one.vercel.app/myCarts`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetails)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            Swal.fire({
                title: "Congratulation!",
                text: "Your Product Add Successfully!!",
                icon: "success"
            });

        }
    });

    }
    return (
        <div className="py-16 max-w-xl px-8 xl:px-0 mx-auto">
        <div className="mb-8  border-b-2 border-blue-200 w-fit mx-auto ">
        <Title
            title={'Our Product Details'}
        />
        </div >


        <div className="bg-base-100 rounded-xl">

        <div className="relative">

         <img src={productImage} alt="Shoes" className='w-full h-[65vh] bg-transparent rounded-t-lg' />
         <div className=" pl-5 bg-[#0B0B0B80] py-5  absolute w-full bottom-0">
            <button onClick={handleMyCart} className="btn btn-primary text-xl">Add to Cart</button>
        </div>
        </div>

        <div className="p-5 space-y-2">
            <p className='text-xl font-bold text-gray-800'>name: <span className='text-gray-500 text-lg'>{productName}</span></p>

            <p className='text-xl font-bold text-gray-800'>Price: <span className='text-gray-500 text-lg'>{Price} $</span></p>

            <p className='text-xl font-bold text-gray-800'>Band Name: <span className='text-gray-500 text-lg'>{brandName}</span></p>

            <p className='text-xl font-bold text-gray-800'>Category: <span className='text-gray-500 text-lg'>{category}</span></p>

            <p className='text-xl font-bold text-gray-800'>Rating: <span className='text-orange-500 text-lg'>4.5</span></p>

            <p className='text-xl font-bold text-gray-800'>Details: <span className='text-gray-500 text-base'>{details}</span></p>

        </div>
        </div>



        </div>
    );
};

export default ProductDetails;