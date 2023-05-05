import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Inventories from './Pages/Inventories/Inventories';
import Footer from './Pages/Shared/Footer';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/LogIn/SignUp';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import RequireAuth from './Pages/LogIn/RequireAuth';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import MyInventory from './Pages/MyInventory/MyInventory';
import Blog from './Pages/Home/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/inventory" element={<Inventories></Inventories>} />
        <Route path='/inventory-item/:id' element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        }></Route>
        <Route path='/inventory/inventory-item/:id' element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/add-inventory' element={
          <RequireAuth>
            <AddInventory />
          </RequireAuth>
        }></Route>
        <Route path='/my-inventory' element={
          <RequireAuth>
            <MyInventory />
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blog></Blog>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
