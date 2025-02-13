import styled from "$veda-ui/styled-components";


const Title = styled.h2`
  margin: 48px 0 24px 0;
  font-size: calc(2rem + var(--base-text-increment,0rem));
  &:before {
    content: '';
      display: block;
      width: 2rem;
      height: 0.25rem;
      border-radius: 0.25rem;
      background: #082a64;
      margin-bottom: 0.75rem;
  }
`

export {
  Title,
}
