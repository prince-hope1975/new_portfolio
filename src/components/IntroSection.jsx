import React from "react"
// import data from "../data"

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Section1, ComputerSection, ComputerHeader, Circle} from "../styled_components/section";
import { Ch, H1, GlobalStyles } from "../styled_components/intro_animation";

const SectionOne =()=>{


    return (
      <Section1>
        <ComputerSection>
          <ComputerHeader>
            <Circle backgroundColor={`red`} />
            <Circle backgroundColor={`green`} />
            <Circle backgroundColor={`blue`} />
          </ComputerHeader>
          <H1>
            {strin.map((item) => {
              if (item === " ") return <Ch />;
              return <span>{item}</span>;
            })}
          </H1>
        </ComputerSection>
      </Section1>
    );
}

    let strin = "Hello, My Name Is Prince";
    strin = [...strin];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
export default SectionOne