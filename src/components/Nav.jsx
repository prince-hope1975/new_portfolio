import React, { useState } from "react";

// import styled from "styled-components"


import { AiFillHome } from "react-icons/ai";
import { GiFrogPrince, GiComputerFan } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FaMoneyBillWave } from "react-icons/fa";
import {Navbar, Navbar_nav} from "../styled_components/index"


const Nav =() =>{
    return (
        <Navbar>
            <Navbar_nav>
                <AiFillHome />
                <GiFrogPrince />
                <GiComputerFan />
                <FaMoneyBillWave />
                <FcAbout />
            </Navbar_nav>
        </Navbar>
    )
}
export default Nav

