import styled from "styled-components";
import checkmark from "../icons/icon-checkmark.svg";

const Pic = [{ img: checkmark }];

export default function ThankYou() {
  return (
    <>
      <div>
        <img src={Pic.img} alt="checkmark" />
        <Thank>Thank you!</Thank>
        <Paragraph>
          Thanks for confirming your subcription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </Paragraph>
      </div>
    </>
  );
}

const Thank = styled.h1`
  color: hsl(213, 96%, 18%);
`;

const Paragraph = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 700;
`;
