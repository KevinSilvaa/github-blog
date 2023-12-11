import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  max-width: 416px;
  border-radius: 10px;
  cursor: pointer;

  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.6;
    margin-bottom: 0.575rem;
  }
`

export const PostCardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 17.5rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-span']};
    margin-top: 0.25rem;
  }
`
