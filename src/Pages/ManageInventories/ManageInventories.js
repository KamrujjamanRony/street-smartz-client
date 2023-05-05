import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryItems from '../../hooks/useInventoryItems';
import ManageInventory from './ManageInventory';
import { HiArrowNarrowRight } from "react-icons/hi";

const ManageInventories = () => {
    const [inventoryItems, setInventoryItems] = useInventoryItems();
    const handleInventoryDelete = id => {
        const proceed = window.confirm("Are you sure You want to delete this inventory item?")
        if(proceed){
            const url =`https://guarded-sierra-71141.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingItems = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
                    setInventoryItems(remainingItems);
                    toast('Item Deleted!!!');
                }
            });
        }
    }
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase">
            Manage All Inventory Items
      </h1>
            {
                inventoryItems.map(inventoryItem =>
                    <ManageInventory 
                    key={inventoryItem._id}
                    inventoryItem={inventoryItem}
                    handleInventoryDelete={handleInventoryDelete}
                    />
                )
            }
            <div className="flex flex-row-reverse my-5">
                <Link to='/add-inventory'><button className='btn btn-primary'>Add New Item <HiArrowNarrowRight/></button></Link>
            </div>
        </div>
    );
};

export default ManageInventories;