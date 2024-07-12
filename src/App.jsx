import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import RelatedCategories from "./components/RelatedCategories";

const App = () => {
  return(
    <>
    <div className="lg:mx-[60px]">
    <NavBar />
    <div className="flex">
    <SideBar />
    <Products />
    </div>
    <RelatedCategories />
    </div>
    </>
  )
}

export default App;
