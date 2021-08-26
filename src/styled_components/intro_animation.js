import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const H1 = styled.h1`
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  position: relative;
  display: flex;
  font-family: "Source Code Pro", monospace;
  justify-self: center;

  /* ::nth-child(3){

  } */
  @media (max-width: 600px) {
    ${(props) => {
      let length = props.length ? props.length : 24;
      let x = [];
      for (let i = 0; i < length; i++) {
        x = [
          ...x,
          `span:nth-child(${i + 1}){
               transform: translateY(-${i + 1}rem)                
            }\n`,
        ];
      }
      return x.join("");
    }}
  }

  @media screen and (min-width: 600px) {
    width: fit-content;
    ::before,
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    :before {
      background: ${({ backgroundColor }) => {
        return backgroundColor ? backgroundColor : "white";
      }};
      animation: typeWriter 6s 1s steps(24) forwards;
    }

    ::after {
      width: 0.125em;
      /* Change later */
      background: black;
      /* change  */
      animation: typeWriter 6s 1s steps(24) forwards,
        blink 750ms steps(24) infinite;
    }
  }
`;

export const Ch = styled.div`
  width: 1ch;
  background: inherit;
`;

export const GlobalStyles = createGlobalStyle`
/* body{background: } */
  @keyframes typeWriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;
