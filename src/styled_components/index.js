import React from "react";

import styled from "styled-components";

export const Navbar = styled.section`
  position: fixed;
  background-color: ${(props) => props.backgroundColor};
  transition: width 600ms ease;
  box-shadow: 2px 2px 5px black;

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

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    flex-direction: row;
    overflow-x: scroll;
    z-index: 9999;

    :hover {
      width: 16rem;
    }
    :hover > * a {
      display: inline;
    }

    /* Remeber to change this later */
    :hover .logo svg {
      margin-left: 11rem;
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
  }
`;
