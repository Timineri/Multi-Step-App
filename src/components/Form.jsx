import styled from "styled-components";
import Header from "./Header";
import Paragraph from "./Paragraph";

export default function Form() {
  return (
    <>
      <TopText>
        <Header>Personal Info</Header>
        <Paragraph>
          Please provide your name, email address and phone number
        </Paragraph>
      </TopText>
      <FormSection action="">
        <FormItem>
          <label htmlFor="">Name</label>
        </FormItem>
        <Input type="text" placeholder="e.g. Stephen King" />
        <FormItem>
          <label htmlFor="">Email Adress</label>
        </FormItem>
        <Input type="text" placeholder="e.g. stephenKing@lorem.com" />
        <FormItem>
          <label htmlFor="">Phone Number</label>
        </FormItem>
        <Input type="text" placeholder="e.g. +1 234 567 890" />
      </FormSection>
    </>
  );
}

const TopText = styled.div`
  padding-bottom: 2em;
`;

const FormSection = styled.div`
  height: 20em;
`;

const FormItem = styled.div`
  color: hsl(213, 96%, 18%);
`;

const Input = styled.input`
  margin-bottom: 2em;
  width: 100%;
  padding: 0.6em;
  border-radius: 0.3em;
  border: 1px solid hsl(229, 24%, 87%);
`;
