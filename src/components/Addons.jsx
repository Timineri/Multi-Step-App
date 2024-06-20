import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ButtonSection from "./ButtonSection";

const AddonsItems = [
  {
    id: 1,
    description: "Online sevice",
    paragraph: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    id: 2,
    description: "Larger storage",
    paragraph: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    id: 3,
    description: "Customizable Profile",
    paragraph: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

export default function Addons() {
  return (
    <>
      <TopText>
        <Header>Pick add-ons</Header>
        <Paragraph>Add-ons help enhance your gaming experience </Paragraph>
      </TopText>
      <AddonsSection>
        {AddonsItems.map((Item) => (
          <Addon key={Item.id} Item={Item} />
        ))}
      </AddonsSection>
    </>
  );
}

function Addon({ Item }) {
  return (
    <AddonSection>
      <CheckBox>
        <input type="checkbox" />
        <div>
          <Description>{Item.description}</Description>
          <ItemParagraph>{Item.paragraph}</ItemParagraph>
        </div>
      </CheckBox>
      <Price>{Item.price}</Price>
    </AddonSection>
  );
}

const TopText = styled.div`
  padding-bottom: 2em;
`;

const AddonsSection = styled.div`
  height: 20em;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.h3`
  color: hsl(213, 96%, 18%);
  font-weight: 700;
`;

const ItemParagraph = styled.p`
  color: hsl(231, 11%, 63%);
`;

const Price = styled.p`
  color: hsl(243, 100%, 62%);
`;

const AddonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  border-radius: 0.5em;
  margin-bottom: 1em;
  border: 1px solid hsl(229, 24%, 87%);
  height: max-content;
  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(217, 100%, 97%);
  }
`;
