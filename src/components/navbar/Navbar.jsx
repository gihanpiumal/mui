import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type={"text"} placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-male-paramedic-avatar-character-icon-vector-illustration-design.jpg?ver=6"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
