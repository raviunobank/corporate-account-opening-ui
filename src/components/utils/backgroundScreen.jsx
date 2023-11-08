import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../common/Header";

const BackgroundScreen = ({
  pageName,
  children,
  showBackButton,
  onBackButtonClick,
}) => {
  return (
    <>
      <section className="h-screen flex flex-col overflow-hidden w-screen max-w-sm bg-gradient-to-r from-capri via-frenchViolet via-steelpink to-goldenrod">
        <Header />
        <div className="flex flex-col justify-start items-start h-screen">
          <div className="pt-8 flex justify-start mx-5">
            {showBackButton && (
              <div className="mr-4">
                <button
                  onClick={onBackButtonClick}
                  className="text-white"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ArrowBackIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                    style={{ marginTop: "4px" }}
                  />
                </button>
              </div>
            )}
            <h1 className="text-xl font-bold text-white">{pageName}</h1>
          </div>
          <div className="mt-10 w-full flex-grow bg-white rounded-t-3xl">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default BackgroundScreen;
