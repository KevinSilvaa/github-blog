import styled from "styled-components";
import backgroundImage from "../../assets/background.svg";

export const HeaderContainer = styled.header`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 18.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
