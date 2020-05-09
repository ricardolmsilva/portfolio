import styled from "styled-components"

export const Container = styled.section`
  background: ${props =>
    props.background
      ? props.theme.colors.background_dark
      : props.theme.colors.background_light};

  > div {
    display: grid;
    grid-template-columns: repeat(12fr);
    gap: 32px;
    max-width: 1100px;
    min-height: ${props => (props.viewportHeight ? "100vh" : "none")};
    margin: 0 auto;
    padding: 48px;

    @media ${props => props.theme.breakpoints.tabled} {
      grid-template-columns: repeat(6fr);
      gap: 16px;
    }
    @media ${props => props.theme.breakpoints.mobile} {
      padding: 48px 24px;
    }
  }
`

export const SectionTitle = styled.h2`
  width: fit-content;
  justify-self: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: " ";
    margin-top: 10px;
    height: 1px;
    width: 80%;
    background: ${props => props.theme.colors.primary};
  }
`
