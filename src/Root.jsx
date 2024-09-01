import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

export const Root = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h4>Hello World</h4>
      </header>
      <div className="root">
        <Outlet />
      </div>
      <footer>
        Footer
        <button onClick={() => navigate("/")}>to root</button>
        <button onClick={() => navigate("/videos")}>to video</button>
      </footer>
    </>
  );
};
