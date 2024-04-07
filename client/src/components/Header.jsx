import React from "react";
// import { FaSearch } from "react-icons/fa";
 import { FaBars } from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/cart";
import SearchInput from "./form/SearchInput";
import useCategory from "../hooks/useCategory";
import { Badge } from "antd";
//import "../styles/Header.css";

 function Header() {
  const categories=useCategory();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  function handleLogout() {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    //toast.success("Logout Successfully");
  }

   

  return (
    <>
      <header>
        <Link to="/" className="logo">
           🛒 My Shop
        </Link>
  <SearchInput/>   
         
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">
          <FaBars></FaBars>
        </label> 

        <nav className="navbar">
          <ul>
         
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            
            <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


               {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

            <li>
            <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">
                    Cart
                  </NavLink>
                </Badge>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );

   }

export default Header;
