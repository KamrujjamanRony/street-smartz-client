import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { AiFillCar } from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  if (loading) {
    return <Loading />;
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/inventory">Inventory</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {
        user && <>
          <li>
            <Link to="/manage-inventory">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/my-inventory">My Inventory</Link>
          </li>
          <li>
            <Link to="/add-inventory">Add Inventory</Link>
          </li>
        </>
      }
    </>
  );
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto">
      <div className="navbar-start text-white">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-2xl font-bold text-white flex justify-center">
          <AiFillCar className="text-4xl" /> <span className="uppercase mt-1">Street Smartz</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-around items-center">
          {user && (
            <div className="avatar">
              <animated.div 
              className="w-8 rounded-full"
              style={{styles}}
              >
                <img src={user?.photoURL} alt="" />
              </animated.div>
            </div>
          )}
          {user && (
            <p className="text-white font-bold mx-2">{user?.displayName} </p>
          )}
        </div>
        {user ? (
          <button onClick={logout} className="btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
