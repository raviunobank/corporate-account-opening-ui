import { useState } from "react";
import "./App.css";
import Login from "./components/pages/Login.jsx";
import ContactInformation from "./components/pages/contactinformation.jsx";
import EmailVerification from "./components/pages/emailVerification";
import MobileNumberVerification from "./components/pages/mobileNumberVerification";
import SetPassword from "./components/pages/setPassword";
import EmailVerificationLogin from "./components/pages/emailVerificationLogIn";
import AccountSelection from "./components/pages/accountSelection";
import CompanyInformation from "./components/pages/companyInformation";
import BusinessOwner from "./components/pages/businessOwner.jsx";
import AuthorizedUser from "./components/pages/authorizedUser.jsx";
import BusinessDocument from "./components/pages/buisnessDocument.jsx";
import ConfirmationScreen from "./components/pages/confirmationScreen.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/contactinformation",
    element: <ContactInformation />,
  },
  {
    path: "/emailverification",
    element: <EmailVerification />,
  },
  {
    path: "/mobilenumberverification",
    element: <MobileNumberVerification />,
  },
  {
    path: "/setpassword",
    element: <SetPassword />,
  },
  {
    path: "/emailverificationlogin",
    element: <EmailVerificationLogin />,
  },
  {
    path: "/accountselection",
    element: <AccountSelection />,
  },
  {
    path: "/companyinformation",
    element: <CompanyInformation />,
  },
  {
    path: "buisnessowner",
    element: <BusinessOwner />,
  },
  {
    path: "authorizeduser",
    element: <AuthorizedUser />,
  },
  {
    path: "buisnessdocument",
    element: <BusinessDocument />,
  },
  {
    path: "confirmationscreen",
    element: <ConfirmationScreen />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
