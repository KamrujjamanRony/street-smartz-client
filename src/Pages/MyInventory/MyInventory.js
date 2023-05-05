import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyInventoryCard from "./MyInventoryCard";
import { toast } from "react-toastify";

const MyInventory = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    if (user) {
      fetch("https://guarded-sierra-71141.herokuapp.com/inventory/")
        .then((res) => res.json())
        .then((data) => {
          const remainingItems = data.filter(
            (item) => item.email === user.email
          );
          setMyItems(remainingItems);
        });
    }
  }, [user]);
  const handleInventoryDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure You want to delete this inventory item?"
    );
    if (proceed) {
      const url = `https://guarded-sierra-71141.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingItems = myItems.filter(
              (myItem) => myItem._id !== id
            );
            setMyItems(remainingItems);
            toast("Item Deleted!!!");
          }
        });
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase">
        My Inventory Items
      </h1>
      {myItems.map((myItem) => (
        <MyInventoryCard
          key={myItem._id}
          myItem={myItem}
          handleInventoryDelete={handleInventoryDelete}
        />
      ))}
    </div>
  );
};

export default MyInventory;
