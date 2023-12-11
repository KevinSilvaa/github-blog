import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding: 2rem 2rem 2rem 3rem;
  background: ${({ theme }) => theme["base-profile"]};
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0px rgba(0, 0, 0, 0.20);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.5rem;
  width: 100%;

  p {
    color: ${({ theme }) => theme["base-text"]};
    line-height: 1.6;
  }
`;

export const ProfileInfosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: fit-content;
    gap: 0.5rem;
    background: transparent;
    color: ${({ theme }) => theme["blue"]};
    text-transform: uppercase;
    border: 0;
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const ProfileInfosFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme["base-subtitle"]};

  svg {
    color: ${({ theme }) => theme["base-label"]};
    width: 1.125rem;
    height: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
