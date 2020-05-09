import React from "react"

import { Container, SectionTitle } from "./styles"

export default function Section({
  id,
  title,
  background,
  viewportHeight,
  children,
}) {
  return (
    <Container id={id} background={background} viewportHeight={viewportHeight}>
      <div>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </div>
    </Container>
  )
}
