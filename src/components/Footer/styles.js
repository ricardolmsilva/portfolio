import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 48px;
  color: var(--clr-dark);
  text-align: center;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);

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
    margin: 32px 0 0;
    padding: 0;
  }

  .social-list__item {
    margin: 0 7px;
  }
`
