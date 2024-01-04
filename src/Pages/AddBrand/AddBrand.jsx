import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";


const AddBrand = () => {

    const handleAddBrand =e=>{
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const brandImage = form.brandImage.value;
        const brandInfo = {brandName ,brandImage }



        fetch('https://technology-shop-server-one.vercel.app/brands',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(brandInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: "Congratulation!",
                    text: "Your Brand Add Successfully!!",
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
            title={'Brand Add'}
        />
        </div>

        <form onSubmit={handleAddBrand} className="bg-base-100 rounded-md p-6 xl:p-16">


        {/* brandName */}
        <div className="pb-10 ">
        <label htmlFor="brandName" className="text-lg text-gray-700 font-semibold">Brand Name:</label>
        <input id="brandName" name="brandName" required placeholder="Your Brand Name..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>


        {/* brandImage */}
        <div className="pb-10 ">
        <label htmlFor="brandImage" className="text-lg text-gray-700 font-semibold">Brand Image:</label>
        <input id="brandImage" name="brandImage" required placeholder="Your Product Image..." type="text" className="rounded  mt-3 w-full p-3 bg-purple-100 input input-bordered text-lg font-medium text-gray-800" />
        </div>


        <button className="btn btn-primary w-full text-xl">Add Product</button>

        </form>
        </div>
        </>
    );
};

export default AddBrand;