import React from "react";
import styled from "styled-components";

export const Section1 = styled.section`
  background-color: ${(props) => props.backgroundColor};
  /* change thus latrt  */
  /* background-color: ${(props) => props.back}; */
  /*  */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (min-width: 600px) {
  }
`;
export const ComputerSection = styled.section`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1rem 1fr;
  align-items: center;
  border: 1px solid black;
  border-radius: 7px;
  margin: 1rem;

  @media (min-width: 600px) {
    margin: 0rem;
  }
`;
export const ComputerHeader = styled.div`

  height: 2rem;
  margin-top: 25px;
  padding:  .8rem 2.4rem .8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  /* Change this later to varaible */
  background-color: ${(props) =>props.backgroundColor ? props.backgroundColor : "purple"};
  /*  */
`;
export const Circle = styled.div`
  /* change background-color to variable; */
  background: ${(props) => props.backgroundColor};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid black;
  :hover {
    transform: scale(1.02);
  }
`;
