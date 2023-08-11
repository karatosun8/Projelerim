import React from "react";
import { Data } from "../helpers/data";
import { MenuItem } from "@mui/material";

const Menu = () => {
  console.log(Data);
  return (
    <div className="menu">
      {Data.map((item, key) => {
        return <MenuItem key={key} name={item.name} />;
      })}
    </div>
  );
};

export default Menu;
