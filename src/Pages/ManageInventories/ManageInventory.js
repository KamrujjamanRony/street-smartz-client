import React from "react";

const ManageInventory = ({ inventoryItem, handleInventoryDelete }) => {
  const { _id, name, img, price, brand, mileage, supplier, quantity, details } =
    inventoryItem;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl m-12 lg:flex-row-reverse">
        <div className="card-actions content-top justify-end ">
          <button
            className="btn modal-button btn-circle btn-outline btn-error m-5"
            onClick={() => handleInventoryDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <figure>
          <img src={img} className="w-96 m-2 rounded" alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
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
            <small className="text-muted">{details}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default ManageInventory;
