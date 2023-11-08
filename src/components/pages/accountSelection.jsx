import React, { useState, useEffect } from "react";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const AccountSelection = () => {
  const navigate = useNavigate();

  // Sample list of existing company accounts (replace with your data)
  const [companyAccounts, setCompanyAccounts] = useState([
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ]);

  // State to track the selected account
  const [selectedAccount, setSelectedAccount] = useState(companyAccounts[0]);

  // Function to select a company account
  const selectCompanyAccount = (account) => {
    setSelectedAccount(account);
  };

  // Function to add a new company account
  const addCompanyAccount = () => {
    // Implement your logic to add a new account here
    // This could involve opening a form or a modal to collect account details
    // Once the new account is added, update the companyAccounts state
    // For example, you can push the new account to the array
    navigate("/companyinformation");
  };

  useEffect(() => {
    // You can perform any necessary side effects here
    // For example, you can fetch additional data related to the selected account
    // This effect will run when the selected account changes
  }, [selectedAccount]);

  return (
    <BackgroundScreen
      pageName="Account Selection"
      onBackButtonClick={() => {
        navigate(-1);
      }}
      showBackButton={true}
    >
      <div className="p-4">
        <h1 className="text-l font-bold py-4">
          Which account would you like to view?
        </h1>

        {/* Display existing company accounts */}
        <ul className="mt-4 space-y-2">
          {companyAccounts.map((account) => (
            <li key={account.id}>
              <button
                className={`w-full p-2 border-2 border-gray-300 rounded ${
                  selectedAccount.id === account.id
                    ? "bg-purple text-white border-none"
                    : "hover:bg-purple hover:text-white hover:border-none focus:bg-purple focus:text-white focus:border-none shadow-lg"
                }`}
                onClick={() => selectCompanyAccount(account)}
              >
                {account.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Button to add a new company account */}
        <div className="mt-4">
          <button
            onClick={addCompanyAccount}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            <AddCircleOutlineIcon /> Open a new #UNObiz account
          </button>
        </div>
      </div>
    </BackgroundScreen>
  );
};

export default AccountSelection;
