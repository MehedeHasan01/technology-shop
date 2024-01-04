import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";

const AddProducts = () => {

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



        fetch(`https://technology-shop-server-one.vercel.app/oppo-phones`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: "Congratulation!",
                    text: "Your Product Add Successfully!!",
                    icon: "success"
                });
                form.reset()

            }
        });


    }
    return (
        <>

        <div className="py-10 max-w-4xl mx-auto px-5 xl:px-0">
        <div className="mb-8  border-b-2 border-blue-200 w-fit mx-auto ">
        <Title
            title={'Product Add'}
        />
        </div>

        <form onSubmit={handleAddProduct} className="bg-base-100 rounded-md p-6 xl:p-16">

         {/* productName */}
        <div className="pb-10 ">
        <label htmlFor="productName" className="text-lg text-gray-700 font-semibold">Name:</label>
        <input id="productName" name="productName" required placeholder="Your Product Name..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>




        {/* productImage */}
        <div className="pb-10 ">
        <label htmlFor="productImage" className="text-lg text-gray-700 font-semibold">Image:</label>
        <input id="productImage" name="productImage" required placeholder="Your Product Image..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>


        {/* brandName */}
        <div className="pb-10 ">
        <label htmlFor="brandName" className="text-lg text-gray-700 font-semibold">Brand Name:</label>
        <input id="brandName" name="brandName" required placeholder="Your Brand Name..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>

        {/* category */}
        <div className="pb-10 ">
        <label htmlFor="category" className="text-lg text-gray-700 font-semibold">Category:</label>
        <input id="category" name="category" required placeholder="Your Product Category..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />

        </div>



        {/* Price */}
        <div className="pb-10 ">
        <label htmlFor="Price" className="text-lg text-gray-700 font-semibold">Price:</label>
        <input id="Price" name="Price" required placeholder="Your Product Price" type="number" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>



        {/* details */}
        <div className="pb-10 ">
        <label htmlFor="details" className="text-lg text-gray-700 font-semibold">Details:</label>
        <textarea id="details" name="details" required placeholder="Your Product Details"  className="rounded  mt-3 w-full p-3 bg-purple-100  input input-bordered text-lg font-medium text-gray-800" ></textarea>
        </div>

        <button className="btn btn-primary w-full text-xl">Add Product</button>


        </form>
        </div>
        </>
    );
};

export default AddProducts;