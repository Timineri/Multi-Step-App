import styled from "styled-components";

export default function Header({ children }) {
  return <MainHeader>{children}</MainHeader>;
}

const MainHeader = styled.h1`
  color: hsl(213, 96%, 18%);
`;
