import styled from "styled-components"

export const ProjectsContainer = styled.div`
  div:first-child {
    padding-top: 0;
  }
`
export const Project = styled.div`
  & + div {
    border-top: 1px solid #fff;
  }
  padding: 48px 0;

  h3 {
    margin-bottom: 20px;
  }
`

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 32px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    line-height: 30px;
  }

  p + p {
    margin-top: 20px;
  }

  img {
    width: 100%;
  }
`

export const ProjectButtons = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    color: ${props => props.theme.colors.secondary};
    transition: box-shadow 0.5s;

    &:hover {
      box-shadow: ${props => props.theme.shadows.primary};
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 40px;
      background: ${props => props.theme.colors.primary};
    }

    & + a {
      margin-left: 30px;
    }
  }
`
