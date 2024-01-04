import Title from "../../Components/Title/Title";
import Product from "./Product";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import bannerImage from '../../assets/image/banner/productBanner.jpg'
import bannerImage2 from '../../assets/image/banner/productBanner2.jpg'
import bannerImage3 from '../../assets/image/banner/banner.jpg'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Products = () => {
    const productsLoading = useLoaderData();
    const [products, setProducts] = useState(productsLoading)

    return (
        <>
        <div>

        <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >


          <SwiperSlide>
            <div className="h-[86vh] w-full">
                <img src={bannerImage2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-ful w-full">
                <img src={bannerImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[86vh] w-full">
                <img src={bannerImage3} alt="" />
            </div>
          </SwiperSlide>



        </Swiper>


        </div>
        <div className="max-w-6xl mx-auto px-3 xl:px-0 py-16" >

           <Title
            title={'Our Products'}
            subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptates nam tempora velit reprehenderit voluptate! Itaque cum iste libero ab?'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16  gap-6 px-8">
                {
                    products?.map((product, idx) => <Product key={idx} product={product} setProducts={setProducts} productsLoading={productsLoading} />)
                }
            </div>

        </div>

        </>
    );
};

export default Products;