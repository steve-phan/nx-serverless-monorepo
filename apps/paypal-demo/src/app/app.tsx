import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const StyledApp = styled.div`
  // Your style here
`;

const paypalInitialOptions = {
  'client-id':
    'AaGMOzsJG3tFL30ngN2O_kQr6GZs2ODcXBonG-jUKZlIMBAFA285kx1ADainFbXhA2Y0skQZP-pcpULY',
  currency: 'USD',
  intent: 'capture',
  'data-client-token':
    'ECfuVeyiK8e5hYSyWDVc6_HUdA0w-Eif91pOAUMtS62voNAOwCTbWYhsEjiw0M8DFIwq2UIKNmumqN1Q',
};

export function App() {
  return (
    <PayPalScriptProvider options={paypalInitialOptions}>
      <StyledApp>
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
        {/* END: routes */}
        <PayPalButtons
          style={{ layout: 'horizontal' }}
          // createOrder={(data, actions) => {
          //   return actions.order.create({
          //     purchase_units: [
          //       {
          //         amount: {
          //           value: '1.99',
          //         },
          //       },
          //     ],
          //   });
          // }}
          // onApprove={(data, actions) => {
          //   return actions.order.capture().then((details) => {
          //     const name = details.payer.name.given_name;
          //     alert(`Transaction completed by ${name}`);
          //   });
          // }}
        />
      </StyledApp>
    </PayPalScriptProvider>
  );
}

export default App;
