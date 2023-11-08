import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const BusinessOwner = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    natureOfWork: Yup.string().required("Nature of Work is required"),
    placeOfBirth: Yup.string().required("Place of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    sourceOfFunds: Yup.string().required("Source of Funds is required"),
    nationality: Yup.string().required("Nationality is required"),
    idDetails: Yup.string().required("ID Details is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    address: "",
    mobileNumber: "",
    natureOfWork: "",
    placeOfBirth: "",
    gender: "",
    sourceOfFunds: "",
    nationality: "",
    idDetails: "",
  };

  // Dropdown options for Gender
  const genderOptions = ["Male", "Female", "Other"];

  // Dropdown options for Nature of Work
  const natureOfWorkOptions = ["Option 1", "Option 2", "Option 3"];

  // Dropdown options for Source of Funds
  const sourceOfFundsOptions = ["Option A", "Option B", "Option C"];

  // Dropdown options for ID Details
  const idDetailsOptions = ["Option X", "Option Y", "Option Z"];

  // Submit function
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate("/confirmationscreen", {
      state: {
        text: "Thank you for choosing UNO Digital Bank! \n Your #UNO@biz application has been saved! \n Log-in to complete your application.",
      },
    });
  };

  return (
    <BackgroundScreen
      pageName="Business Owner"
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
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as="select"
                    id="natureOfWork"
                    name="natureOfWork"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Nature of Work</option>
                    {natureOfWorkOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="natureOfWork"
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
                    type="text"
                    id="placeOfBirth"
                    name="placeOfBirth"
                    placeholder="Place of Birth"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="placeOfBirth"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as="select"
                    id="gender"
                    name="gender"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Gender</option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="gender"
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
                    id="sourceOfFunds"
                    name="sourceOfFunds"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Source of Funds</option>
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
                <div>
                  <Field
                    type="text"
                    id="nationality"
                    name="nationality"
                    placeholder="Nationality"
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="nationality"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <Field
                as="select"
                id="idDetails"
                name="idDetails"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select ID Details</option>
                {idDetailsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="idDetails"
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

export default BusinessOwner;
