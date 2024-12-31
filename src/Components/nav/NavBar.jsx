/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: NavBar.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import React, {useState } from "react";
import { Link } from "react-router-dom";
import {styles} from '../../styles.js';
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5
      fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={bl33hIcon} alt={bl33hIcon} className="w-18 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center"  style={{ color: '#b3286c' }}>
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[24px] font-bold cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <li>
            <Link
              to="/admin/login"
              className="nav-link px-4 py-2 rounded-md text-[20px] font-bold"
              style={{
                border: '1px solid #b3286c',
                color: '#b3286c',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#b3286c';
                e.target.style.color = '#1d1d1d';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#b3286c';
              }}
            >
              <i className="fas fa-user me-2"></i>
              Giriş
            </Link>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28ox] h-[28px] pbject-contain cursor-pointer z-20 " 
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
              <li>
                <Link
                  to="/admin/login"
                  className="text-[#08fdd8] font-poppins font-medium text-[16px]"
                >
                  <i className="fas fa-user me-2"></i>
                  Giriş
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;