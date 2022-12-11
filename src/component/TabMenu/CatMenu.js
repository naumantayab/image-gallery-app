import React from "react";

const CatMenu = ({ filterMenu, catItems }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {catItems.map((curElem, index) => {
            return (
              <button
                className="btn btn-warning"
                key={index}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CatMenu;
