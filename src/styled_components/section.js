import React from "react";
import styled from "styled-components";

export const Section1 = styled.section`
  background-color: ${(props) => props.backgroundColor};
  /* change thus latrt  */
  /* background-color: ${(props)=>props.back}; */
  /*  */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (min-width: 600px) {
}
`;
export const ComputerSection = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1rem 1fr;
  align-items: center
  `;
export const ComputerHeader = styled.div`
  /* width: 100%; */
  height: 2rem;
  margin-top: 25px;
  padding:0.8rem;
  display: flex;
  justify-content: flex-end ;
  gap: 1rem;
  
  
  /* Change this later to varaible */
  background-color: ${props=>props.backgroundColor?props.backgroundColor:"violetblue"};
  /*  */
`;
export const Circle = styled.div`
  /* change background-color to variable; */
  background: ${(props) => props.backgroundColor};
  width: 1.5rem;
  height:1.5rem;
  border-radius: 50%;
  border: 1px solid black;
  :hover{
      transform: scale(1.02);
  }
`;
