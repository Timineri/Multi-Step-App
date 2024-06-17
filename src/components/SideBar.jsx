import styled from "styled-components";
const SideItems = [
  { id: 1, description: "YOUR INFO" },
  { id: 2, description: "SELECT PAN" },
  { id: 3, description: "ADD-ONS" },
  { id: 4, description: "SUMMARY" },
];

export default function SideBar() {
  return (
    <SideContent className="side-content">
      {SideItems.map((Item) => (
        <Side key={Item.id} Item={Item} />
      ))}
    </SideContent>
  );
}

function Side({ Item }) {
  return (
    <SideItem>
      <Numbers>{Item.id}</Numbers>
      <div>
        <Paragraph>STEP {Item.id}</Paragraph>
        <h3>{Item.description}</h3>
      </div>
    </SideItem>
  );
}

const SideContent = styled.div`
  color: hsl(0, 0%, 100%);
  margin: 1em;
  padding: 2em;
`;
const SideItem = styled.div`
  padding-bottom: 2em;
  display: flex;
  align-items: center;
`;

const Numbers = styled.div`
  height: 40px;
  aspect-ratio: 1;
  /* background-color: hsl(228, 100%, 84%); */
  border: 1px solid hsl(228, 100%, 84%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 1em;
`;

const Paragraph = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 400;
`;
