import React from "react";

import styled from "styled-components";

export const Navbar = styled.section`
  position: fixed;
  background-color: ${(props) => props.backgroundColor};
  transition: transform 600ms ease;
  box-shadow: 2px 2px 5px black;
  width: 100vw;
  height: 5rem;
  bottom: 0;

  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  :-webkit-scrollbar-thumb {
    background: hsl(256, 40%, 50%);
  }

  @media only screen and (min-width: 600px) {
    top: 0;
    left: 0;
    width: 16rem;
    height: 100vh;
    flex-direction: row;
    overflow-x: scroll;
    z-index: 9999;
    transform: translateX(-70%);
    .LinkTxt {
      opacity: 0;
      transition: 1000ms ease-out;
    }
    .logo {
      span{
        opacity: 0;
        transform: translateX(-5rem);
        transition: 1000ms;
      }
    }
    :hover {
      transform: translateX(0);
      .LinkTxt {
        opacity: 1;
      }

      ul {
        .svg {
          display: inline;
          transform: translateX(1.5rem);
        }
        .logo {
          span{
            position: absolute;
            transform: translateX(2rem);
            opacity: 1;
          }
          .svg {
            transform: translateX(12.5rem) rotate(-180deg);
          }
        }
      }
    }

    :hover .logo-text {
      left: 0px;
    }
    /* remove the logo-text and logo */
  }
`;

export const Navbar_nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 600px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  position: relative;
  
  @media (min-width: 600px) {
  
    .svg{
      position: absolute;
      transform: translateX(12.5rem);
    }
    :last-child {
      margin-top: auto;
    }
    overflow: hidden;
  }
`;
export const Logo = styled.li`
  display: none;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(prop) => prop.textColor};
  background: ${(prop) => prop.backgroundColor};
  font-size: 1rem;
  letter-spacing: 0.3ch;
  width: 100%;
  @media (min-width: 600px) {
    display: block;
    margin-bottom: 1rem;
    .svg {
      position: absolute;
      transform: translateX(12.5rem) rotate(0deg);
      transition: 600ms ease;

    }
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: ${(prop) => prop.textColor};
  text-decoration: none;
  filter: grayscale(50%) opacity(0.8);
  transition: filter 600ms ease color 600ms ease-in;

  /* background: #000; */

  @media (min-width: 600px) {
    justify-content: space-between;
    .svg {
      margin-right: 1.2rem;
      transition: 590ms ease;
    }
  }

  :hover {
    filter: grayscale(0%) opacity(1);
    cursor: pointer;
  }
`;

export const LinkTxt = styled.span`
  flex: 1;
  text-align: center;
  display:none;
  color:${props=>[props.textColor]};
  @media (min-width:600px)
  {
    display: block;
  }
`;
