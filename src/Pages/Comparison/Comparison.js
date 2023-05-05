import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 350,
  (x - rect.left - rect.width / 2) / 120,
  1.01,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Comparison = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t,
  });
  const props = useSpring({ xys, config });
  return (
    <div className="mt-20 container mx-auto px-5">
      <p className="text-5xl uppercase font-bold tracking-widest text-primary text-center m-5">
        Popular Car Comparison
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-12">
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/2.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2016 Ford Escape cape</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/1.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2017 Chevrolet Camaro</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-500"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/3.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2017 Chevrolet Corvette</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/4.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2017 Honda Accord Sedan</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/5.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mercedes-Benz C-Class</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/6.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2017 Honda CR-V</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/7.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2016 Ford Mustang</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </animated.div>
        </div>
        <div ref={ref}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect));
            }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://templates.scriptsbundle.com/carspot/demos/images/compare/8.png"
                alt="car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2017 Toyota RAV4</h2>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
