import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ButtonSection from "./ButtonSection";

const SummaryItems = [
  {
    id: 1,
    description: "Online service",
    price: "+$1/mo",
    yearlyPrice: "+$10/yr",
  },
  {
    id: 2,
    description: "Larger storage",
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
];

export default function Summary({ toggled }) {
  return (
    <>
      <TopText>
        <Header>Finishing Up</Header>
        <Paragraph>
          Double-check everything looks OK before confirming
        </Paragraph>
      </TopText>
      <SummarySection>
        <SummaryMain>
          <Duration>
            <DurationText>
              <div>
                <h3>{toggled ? "Arcade (Yearly)" : "Arcade (Monthly)"}</h3>
                <Link href="">Change</Link>
              </div>
              <p style={toggled ? { display: "none" } : { display: "block" }}>
                $9/mo
              </p>
              <p style={toggled ? { display: "block" } : { display: "none" }}>
                $90/yr
              </p>
            </DurationText>
          </Duration>
          <div>
            {SummaryItems.map((Item) => (
              <Sum key={Item.id} Item={Item} toggled={toggled} />
            ))}
          </div>
        </SummaryMain>
        <Total>
          <TotalText>
            <h4>{toggled ? "Total (per year)" : "Total (per month)"}</h4>
          </TotalText>
          <TotalPrice
            style={toggled ? { display: "none" } : { display: "block" }}
          >
            +$12/mo
          </TotalPrice>
          <TotalPrice
            style={toggled ? { display: "block" } : { display: "none" }}
          >
            +$120/yr
          </TotalPrice>
        </Total>
      </SummarySection>
    </>
  );
}

function Sum({ Item, toggled }) {
  return (
    <Storage>
      <p>{Item.description}</p>
      <Price style={toggled ? { display: "none" } : { display: "block" }}>
        {Item.price}
      </Price>
      <Price style={toggled ? { display: "block" } : { display: "none" }}>
        {Item.yearlyPrice}
      </Price>
    </Storage>
  );
}

const TopText = styled.div`
  padding-bottom: 2em;
`;
const SummarySection = styled.div`
  height: 20em;
`;

const SummaryMain = styled.div`
  background-color: hsl(217, 100%, 97%);
  border-radius: 0.5em;
  padding: 1.5em;
`;

const Duration = styled.div`
  border-bottom: 1px solid hsl(229, 24%, 87%);
  margin-bottom: 1em;
`;

const DurationText = styled.div`
  display: flex;
  justify-content: space-between;
  color: hsl(213, 96%, 18%);
  font-weight: 700;
  margin-bottom: 2em;
`;

const Storage = styled.div`
  display: flex;
  justify-content: space-between;
  color: hsl(231, 11%, 63%);
  font-weight: 700;
  line-height: 2.5em;
`;

const Link = styled.a`
  color: hsl(231, 11%, 63%);
  &:hover {
    color: hsl(213, 96%, 18%);
  }
`;

const Price = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 400;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1.5em;
`;

const TotalText = styled.p`
  color: hsl(231, 11%, 63%);
`;
const TotalPrice = styled.h2`
  color: hsl(243, 100%, 62%);
`;
