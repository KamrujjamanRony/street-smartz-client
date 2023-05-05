import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 85,
  (x - rect.left - rect.width / 2) / 95,
  1.01,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Inventory = ({ inventoryItem }) => {
  const { _id, name, img, price, brand, mileage, supplier, quantity, details } =
    inventoryItem;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`inventory-item/${id}`);
  };
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
        className="card bg-base-100 shadow-xl"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <figure className="px-10 pt-10">
          <img src={img} alt="car" className="rounded-xl" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center gap-1">
              <span>
                Brand:
                <img src="" alt="" />
              </span>
              <span className="text-gray-500">{brand}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span>
                Mileage:
                <img src="" alt="" />
              </span>
              <span className="text-gray-500">{mileage}</span>
            </div>
          </div>
          <div className="divider my-0"></div>
          <p className="text-xl">
            Price: <span className="text-red-500">BDT {price}</span>
          </p>
          <p>Supplier: {supplier}</p>
          <p>Quantity: {quantity}</p>
          <p>
            <small className="text-muted">{details}...</small>
          </p>
          <div className="card-actions">
            <button
              onClick={() => navigateToServiceDetail(_id)}
              className="btn btn-outline btn-primary btn-wide mt-5 rounded-3xl"
            >
              Update
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Inventory;
