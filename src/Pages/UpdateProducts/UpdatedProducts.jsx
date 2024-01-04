import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";



const UpdatedProducts  = () => {
    const navigate = useNavigate()
    const product = useLoaderData()
    const {_id ,productName, productImage, brandName, category, Price, details} = product;
    console.log(_id);

    const handleAddProduct =e=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const Price = form.Price.value;
        const details = form.details.value;

        const productInfo ={productName, productImage, brandName, category, Price, details,}
        fetch(`https://technology-shop-server-one.vercel.app/oppo-phones/${_id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(() =>{
            Swal.fire({
                title: "Congratulation!",
                text: "Your Product Add Successfully!!",
                icon: "success"
            });
            navigate('/')
        });


    }
    return (
        <>

        <div className="py-10 max-w-4xl mx-auto px-5 xl:px-0">
        <div className="mb-8  border-b-2 border-blue-200 w-fit mx-auto ">
        <Title
            title={'Product Updated'}
        />
        </div>

        <form onSubmit={handleAddProduct} className="bg-base-100 rounded-md p-6 xl:p-16">

         {/* productName */}
        <div className="pb-10 ">
        <label htmlFor="productName" className="text-lg text-gray-700 font-semibold">Name:</label>
        <input id="productName" defaultValue={productName} name="productName" required placeholder="Your Product Name..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>




        {/* productImage */}
        <div className="pb-10 ">
        <label htmlFor="productImage" className="text-lg text-gray-700 font-semibold">Image:</label>
        <input id="productImage" defaultValue={productImage} name="productImage" required placeholder="Your Product Image..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>


        {/* brandName */}
        <div className="pb-10 ">
        <label htmlFor="brandName" className="text-lg text-gray-700 font-semibold">Brand Name:</label>
        <input id="brandName" defaultValue={brandName} name="brandName" required placeholder="Your Brand Name..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>

        {/* category */}
        <div className="pb-10 ">
        <label htmlFor="category" className="text-lg text-gray-700 font-semibold">Category:</label>
        <input id="category" defaultValue={category} name="category" required placeholder="Your Product Category..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>



        {/* Price */}
        <div className="pb-10 ">
        <label htmlFor="Price" className="text-lg text-gray-700 font-semibold">Price:</label>
        <input id="Price" name="Price" defaultValue={Price} required placeholder="Your Product Price" type="number" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>



        {/* details */}
        <div className="pb-10 ">
        <label htmlFor="details" className="text-lg text-gray-700 font-semibold">Details:</label>
        <textarea id="details" name="details" defaultValue={details} required placeholder="Your Product Details"  className="rounded  mt-3 w-full p-3 bg-purple-100  input input-bordered text-lg font-medium text-gray-800" ></textarea>
        </div>

        <button className="btn btn-primary w-full text-xl">Update Product</button>


        </form>
        </div>
        </>
    );
};


export default UpdatedProducts;