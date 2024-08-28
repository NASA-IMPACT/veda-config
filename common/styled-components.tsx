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

const P = styled.p`
  font-size: 1.25rem;
  width: 80%;
`

const FitContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 13vw;
  margin: 12px;
`

const SectionContainer = styled.section`
  margin: 12px;
`

export {
  FitContainer,
  P,
  SectionContainer,
  Title,
}
