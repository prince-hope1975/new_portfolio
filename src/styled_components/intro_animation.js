import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const H1 = styled.h1`
  font-size: clamp(1rem, 3vw + 0.7rem, 4rem);
  position: relative;
  display: flex;
  font-family: "Source Code Pro", monospace;
  justify-self: center;

  @media (min-width: 600px) {
    font-size: clamp(1rem, 3vw + 1rem, 4rem);
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
      animation: typeWriter 4s 1s steps(24) forwards;
    }

    ::after {
      width: 0.125em;
      /* Change later */
      background: black;
      /* change  */
      animation: typeWriter 4s 1s steps(24) forwards,
        blink 750ms steps(24) infinite;
    }
  }
`;

export const Ch = styled.div`
  width: 0.7ch;
  background: inherit;
  @media (min-width: 600px) {
    width: 1ch;
  }
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
