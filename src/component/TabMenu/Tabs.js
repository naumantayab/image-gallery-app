import React, { useState } from "react";
import Menu from "./menu";
import "../TabMenu/tab.css";
import MenuItems from "./MenuItems";
import CatMenu from './CatMenu';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category )), "all"]

const Tabs = () => {
  const [items, setItems] = useState(Menu);

    const [catItems, setCatItems] = useState(allCatValues);

  const filterMenu = (category) => {

      if (category === "all") {
          setItems(Menu);
          return;
      }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <CatMenu filterMenu={filterMenu} catItems={catItems}/>

      {/* Our Menu Items List will come here  */}
      <MenuItems items={items} />
    </>
  );
};

export default Tabs;
