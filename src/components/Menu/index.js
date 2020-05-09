import React, { useState, useEffect, useRef } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import { MenuContainer, Hamburger } from "./styles"

export default function Menu() {
  const menu = useRef(null)
  const [openedMenu, setOpenedMenu] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      openedMenu
        ? disableBodyScroll(menu.current)
        : enableBodyScroll(menu.current)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [openedMenu, menu])

  const handleClick = sectionName => {
    setOpenedMenu(!openedMenu)
    scrollTo(sectionName)
  }

  return (
    <>
      <Hamburger
        onClick={() => setOpenedMenu(!openedMenu)}
        openedMenu={openedMenu}
        aria-label="Open menu"
      >
        <span></span>
      </Hamburger>

      <MenuContainer openedMenu={openedMenu} ref={menu}>
        <button
          onClick={() => handleClick("#intro")}
          tabIndex="0"
          aria-label="Go to intro"
        >
          Intro
        </button>
        <button
          onClick={() => handleClick("#about")}
          tabIndex="0"
          aria-label="Go to about"
        >
          About
        </button>
        <button
          onClick={() => handleClick("#skills")}
          tabIndex="0"
          aria-label="Go to skills"
        >
          Skills
        </button>
        <button
          onClick={() => handleClick("#portfolio")}
          tabIndex="0"
          aria-label="Go to portfolio"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleClick("#footer")}
          tabIndex="0"
          aria-label="Go to footer"
        >
          Contacts
        </button>
      </MenuContainer>
    </>
  )
}
