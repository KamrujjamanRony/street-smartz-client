import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.01,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PolicyCard = ({ img, cardTitle, cardDetail }) => {
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
        className="card lg:card-side bg-base-100 shadow-xl"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDetail}</p>
        </div>
      </animated.div>
    </div>
  );
};

export default PolicyCard;
