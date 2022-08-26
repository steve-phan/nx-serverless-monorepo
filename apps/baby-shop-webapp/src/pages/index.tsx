import { Header } from "@nx-serverless-monorepo/header"
import React from "react"
import styled from "styled-components"

const StyledApp = styled.div``

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./baby-shop-webapp.styled-components file.
   */
  return (
    <StyledApp>
      <div className="wrapper">
        <Header company="BabyShop" />
      </div>
    </StyledApp>
  )
}

export default Index
