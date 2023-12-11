import styled from "styled-components";

export const PostTitleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  border-radius: 10px;
  width: 100%;
  margin-top: -5.5rem;
`;

export const PostTitleCardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    text-transform: uppercase;
    border: 0;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    color: ${({ theme }) => theme["blue"]};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme["blue"]};
  }
`;

export const PostTitleCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;

export const PostTitleCardExtraInfos = styled.div`
  display: flex;
  gap: 2rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
      color: ${({ theme }) => theme["base-label"]};
    }

    span {
      color: ${({ theme }) => theme["base-span"]};
      line-height: 1.6;
    }
  }
`;
