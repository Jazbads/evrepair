import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import { Icon } from "@iconify/react";

function Sidebarboss() {
  return (
    <div class="sidebar">
      <nav class="main-menu">
        <div className="Header">
          <div className="Profile">
            <img src="https://i.postimg.cc/4N9HLCG3/black-user-member-guest-icon-31634946589seopngzc1t.png"></img>
            <div className="Name">
              <span className="nav-text">Guest</span>
              <span className="email">example@example.com</span>
            </div>
          </div>
        </div>
        <ul>
          <li className="items">
            <a href="#">
              <Icon className="item w-[24px] h-[24px]" icon="material-symbols:home-outline" />
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li className="items">
            <a href="#">
              <Icon className="item w-[24px] h-[24px]" icon="healthicons:bills-outline" />
              <span class="nav-text">Pay status</span>
            </a>
          </li>
          <li className="items">
            <a href="#">
              <Icon className="item w-[24px] h-[24px]" icon="mdi:people-outline" />
              <span class="nav-text">Profile</span>
            </a>
          </li>
        </ul>

        <ul class="logout">
        <li className="items">
            <a href="#">
              <Icon className="item w-[24px] h-[24px]" icon="mdi:cog" />
              <span class="nav-text">Settings</span>
            </a>
          </li>
          <li className="items">
            <a href="#">
              <Icon className="item w-[24px] h-[24px]" icon="material-symbols:logout-rounded" />
              <span class="nav-text">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Sidebarboss;
