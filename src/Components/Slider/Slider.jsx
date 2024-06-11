import React, { useRef, useState ,useEffect, useContext } from 'react';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination , Autoplay } from 'swiper/modules';
import Box from './Box';
import { myContext } from '../Home/Home';


const Slider = () => {

  const {sliders} = useContext(myContext)

    // const [sliders , setSliders] = useState(null)

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('https://filimo.alikehtari.ir/api/v1/slider/');
    //         setSliders(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchData()
    
    //   }, [])

    return (
        <div className='relative overflow-hidden bg-black'>
            <div className="bg-cover  bg-center h-[400px] sm:h-[700px] md:h-[700px] relative overflow-hidden">                
                <Swiper 
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                loop={true}

                modules={[EffectFade, Navigation, Pagination ,Autoplay]}

            >
                {sliders && (
                <Swiper /* Swiper props here */>
                    {sliders.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <img src={slider.image} alt="Slide 1" />
                    </SwiperSlide>
                    ))}
                </Swiper>
                )}

            </Swiper>


            </div>
            <Box />
        </div>

        
    );
}
 
export default Slider;
