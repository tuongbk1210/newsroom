/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { setCategory } from '../../features/Category/categorySlice';
import './style.scss';

export default function Header() {
  const location = useLocation();
  const current = location.pathname;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div className="container_header_mobile">
        <h1>
          <b>
            <span>NEWS</span>ROOM
          </b>
        </h1>
        <Button className="btn_icon_menu" onClick={() => handleOpenMenu()}>
          <IoMenuOutline />
        </Button>
      </div>
      <h1 className="isNotMobile">
        <b>
          <span>NEWS</span>ROOM
        </b>
      </h1>
      <ul className={isOpenMenu ? 'show_items_menu' : 'isNotMobile'}>
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
          <li className="dropdown">
              <button className="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
            <div className="dropdown-content">
              <Link to="/category" onClick={() => dispatch(setCategory('Business'))}>
                Business
              </Link>
              <Link to="/category" onClick={() => dispatch(setCategory('Technology'))}>
                Technology
              </Link>
              <Link to="/category" onClick={() => dispatch(setCategory('Entertainment'))}>
                Entertainment
              </Link>
              <Link to="/category" onClick={() => dispatch(setCategory('Sport'))}>
                Sport
              </Link>
            </div>
          </li>
          <li className="contact">
            <a href="#contact">Contact</a>
          </li>
          <li className="isMobile">
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="keyword" name="keyword" />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </li>
        </div>
        <div className="isNotMobile">
          <form action="/action_page.php">
            <input type="text" placeholder="keyword" name="keyword" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </ul>
    </>
  );
}
