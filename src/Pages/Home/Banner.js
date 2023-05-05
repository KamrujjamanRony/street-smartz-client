import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import car from '../../assets/images/car.png';
import './Banner.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useSpring } from 'react-spring';

const Banner = () => {
    return (
        <div>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="hero container mx-auto min-h-screen min-w-full bg4" >
            <div className="hero-content min-w-full flex-col lg:flex-row-reverse">
                <img src={car} alt='' className="w-max lg:w-6/12 rounded-lg shadow-2xl mr-2 lg:mr-24" />
                <div className='m-24'>
                    <h1 className="text-7xl font-bold tracking-widest text-secondary">PURCHASE YOUR PERFECT CAR</h1>
                    <p className="text-2xl text-gray-500 py-6 text-justify">
                    Cars are important parts of our lives. Everyone wants to ride in a car, Buying a car is everyone’s dream. Buying a car is seen as an achievement these days. Cars aren’t just your car, for many car-owners, their cars are like their children.
                        </p>
                    <button className="btn btn-outline btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero container mx-auto min-h-screen min-w-full bg2" >
            <div className="hero-content min-w-full flex-col lg:flex-row-reverse">
                <img src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png" alt='' className="w-max lg:w-6/12 rounded-lg shadow-2xl mr-2 mr-2 lg:lg:mr-24" />
                <div className='m-24'>
                    <h1 className="text-7xl font-bold tracking-widest text-accent">START YOUR NEXT PURCHASE</h1>
                    <p className="text-2xl text-gray-500 py-6 text-justify">
                    They give them more attention and take special care of their cars. One of the most significant benefits of traveling by car is flexibility. You can stop wherever you want, take any street, any shortcut that suits your commute hours.
                        </p>
                    <button className="btn btn-outline btn-accent">Buy Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero container mx-auto min-h-screen min-w-full bg1" >
            <div className="hero-content min-w-full flex-col lg:flex-row-reverse">
                <img src='https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png' alt='' className="w-max lg:w-6/12 rounded-lg shadow-2xl mr-2 mr-2 lg:lg:mr-24" />
                <div className='m-24'>
                    <h1 className="text-7xl font-bold tracking-widest text-neutral">PERFECT WAY TO BUY AND SELL</h1>
                    <p className="text-2xl text-gray-500 py-6 text-justify">
                    Another benefit of traveling by car is getting to enjoy fantastic views. While you travel via public transport, you are always overwhelmed by the crowd and the hustle and bustle they bring with them. Owning a car has become very common these days.
                        </p>
                    <button className="btn btn-outline btn-info text-white">Buy Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero container mx-auto min-h-screen min-w-full bg3" >
            <div className="hero-content min-w-full flex-col lg:flex-row-reverse">
                <img src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png" alt='' className="w-max lg:w-6/12 rounded-lg shadow-2xl mr-2 lg:lg:mr-24" />
                <div className='m-24'>
                    <h1 className="text-7xl font-bold tracking-widest text-fifth">FIND YOUR DREAM CAR YOUR WAY</h1>
                    <p className="text-2xl text-gray-500 py-6 text-justify">
                    Some people even have more than one car. But, for some, it is still like a dream. Some dream of buying a simple car and some are willing to own a super car. Which car are you planning to buy? Check out these dream car quotes and be motivated.
                        </p>
                    <button className="btn btn-outline btn-black">Buy Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;