import { Ch, H1, GlobalStyles } from "../../styled_components/intro_animation";
import { phone, computer, ipad } from "../style.module.css";
import { ReactComponent as Phone } from "../svgs/Component 1.svg";
import { ReactComponent as Computer } from "../component2.svg";
import { ReactComponent as Ipad } from "../component 3.svg";


export const TypingAnimation = () => {
  let strin = "Hello, My Name Is Prince";
  strin = [...strin];

  return (
    <H1>
      {strin.map((item) => {
        if (item === " ") return <Ch />;
        return <span>{item}</span>;
      })}
    </H1>
  );
};

export const DeviceAnimation = () => {
    return (
      <>
        <Phone class={phone} />
        <Computer className={computer} />
        <Ipad className={ipad} />
      </>
    );
}