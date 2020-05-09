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
  }

  .footer__link:hover,
  .social-list__link:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  .social-list {
    display: flex;
    justify-content: center;
    margin: 32px 0 0;
    padding: 0;
  }

  .social-list__item {
    margin: 0 2px;
  }
`
