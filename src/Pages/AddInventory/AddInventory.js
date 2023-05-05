import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const AddInventory = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);
  
  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const img = data.img;
    const details = data.details;
    const price = data.price;
    const quantity = data.quantity;
    const supplier = data.supplier;
    const brand = data.brand;
    const mileage = data.mileage;
    const addItem = {
      name: name,
      email: user.email,
      img: img,
      details: details,
      price: price,
      quantity: quantity,
      supplier: supplier,
      brand: brand,
      mileage: mileage,
    };
    console.log(addItem);
    // send data to the server
    axios.post('https://guarded-sierra-71141.herokuapp.com/inventory/', addItem)
    .then(response =>{
        const {data}= response;
        if(data.insertedId){
            toast('Your inventory item is added!');
        }
    })
  };
  return (
    <div>
      <h1 className="text-primary text-center my-14 text-5xl font-bold">Add New Inventory</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Inventory Name"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Inventory name required",
              }
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full "
            disabled={true}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Inventory Image Link"
            className="input input-bordered w-full "
            {...register("img", {
              required: {
                value: true,
                message: "Image Link required",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Inventory Price"
            className="input input-bordered w-full "
            {...register("price", {
              required: {
                value: true,
                message: "Price required",
              },
              pattern: {
                value: /[0-9]/,
                message: "Price must be number",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.price.message}
              </span>
            )}
            {errors.price?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 "
            placeholder="Inventory Details"
            {...register("details", {
              required: {
                value: true,
                message: "Inventory details required",
              },
            })}
          ></textarea>
          <label className="label text-red-600">
            {errors.details?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.details.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Inventory Quantity"
            className="input input-bordered w-full "
            {...register("quantity", {
              required: {
                value: true,
                message: "Inventory Quantity required",
              },
              pattern: {
                value: /[0-9]/,
                message: "Quantity must be number",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            placeholder="Supplier Name"
            className="input input-bordered w-full "
            {...register("supplier", {
              required: {
                value: true,
                message: "Supplier name required",
              },
              pattern: {
                value: /[a-zA-Z]/,
                message: "Supplier name must be text",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.supplier?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.supplier.message}
              </span>
            )}
            {errors.supplier?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.supplier.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            className="input input-bordered w-full "
            {...register("brand", {
              required: {
                value: true,
                message: "Brand name required",
              },
              pattern: {
                value: /[a-zA-Z]/,
                message: "Brand name must be text",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.brand?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.brand.message}
              </span>
            )}
            {errors.brand?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.brand.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mileage</span>
          </label>
          <input
            type="text"
            placeholder="Mileage"
            className="input input-bordered w-full "
            {...register("mileage", {
              required: {
                value: true,
                message: "Mileage required",
              },
              pattern: {
                value: /[0-9]/,
                message: "Mileage must be number",
              },
            })}
          />
          <label className="label text-red-600">
            {errors.mileage?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.mileage.message}
              </span>
            )}
            {errors.mileage?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.mileage.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full btn-primary  mt-5"
          type="submit"
          value="Add Inventory"
        />
      </form>
    </div>
  );
};

export default AddInventory;
