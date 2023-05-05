import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 10,
  1.01,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BusinessSummaryCard = ({ img, count, name }) => {
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
    <div ref={ref}>
      <animated.div
        className="card lg:max-w-lg bg-base-100"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt=""
            className="w-28 p-2 border-2 rounded-full border-primary	"
          />
        </figure>
        <div className="card-body items-center text-center pb-10 pt-0">
          <h2 className="card-title text-6xl font-bold">{count}</h2>
          <p>
            <span className="text-primary text-xl">{name}</span>
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default BusinessSummaryCard;
