import React from 'react';
import { useSpring, animated } from 'react-spring'

const Brands = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  })
    return (
        <div className="bg-gray-100 p-12 mb-20">
      <h2 className="text-3xl text-center font-bold m-12">
        We collaborate with{" "}
        <span className="text-primary">
          World's latest and leading Brands
        </span>
      </h2>
      <div className="container mx-auto tabs tabs-boxed justify-center bg-white mb-12">
        <animated.div
        style={{styles}}
        ><img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/94/abarth.png" alt="" /></animated.div>
        <animated.img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/60/buy-cars-suzuki.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/72/fiat.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/75/buy-cars-nissan.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/106/buy-cars-scania.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/80/buy-cars-mazda.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/2/alfa-romeo.png" alt="" />
        <img  className="tab m-5 w-24 h-20" src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/304/faw.png" alt="" />
      </div>
    </div>
    );
};

export default Brands;