import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ButtonSection from "./ButtonSection";
import arcadeIcon from "../icons/icon-arcade.svg";
import advancedIcon from "../icons/icon-advanced.svg";
import proIcon from "../icons/icon-pro.svg";
const PlanItems = [
  {
    id: 1,
    img: arcadeIcon,
    description: "Arcade",
    price: "$9/mo",
    bonus: "2 months free",
  },
  {
    id: 2,
    img: advancedIcon,
    description: "Advanced",
    price: "$12/mo",
    bonus: "2 months free",
  },
  {
    id: 3,
    img: proIcon,
    description: "Pro",
    price: "$15/mo",
    bonus: "2 months free",
  },
];

export default function Plan() {
  return (
    <Section>
      <TopText>
        <Header>Select your plan</Header>
        <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      </TopText>
      <PlanSections>
        <PlanSection>
          {PlanItems.map((Item) => (
            <Plans key={Item.id} Item={Item} />
          ))}
        </PlanSection>
      </PlanSections>
      <ButtonSection />
    </Section>
  );
}

function Plans({ Item }) {
  return (
    <PlanChild>
      <Img src={Item.img} alt="" />
      <div>{Item.description}</div>
      <div>{Item.price}</div>
      <div>{Item.bonus}</div>
    </PlanChild>
  );
}

const Section = styled.div`
  justify-content: center;
  margin: 4em 7em 0 0;
`;
const TopText = styled.div`
  padding-bottom: 2em;
`;

const PlanChild = styled.div`
  width: 30em;
  padding: 1em;
  margin: 0em 0.6em;
  border: 1px solid black;
  height: max-content;
`;

const PlanSection = styled.div`
  display: flex;
  height: 20em;
`;
const PlanSections = styled.div`
  height: 20em;
`;

const Img = styled.img`
  margin-bottom: 2.5em;
`;
