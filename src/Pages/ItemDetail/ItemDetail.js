import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { HiArrowNarrowRight } from "react-icons/hi";
import useInventoryItems from "../../hooks/useInventoryItems";

const ItemDetail = () => {
  const { id } = useParams();
  const [inventoryItems, setInventoryItems] = useInventoryItems();
  const { _id, name, img, details, price, quantity, supplier, brand, mileage } =
    inventoryItems;
  useEffect(() => {
    const url = `https://guarded-sierra-71141.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, [_id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const updateQuantity = (item) => {
    const newQuantity = (parseInt(item.quantity) - 1).toString();
    if (newQuantity < 0) {
        toast('Stock Empty!!!')
    } else {
        const updateItem = {
            "_id": _id,
            "name": name,
            "img": img,
            "details": details,
            "price": price,
            "quantity": newQuantity,
            "supplier": supplier,
            "brand": brand,
            "mileage": mileage
        }
        setInventoryItems(updateItem);
        //send data to the server
        const url = `https://guarded-sierra-71141.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
              toast('item delivered Successfully!!!');
            })
    }
  };

  const onSubmit = (data) => {
    const restock = data.quantity;
    const newQuantity = parseInt(restock) + parseInt(quantity);
    const updateItem = {
      "_id": _id,
      "name": name,
      "img": img,
      "details": details,
      "price": price,
      "quantity": newQuantity,
      "supplier": supplier,
      "brand": brand,
      "mileage": mileage
  }
  setInventoryItems(updateItem);
  //send data to the server
  const url = `https://guarded-sierra-71141.herokuapp.com/inventory/${id}`;
  fetch(url, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updateItem)
  })
      .then(res => res.json())
      .then(data => {
        toast('Item Restock Successfully!!!');
      })
  };
  return (
    <>
      <div className="">
      <h1 className="text-primary text-center my-14 text-5xl font-bold">{name}</h1>
      <div>
        <div className="">
          <div className="hero lg:max-h-lg bg-primary-100 mb-20">
            <div className="hero-content flex-col lg:flex-row">
              <img src={img} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
              <div>
                <p className="py-6 text-justify">{details}</p>
                <p className="font-bold">Supplier: <span className="text-secondary">{supplier}</span> </p>
                <p className="font-bold">Brand: <span className="text-secondary">{brand}</span> </p>
                <p className="font-bold">Mileage: <span className="text-secondary">{mileage}</span> </p>
                <p className="font-bold">Price: <span className="text-secondary">${price}</span> </p>
                <p className="font-bold pb-20">Available Quantity: <span className="text-secondary">{quantity}</span> </p>
                <div className="flex justify-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                      <label className="input-group input-group-md flex">
                        <input
                          type="text"
                          placeholder='Enter Quantity'
                          className="input input-bordered input-md "
                          {...register("quantity", {
                            required: {
                              value: true,
                              message: "Quantity must be required",
                            },
                            pattern: {
                              value: /[0-9]/,
                              message: "Quantity must be number",
                            },
                          })}
                        />
                        <input
                      className="btn btn-primary btn-outline max-w-xs"
                      type="submit"
                      value="Restock"
                    />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-600">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-600">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </label>
                      
                    </div>
                    
                  </form>
                  <div>
                  <button
                    className="btn btn-outline btn-primary rounded-none"
                    onClick={() => updateQuantity(inventoryItems)}
                  >
                    Delivered
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container relative h-12'>
    <Link to='/manage-inventory'><button className='btn btn-primary absolute bottom-0 right-0'>Manage Inventories <HiArrowNarrowRight/></button></Link>
    </div>
    </>
  );
};

export default ItemDetail;
