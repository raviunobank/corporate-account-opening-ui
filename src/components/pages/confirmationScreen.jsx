import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate, useLocation } from "react-router-dom";

const ConfirmationScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Access the 'text' from the state
  const text = location.state?.text;
  const showBackButton = location.state?.showBackButton;
  const onBackButtonClick = location.state?.onBackButtonClick;

  useEffect(() => {
    console.log(text);
    console.log(showBackButton);
    console.log(onBackButtonClick);
  }, []);

  // Split the text into an array of lines
  const textLines = text.split("\n");

  return (
    <BackgroundScreen
      pageName="Confirmation Screen"
      showBackButton={true}
      onBackButtonClick={handleBackButtonClick}
    >
      <div className="p-4">
        {showBackButton && (
          <div className="mr-4">
            <button onClick={onBackButtonClick} className="text-white">
              <ArrowBackIcon fontSize="medium" />
            </button>
          </div>
        )}
        <p className="p-10 text-black font-semibold">
          {textLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </p>
      </div>
    </BackgroundScreen>
  );
};

export default ConfirmationScreen;
