import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ButtonSection from "./ButtonSection";
import arcadeIcon from "../icons/icon-arcade.svg";
import advancedIcon from "../icons/icon-advanced.svg";
import proIcon from "../icons/icon-pro.svg";
import { useState } from "react";

const PlanItems = [
  {
    id: 1,
    img: arcadeIcon,
    description: "Arcade",
    price: "$9/mo",
    yearlyprice: "$90/yr",
    bonus: "2 months free",
  },
  {
    id: 2,
    img: advancedIcon,
    description: "Advanced",
    price: "$12/mo",
    yearlyprice: "$120/yr",
    bonus: "2 months free",
  },
  {
    id: 3,
    img: proIcon,
    description: "Pro",
    price: "$15/mo",
    yearlyprice: "$150/yr",
    bonus: "2 months free",
  },
];

export default function Plan({ toggled, onToggled }) {
  return (
    <>
      <TopText>
        <Header>Select your plan</Header>
        <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      </TopText>
      <PlanSections>
        <PlanSection>
          {PlanItems.map((Item) => (
            <Plans key={Item.id} Item={Item} toggled={toggled} />
          ))}
        </PlanSection>
        <Option>
          <Monthly>Monthly</Monthly>
          <label className="switch">
            <input type="checkbox" value={toggled} onChange={onToggled} />
            <span className="slider round"></span>
          </label>
          <Yearly>Yearly</Yearly>
        </Option>
      </PlanSections>
    </>
  );
}

function Plans({ Item, toggled }) {
  return (
    <PlanChild tabIndex={Item.id}>
      <Img src={Item.img} alt="" />
      <Level>{Item.description}</Level>
      <Time style={toggled ? { display: "none" } : { display: "block" }}>
        {Item.price}
      </Time>
      <div style={toggled ? { display: "block" } : { display: "none" }}>
        <Time>{Item.yearlyprice}</Time>
        <Bonuses>{Item.bonus}</Bonuses>
      </div>
    </PlanChild>
  );
}

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
  &:focus {
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(217, 100%, 97%);
  }
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

const Bonuses = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 400;
`;

const Option = styled.div`
  background-color: hsl(231, 100%, 99%);
  margin-top: 2em;
  text-align: center;
  padding: 1em;
`;

const Monthly = styled.span`
  color: hsl(231, 11%, 63%);
  margin-right: 1em;
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
