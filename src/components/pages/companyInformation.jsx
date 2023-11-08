import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const CompanyInformation = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    businessType: Yup.string().required("Type of Business is required"),
    businessName: Yup.string().required("Business Name is required"),
    businessTIN: Yup.string().required("Business TIN is required"),
    companyRegNo: Yup.string().required("Company Reg No. is required"),
    establishmentDate: Yup.date().required("Date of Establishment is required"),
    placeOfIncorporation: Yup.string().required(
      "Place of Incorporation is required"
    ),
    industry: Yup.string().required("Industry is required"),
    sourceOfFunds: Yup.string().required("Source of Funds is required"),
    companyAddress: Yup.string().required("Company Address is required"),
  });

  // Initial form values
  const initialValues = {
    businessType: "",
    businessName: "",
    businessTIN: "",
    companyRegNo: "",
    establishmentDate: "",
    placeOfIncorporation: "",
    industry: "",
    sourceOfFunds: "",
    companyAddress: "",
  };

  // Dropdown options for Business Type
  const businessTypeOptions = ["Type 1", "Type 2", "Type 3"];

  // Dropdown options for Place of Incorporation
  const placeOfIncorporationOptions = ["Place 1", "Place 2", "Place 3"];

  // Dropdown options for Industry
  const industryOptions = ["Industry 1", "Industry 2", "Industry 3"];

  // Dropdown options for Source of Funds
  const sourceOfFundsOptions = ["Funds 1", "Funds 2", "Funds 3"];

  // Submit function
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate("/buisnessowner");
  };

  return (
    <BackgroundScreen
      pageName="Company Information"
      onBackButtonClick={handleBackButtonClick}
      showBackButton={true}
    >
      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                as="select"
                id="businessType"
                name="businessType"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Type of Business</option>
                {businessTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="businessType"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <Field
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Business Name"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="businessName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    id="businessTIN"
                    name="businessTIN"
                    placeholder="Business TIN"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="businessTIN"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    id="companyRegNo"
                    name="companyRegNo"
                    placeholder="Company Reg No."
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="companyRegNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field
                    type="date"
                    id="establishmentDate"
                    name="establishmentDate"
                    placeholder="Date of Establishment"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="establishmentDate"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as="select"
                    id="placeOfIncorporation"
                    name="placeOfIncorporation"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Place of Incorporation</option>
                    {placeOfIncorporationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="placeOfIncorporation"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field
                    as="select"
                    id="industry"
                    name="industry"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Industry</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="industry"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as="select"
                    id="sourceOfFunds"
                    name="sourceOfFunds"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Source of Funds</option>
                    {sourceOfFundsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="sourceOfFunds"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <Field
                as="textarea"
                id="companyAddress"
                name="companyAddress"
                placeholder="Company Address"
                rows="4"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="companyAddress"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </BackgroundScreen>
  );
};

export default CompanyInformation;
