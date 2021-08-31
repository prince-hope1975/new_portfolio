import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Section1,
  ComputerSection,
  ComputerHeader,
  Circle,
} from "../styled_components/section";

import {TypingAnimation, DeviceAnimation} from "./animations"


const SectionOne = () => {
  const mainColor = "";

  return (
    <Section1>
      <ComputerSection>
        <ComputerHeader>
          <Circle backgroundColor={`red`} />
          <Circle backgroundColor={`green`} />
          <Circle backgroundColor={`blue`} />
        </ComputerHeader>
      </ComputerSection>
      <TypingAnimation />
      <DeviceAnimation />
    
    </Section1>
  );
};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

export default SectionOne;
