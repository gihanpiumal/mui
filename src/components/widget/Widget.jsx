import React from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import "./Widget.scss";

const Widget = ({ type }) => {
  let data;

  // tempory
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: "orange", backgroundColor: "#555" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{ color: "red", backgroundColor: "#555" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See detils",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{ color: "yellow", backgroundColor: "#555" }}
          />
        ),
      };

      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{ color: "green", backgroundColor: "#555" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="precentage posiive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
