import styled from "styled-components"

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
  margin-bottom: 40px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, max-content);
    gap: 60px 0;
    justify-content: space-around;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  @media ${props => props.theme.breakpoints.xsmobile} {
    grid-template-columns: repeat(1, 1fr);

    h3 {
      text-align: left;
    }
  }

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 10px;
    }
    svg {
      font-size: 13px;
    }
    span {
      margin-left: 10px;
    }
  }
`
