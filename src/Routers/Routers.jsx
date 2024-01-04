import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AddProducts from "../Pages/AddProducts/AddProducts";
import PrivetRouter from "./PrivetRouter";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import UpdatedProducts from "../Pages/UpdateProducts/UpdatedProducts";



const Routers = createBrowserRouter([
    {
        path:'/',
        element: <Roots/>,
        errorElement: <ErrorMessage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'addProducts',
                element:<PrivetRouter><AddProducts/></PrivetRouter>
            },
            {
                path:'/myCart',
                element:<PrivetRouter> <MyCart/> </PrivetRouter>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/myCarts')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/oppo',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/oppo-phones')
            },
            {
                path:'/nokia',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/nokia-phones')
            },
            {
                path:'/samsung',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/samsung-computers')
            },
            {
                path:'/huawei',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/huawei-phones')
            },
            {
                path:'/google',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/google-Phones')
            },
            {
                path:'/xiaomi',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/xiaomi-headphones')
            },
            {
                path:'/apple',
                element:<Products/>,
                loader: ()=> fetch('https://technology-shop-server-one.vercel.app/apple-watchs')
            },
            {
                path:'/productDetails/:id',
                element: <PrivetRouter><ProductDetails/></PrivetRouter>,
                loader: ({params}) => fetch(`https://technology-shop-server-one.vercel.app/oppo-phones/${params.id}`)
            },
            {
                path:'/updatedProducts/:id',
                element: <PrivetRouter><UpdatedProducts/></PrivetRouter>,
                loader: ({params}) => fetch(`https://technology-shop-server-one.vercel.app/oppo-phones/${params.id}`)
            },





        ]
    }
])
export default Routers;