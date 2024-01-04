import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AddItems = () => {
    return (
        <div>
            <div className="pt-24  border-b-2 border-blue-200 w-fit mx-auto  ">
        <Title
            title={'Chose Your Items & Add'}
        />
        </div>
<div className="h-[63vh] flex gap-6 justify-center items-center flex-col lg:flex-row">

            <Link to={'/addBrand'}>
            <div className="px-7 py-3 rounded-lg bg-white hover:bg-blue-100 duration-200 font-bold text-xl text-gray-700 border border-blue-400">Brand Add Please Click</div>
            </Link>

            <Link to={'/addProducts'}>
            <div className="px-7 py-3 rounded-lg bg-white hover:bg-blue-100 duration-200 font-bold text-xl text-gray-700 border border-blue-400">Product Add Please Click</div>
            </Link>


        </div>

        </div>
    );
};

export default AddItems;