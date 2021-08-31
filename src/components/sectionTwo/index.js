import {ComputerHeader,Circle, ComputerSection} from "../../styled_components/section2 styles"
const Index =()=>{
    return (
      <ComputerSection>
          <ComputerHeader>
            <Circle backgroundColor={`red`} />
            <Circle backgroundColor={`green`} />
            <Circle backgroundColor={`blue`} />
          </ComputerHeader>
      </ComputerSection>
    );
}
export default Index;