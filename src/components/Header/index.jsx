import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import { Button } from 'antd';

import './style.scss';

export default function Header() {
  const location = useLocation();
  const current = location.pathname;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
    <div className='container_header_mobile'>
        <h1>
          <b>
            <span>NEWS</span>ROOM
          </b>
        </h1>
        <Button className="btn_icon_menu" onClick={() => handleOpenMenu()}>
          <IoMenuOutline />
        </Button>
    </div>
        <h1 className='isNotMobile'>
          <b>
            <span>NEWS</span>ROOM
          </b>
        </h1>
      <ul className={isOpenMenu ? 'show_items_menu' : "isNotMobile"}>
        <div className="item_menu_mobile">
          <li className={current === '/page-home' ? 'current_pathname' : ''}>
            <Link to="page-home">Home</Link>
          </li>
          <li className={current === '/category' ? 'current_pathname' : ''}>
            <Link to="category">Categories</Link>
          </li>
          <li className={current === '/single-news' ? 'current_pathname' : ''}>
            <Link to="single-news">Single News</Link>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              Dropdown
            </a>
            <div class="dropdown-content">
              <Link to="/category">Business</Link>
              <Link to="/category">Technology</Link>
              <Link to="/category">Entertainment</Link>
              <Link to="/category">Sport</Link>
            </div>
          </li>
          <li className='contact'>
            <a href="#contact">Contact</a>
          </li>
          <li className='isMobile'>
            <div class="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="keyword" name="keyword" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </li>
        </div>
        <div class="isNotMobile">
          <form action="/action_page.php">
            <input type="text" placeholder="keyword" name="keyword" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </ul>
     
    </>
  );
}
