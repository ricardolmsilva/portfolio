import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 48px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.6;
    }

    svg {
      font-size: 20px;
    }
  }

  .social-list {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    padding: 0;
  }

  .social-list__item {
    margin: 0 7px;
  }
`
