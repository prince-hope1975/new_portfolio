import React from "react"
import SectionOne from "./components/sectionOne/IntroSection";
import SectionTwo from "./components/sectionTwo";
// import './App.css';
import Nav from "./components/Nav.jsx"
import { Ch, H1 , GlobalStyles} from "./styled_components/intro_animation";


function App() {
  let strin = "Hello, My Name Is Prince";
  strin = [...strin];
  return (
    <div className="App">
      <GlobalStyles/>
        <Nav />
        <SectionOne />
        <SectionTwo/>
   
 
    </div>
  );
}

export default App;
