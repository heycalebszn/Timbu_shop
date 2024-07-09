import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Products from "./components/Products";

const App = () => {
  return(
    <>
    <div className="mx-[30px]">
    <NavBar />
    <div className="flex">
    <SideBar />
    <Products />
    </div>
    </div>
    </>
  )
}

export default App;
