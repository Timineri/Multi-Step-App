import styled from "styled-components";
export default function ButtonSection({ step, onNext, onBack }) {
  return (
    <Buttons>
      <div>
        <ButtonOne
          onClick={onBack}
          style={step === 1 ? { display: "none" } : {}}
        >
          Go back
        </ButtonOne>
      </div>
      <ButtonTwo onClick={onNext}>
        {step === 4 ? "Finish" : "Next Step"}
      </ButtonTwo>
    </Buttons>
  );
}

const Buttons = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: space-between;
`;

const ButtonOne = styled.button`
  border: none;
  font-weight: 700;
  background-color: white;
  color: hsl(231, 11%, 63%);
  &:hover {
    color: hsl(213, 96%, 18%);
  }
`;
const ButtonTwo = styled.button`
  background-color: hsl(213, 96%, 18%);
  color: hsl(229, 24%, 87%);
  border: none;
  font-weight: 700;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  &:hover {
    color: hsl(229, 24%, 87%);
    background-color: hsl(213.12, 93.98496240601504%, 26.078431372549016%);
  }
`;
