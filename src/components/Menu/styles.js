import styled from "styled-components"

export const Hamburger = styled.button`
  position: fixed;
  right: 41px;
  top: 41px;
  z-index: 9999;
  padding: 7px;
  background: none;
  border: 0;
  cursor: pointer;
  transition: top 0.5s, right 0.5s;

  @media ${props => props.theme.breakpoints.tablet} {
    top: 17px;
    right: 17px;
  }

  &:focus {
    outline: none;
  }

  span {
    ${props => props.openedMenu && "transform: rotate(0.625turn)"};

    &::before {
      ${props =>
        props.openedMenu && "transform: rotate(90deg) translateX(-10px)"};
    }

    &::after {
      ${props => props.openedMenu && "display: none"};
    }
  }

  span {
    display: block;
    position: relative;

    &::before {
      top: 10px;
    }

    &::after {
      bottom: 10px;
    }
  }

  span,
  span::before,
  span::after {
    width: 35px;
    height: 3px;
    border-radius: 2px;
    transition: transform 0.3s, background 0.3s;

    background: ${props =>
      props.openedMenu
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  }

  span::before,
  span::after {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
  }
`

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.primary};
  padding: 70px 20px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transform: ${props =>
    props.openedMenu ? "translateX(0%)" : "translateX(100%)"};

  transition: transform 350ms ease-in-out;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: 0;

    color: white;
    outline: none;
    font-size: 25px;
    cursor: pointer;

    &::after {
      content: " ";
      height: 1px;
      width: 0;
      margin-top: 10px;
      background: white;
      bottom: 0;
      transition: width 0.3s;
    }

    &:hover ::after {
      width: 80%;
    }
  }
`
