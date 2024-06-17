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
        <Option>
          <Monthly>Monthly</Monthly>
          <Yearly>Yearly</Yearly>
        </Option>
      </PlanSections>
      <ButtonSection />
    </Section>
  );
}

function Plans({ Item }) {
  return (
    <PlanChild>
      <Img src={Item.img} alt="" />
      <Level>{Item.description}</Level>
      <Time>{Item.price}</Time>
      {/* <Bonuses>{Item.bonus}</Bonuses> */}
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
  border: 1px solid hsl(229, 24%, 87%);
  border-radius: 0.5em;
  height: max-content;
  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(231, 100%, 99%);
  }
`;

const PlanSection = styled.div`
  display: flex;
`;
const PlanSections = styled.div`
  height: 20em;
`;

const Img = styled.img`
  margin-bottom: 2.5em;
`;

const Level = styled.h3`
  color: hsl(213, 96%, 18%);
  font-weight: 700;
`;

const Time = styled.div`
  color: hsl(231, 11%, 63%);
`;

// const Bonuses = styled.p`
//   color: hsl(213, 96%, 18%);
//   font-weight: 400;
// `;

const Option = styled.div`
  background-color: hsl(231, 100%, 99%);
  margin-top: 2em;
  text-align: center;
  padding: 1em;
`;

const Monthly = styled.span`
  color: hsl(231, 11%, 63%);

  font-weight: 700;
  &:hover {
    color: hsl(213, 96%, 18%);
  }
`;

const Yearly = styled.span`
  color: hsl(231, 11%, 63%);
  margin-left: 1em;
  font-weight: 700;
  &:hover {
    color: hsl(213, 96%, 18%);
  }
`;
