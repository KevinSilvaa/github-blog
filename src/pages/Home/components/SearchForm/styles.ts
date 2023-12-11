import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchFormHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;

  h2 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
  }
`

export const SearchFormInput = styled.input`
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  border: 1px solid ${({ theme }) => theme['base-border']};
  border-radius: 6px;
  outline: 0;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):focus {
    border: 1px solid ${({ theme }) => theme.blue};
  }
`
