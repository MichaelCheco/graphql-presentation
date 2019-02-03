import styled from "styled-components";
const Div = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: 100px 300px 300px;
`;
const Header = styled.h1`
  grid-row: 1;
  grid-column: 1 / -1;
  background: palegreen;
`;