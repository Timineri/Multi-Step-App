import styled from "styled-components";
export default function Paragraph({ children }) {
  return <ParagraphSection>{children}</ParagraphSection>;
}

const ParagraphSection = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 400;
`;
