import "./index.css";
import { useState } from "react";
import styled from "styled-components";
import ButtonSection from "./components/ButtonSection";
import Form from "./components/Form";
import SideBar from "./components/SideBar";
import GlobalStyles from "./GlobalStyles";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";

export default function App() {
  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!toggled);
  }
  const pages = [
    <Form key={1} />,
    <Plan key={2} toggled={toggled} onToggled={handleToggle} />,
    <Addons key={3} toggled={toggled} />,
    <Summary key={4} toggled={toggled} />,
    <ThankYou key={5} />,
  ];

  const [step, setStep] = useState(1);

  function handleBack() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 5) setStep((step) => step + 1);
  }

  return (
    <Main>
      <Parent>
        <SideBar step={step} />
        <Section>
          {pages[step - 1]}
          {step < 5 && (
            <ButtonSection
              step={step}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
        </Section>
        <GlobalStyles />
      </Parent>
    </Main>
  );
}

const Section = styled.div`
  justify-content: center;
  margin: 4em 7em 0 0;
`;
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
