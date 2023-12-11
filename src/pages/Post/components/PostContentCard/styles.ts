import styled from "styled-components";

export const PostContentCardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PostContentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem;
  max-height: 26.375rem;
  overflow: auto;
  color: ${({ theme }) => theme["base-text"]};
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme["blue"]};
  }

  pre {
    background: #333;
    color: ${({ theme }) => theme["base-title"]};
  }
`;
