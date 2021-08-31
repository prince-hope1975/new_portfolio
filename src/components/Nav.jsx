import React, { useState } from "react";
import "../index.css";

import styled from "styled-components"

import { AiFillHome } from "react-icons/ai";
import { GiShipWheel, GiComputerFan } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  Navbar,
  Navbar_nav,
  Logo,
  NavLink,
  NavItem,
  LinkTxt
} from "../styled_components/index";

const Nav = () => {
  return (
    <Navbar backgroundColor={``}>
      <Navbar_nav>
        <Logo className="logo">
          <NavLink>
              <span>PrinceShip</span>
            <GiShipWheel className="svg logo" />
          </NavLink>
        </Logo>
      {array.map((item)=>{
         return <NavItem>
              <NavLink>
                  <LinkTxt className="LinkTxt">
                  {item.text}
                  </LinkTxt>
                {item.item}
              </NavLink>
          </NavItem>
      })}
      </Navbar_nav>
    </Navbar>
  );
};


const array = [
  {item:<AiFillHome className="svg" />,text:"Home"},
  {item:<GiComputerFan className="svg" />,text:"Tech Stack"},
  {item:<FaMoneyBillWave className="svg" />,text:"Hire Me"},
  {item:<FcAbout className="svg" />,text:"About me"},
];
export default Nav;
