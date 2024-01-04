import { Link,  useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({product}) => {
    const navigate = useNavigate()

    const {_id ,productName, productImage, brandName, category, } = product;



 const handleDeleteProduct=()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://technology-shop-server-one.vercel.app/${brandName.toLowerCase()}-${category.toLowerCase()}s/${_id}`, {
            method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                    });
                    navigate(`/`)
                }
            })
        }
      });
    }


    return (
        <>

        <div className="card  bg-base-100 shadow-md">
        <figure ><img src={productImage} alt="Shoes" className='w-fit h-[13rem]' /></figure>
        <div className="card-body ">
            <p className='text-xl font-bold text-gray-800'>name: <span className='text-gray-500 text-lg'>{productName}</span></p>

            <p className='text-xl font-bold text-gray-800'>Band Name: <span className='text-gray-500 text-lg'>{brandName}</span></p>

            <p className='text-xl font-bold text-gray-800'>Category: <span className='text-gray-500 text-lg'>{category}</span></p>



            <div className="card-actions  flex mt-5 ">

            <Link  to={`/updatedProducts/${_id}`} className='btn btn-primary  flex-1 text-lg'>
            <button type='button'>Update</button>
            </Link>
            <Link onClick={handleDeleteProduct} to={''} className='btn btn-primary  flex-1 text-lg'>
            <button type='button'>Delete</button>
            </Link>
            <Link to={`/productDetails/${_id}`} className="btn btn-primary  flex-1 text-lg">
            <button type='button'>Details</button>
            </Link>

            </div>
        </div>
        </div>



        </>
    );
};

export default Product;