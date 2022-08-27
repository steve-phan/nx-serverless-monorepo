import { Header } from "@nx-serverless-monorepo/header"
import React from "react"
import styled from "styled-components"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const paypalInitialOptions = {
  "client-id":
    "AaGMOzsJG3tFL30ngN2O_kQr6GZs2ODcXBonG-jUKZlIMBAFA285kx1ADainFbXhA2Y0skQZP-pcpULY",
  currency: "EUR",
  intent: "capture",
  "data-client-token":
    "ECfuVeyiK8e5hYSyWDVc6_HUdA0w-Eif91pOAUMtS62voNAOwCTbWYhsEjiw0M8DFIwq2UIKNmumqN1Q",
}

const StyledApp = styled.div``

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./baby-shop-webapp.styled-components file.
   */
  return (
    <PayPalScriptProvider options={paypalInitialOptions}>
      <StyledApp>
        <div className="wrapper">
          <Header company="BabyShop" />
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.99",
                    },
                  },
                ],
              })
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(details => {
                const name = details.payer.name.given_name
                alert(`Transaction completed by ${name}`)
              })
            }}
          />
        </div>
      </StyledApp>
    </PayPalScriptProvider>
  )
}

export default Index
