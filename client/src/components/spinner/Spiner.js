import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Spiner({ path = "login" }) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location= useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
     
    count === 0 &&
    navigate(`/${path}`, {
      state: location.pathname,
    });
    return () => clearInterval(interval)
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spiner;
