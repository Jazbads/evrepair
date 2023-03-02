import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCog, faHouse, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

function Sidebarsuccess() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className='sidebar'>
      <Sidebar>
        <div className='Header'>
          <div className='Profile-img'>
            <img src='https://i.postimg.cc/4N9HLCG3/black-user-member-guest-icon-31634946589seopngzc1t.png'>
            </img>
            <span className='Profile-Name'>
              Guest
            </span>
          </div>
        </div>

        <div className='sidebar-content'>
          <Menu className='lists'>
              <li className='menu-items'>
                <MenuItem>
                  <a href='#' className ='nav-link'>
                    <FontAwesomeIcon className='icon' icon={faHouse}></FontAwesomeIcon>
                    <span className='link'>Home</span>
                  </a>
                </MenuItem>
              </li>

              <li className='menu-items'>
                <MenuItem>
                  <a href='#' className ='nav-link'>
                    <FontAwesomeIcon className='icon' icon={faClipboardList}></FontAwesomeIcon>
                    <span className='link'>Payment status</span>
                  </a>
                </MenuItem>
              </li>

              <li className='menu-items'>
                <MenuItem>
                  <a href='#' className ='nav-link'>
                    <FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon>
                    <span className='link'>Profile</span>
                  </a>
                </MenuItem>
              </li>
          </Menu>
        </div>

          <Menu className=''>
              <div className='bottom-content'>
                <li className='menu-items'>
                    <MenuItem>
                      <a href='#' className ='nav-link'>
                        <FontAwesomeIcon className='icon' icon={faCog}></FontAwesomeIcon>
                        <span className='link'>Settings</span>
                      </a>
                    </MenuItem>
                  </li>
                <li className='menu-items'>
                    <MenuItem>
                      <a href='#' className ='nav-link'>
                        <FontAwesomeIcon className='icon' icon={faRightFromBracket}></FontAwesomeIcon>
                        <span className='link'>Logout</span>
                      </a>
                  </MenuItem>
                </li>
              </div>
          </Menu>
      </Sidebar>
    </div>
  );
}
export default Sidebarsuccess