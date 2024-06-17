import "./index.css";
import styled from "styled-components";
import Form from "./components/Form";
import SideBar from "./components/SideBar";
import GlobalStyles from "./GlobalStyles";
import Plan from "./components/Plan";
import Addons from "./components/Addons";

export default function App() {
  return (
    <Main>
      <Parent>
        <SideBar />
        {/* <Form /> */}
        {/* <Plan /> */}
        <Addons />

        <GlobalStyles />
      </Parent>
    </Main>
  );
}

const Parent = styled.div`
  height: 78vh;
  width: 65vw;
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5em;
`;
const Main = styled.div`
  display: flex;
  margin-top: 5em;
  align-items: center;
  justify-content: center;
`;
