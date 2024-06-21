import styled from "styled-components";
import checkmark from "../icons/icon-checkmark.svg";

export default function ThankYou() {
  return (
    <Main>
      <div>
        <img src={checkmark} alt="checkmark" />
        <Thank>Thank you!</Thank>
        <Paragraph>
          Thanks for confirming your subcription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </Paragraph>
      </div>
    </Main>
  );
}

const Main = styled.div`
  height: 60vh;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Thank = styled.h1`
  color: hsl(213, 96%, 18%);
`;

const Paragraph = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 700;
`;
