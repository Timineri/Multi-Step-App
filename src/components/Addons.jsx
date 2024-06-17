import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ButtonSection from "./ButtonSection";

export default function Addons() {
  return (
    <Section>
      <TopText>
        <Header>Pick add-ons</Header>
        <Paragraph>Add-ons help enhance your gaming experience </Paragraph>
      </TopText>

      <ButtonSection />
    </Section>
  );
}

const Section = styled.div`
  justify-content: center;
  margin: 4em 7em 0 0;
`;
const TopText = styled.div`
  padding-bottom: 2em;
`;
