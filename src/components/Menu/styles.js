import styled from "styled-components"

export const Hamburger = styled.button`
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 9999;
  padding: 5px;
  background: none;
  border: 0;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.tablet} {
    top: 15px;
    right: 15px;
  }

  &:focus {
    outline: none;
  }

  span {
    ${props => props.openedMenu && "transform: rotate(0.625turn)"};

    &::before {
      ${props =>
        props.openedMenu && "transform: rotate(90deg) translateX(-6px)"};
    }

    &::after {
      ${props => props.openedMenu && "display: none"}
    }
  }

  span {
    display: block;
    position: relative;

    &::before {
      top: 6px;
    }

    &::after {
      bottom: 6px;
    }
  }

  span,
  span::before,
  span::after {
    width: 25px;
    height: 2px;
    border-radius: 2px;
    transition: transform 250ms ease-in-out, background 250ms ease-in-out;
    box-shadow: ${props => props.theme.shadows.primary};
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

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.primary};
  padding: 50px 20px;
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

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 35px;
    }

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
