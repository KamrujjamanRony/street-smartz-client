import React from "react";
import { Link } from "react-router-dom";
import useInventoryItems from "../../hooks/useInventoryItems";
import Inventory from "./Inventory";
import { HiArrowNarrowRight } from "react-icons/hi";

const Inventories = () => {
  const [inventoryItems] = useInventoryItems();
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase">
        Inventory Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 ">
        {inventoryItems.map((inventoryItem) => (
          <Inventory
            key={inventoryItem._id}
            inventoryItem={inventoryItem}
          ></Inventory>
        ))}
      </div>
      <div className='relative h-32'>
                <Link to='/manage-inventory'><button className='btn btn-primary absolute bottom-0 right-0'>Manage Inventories <HiArrowNarrowRight/></button></Link>
                </div>
    </div>
  );
};

export default Inventories;
