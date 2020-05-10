import styled from "styled-components"

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin: 0 auto;
    display: grid;
    grid-template-columns: min-content max-content;
    gap: 15px 20px;
    grid-template-areas:
      "image title"
      "image subtitle";

    @media ${props => props.theme.breakpoints.mobile} {
      width: 100%;
      grid-template-columns: 1fr;
      gap: 25px 0;
      grid-template-areas:
        "title"
        "subtitle"
        "image";
    }

    h1 {
      grid-area: title;
      align-self: end;
      line-height: 58px;

      display: flex;
      flex-direction: column;
      font-size: 40px;
      font-weight: 300;

      @media ${props => props.theme.breakpoints.tablet} {
        font-size: 30px;
      }
    }

    p {
      grid-area: subtitle;
      align-self: start;
      grid-column: -1/1;
      width: calc(100% + 40px);
      position: relative;
      left: -20px;

      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};
      height: 35px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
      font-weight: 300;

      @media ${props => props.theme.breakpoints.mobile} {
        width: max-content;
        left: 0;
      }
    }
  }
`

export const ImageContainer = styled.div`
  grid-area: image;
  width: 400px;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 300px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`
