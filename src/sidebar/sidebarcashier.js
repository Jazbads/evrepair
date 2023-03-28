import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserSidebar.css";
import { Icon } from "@iconify/react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';


export function UserSidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "User"), where("role", "==", "user"))
        );
        const data = querySnapshot.docs.map(doc => doc.data());
        if (data.length > 0) {
          const [{Name, LastName}] = data;
          setUser({Name, LastName});
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!user) return null;

    return (
      <div className="user-sidebar">
        <nav className="main-menu">
          <div className="Header">
            <div className="Profile">
              <img
                src="https://i.postimg.cc/4N9HLCG3/black-user-member-guest-icon-31634946589seopngzc1t.png"
                alt="User avatar"
              />
              <div className="Name">
                <span className="nav-text">{user.Name} {user.LastName}</span>
                <span className="email"></span>
              </div>
            </div>
          </div>
          <ul>
            <li className="items">
              <a href="#">
                <Icon
                  className="item w-[24px] h-[24px]"
                  icon="material-symbols:home-outline"
                />
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li className="items">
              <a href="#">
                <Icon
                  className="item w-[24px] h-[24px]"
                  icon="healthicons:bills-outline"
                />
                <span className="nav-text">Pay status</span>
              </a>
            </li>
            <li className="items">
              <a href="#">
                <Icon
                  className="item w-[24px] h-[24px]"
                  icon="mdi:people-outline"
                />
                <span className="nav-text">Profile</span>
              </a>
            </li>
          </ul>

          <ul className="logout">
            <li className="items">
              <a href="#">
                <Icon className="item w-[24px] h-[24px]" icon="mdi:cog" />
                <span className="nav-text">Settings</span>
              </a>
            </li>
            <li className="items">
              <a href="#">
                <Icon
                  className="item w-[24px] h-[24px]"
                  icon="material-symbols:logout-rounded"
                />
                <span className="nav-text">Sign out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

