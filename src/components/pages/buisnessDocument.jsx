import React, { useState } from "react";
import BackgroundScreen from "../utils/backgroundScreen";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const BusinessDocumentScreen = () => {
  const navigate = useNavigate();
  const [uploads, setUploads] = useState({
    secCertificateOfIncorporation: null,
    articlesOfIncorporation: null,
    byLaws: null,
    generalInformationSheet: null,
    securitiesCertificate: null,
  });

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleFileUpload = (event, documentType) => {
    const file = event.target.files[0];

    setUploads((prevState) => ({
      ...prevState,
      [documentType]: file,
    }));
  };

  const handleUploadButtonClick = (documentType) => {
    document.getElementById(documentType)?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded files:", uploads);

    // Navigate to TextScreen with the specified text
    navigate("/confirmationscreen", {
      state: {
        text: "Thank you for choosing UNO Digital Bank! \n Your account will be ready in 3 to 5 banking days!",
      },
    });
  };

  return (
    <BackgroundScreen
      pageName="Business Document Upload"
      showBackButton={true}
      onBackButtonClick={handleBackButtonClick}
    >
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          {Object.keys(uploads).map((documentType) => (
            <div key={documentType} className="mb-4">
              <input
                type="file"
                id={documentType}
                name={documentType}
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e, documentType)}
              />
              <button
                type="button"
                onClick={() => handleUploadButtonClick(documentType)}
                className="w-full text-left px-3 py-2 text-gray-700 bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cobaltblue focus:border-cobaltblue hover:bg-cobaltblue focus:bg-cobaltblue hover:text-white focus:text-white group"
              >
                <AddCircleOutlineIcon className="text-xl text-gray-500 group-hover:text-white group-focus:text-white" />{" "}
                {documentType.replace(/([A-Z])/g, " $1").toLocaleUpperCase()}
              </button>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-400 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </BackgroundScreen>
  );
};

export default BusinessDocumentScreen;
