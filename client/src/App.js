import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import Orders from "./user/Orders";
import Profile from "./user/Profile";
import Admindashboard from "./pages/admin/Admindashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminOrders from "./pages/admin/AdminOrders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:slug" element={<ProductDetails />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/category/:slug" element={<CategoryProduct />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Admindashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/allproducts" element={<AllProduct />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
     </>


  //   <>
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/product/:slug" element={<ProductDetails />} />
  //     <Route path="/categories" element={<Categories />} />
  //     <Route path="/cart" element={<CartPage />} />
  //     <Route path="/category/:slug" element={<CategoryProduct />} />
  //     <Route path="/search" element={<Search />} />
  //     <Route path="/dashboard" element={<PrivateRoute />}>
  //       <Route path="user" element={<Dashboard />} />
  //       <Route path="user/orders" element={<Orders />} />
  //       <Route path="user/profile" element={<Profile />} />
  //     </Route>
  //     <Route path="/dashboard" element={<AdminRoute />}>
  //       <Route path="admin" element={<Admindashboard />} />
  //       <Route path="admin/create-category" element={<CreateCategory />} />
  //       <Route path="admin/create-product" element={<CreateProduct />} />
  //       <Route path="admin/product/:slug" element={<UpdateProduct />} />
  //       <Route path="admin/products" element={<Products />} />
  //       <Route path="admin/users" element={<Users />} />
  //       <Route path="admin/orders" element={<AdminOrders />} />
  //     </Route>
  //     <Route path="/register" element={<Register />} />
  //     <Route path="/forgot-password" element={<ForgotPasssword />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/policy" element={<Policy />} />
  //     <Route path="*" element={<Pagenotfound />} />
  //   </Routes>
  // </>


  );
}

export default App;
