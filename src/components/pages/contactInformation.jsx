import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const ContactInformation = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    businessEmail: Yup.string()
      .email("Invalid email address")
      .required("Business Email is required"),
    designation: Yup.string().required("Designation is required"),
  });

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    businessEmail: "",
    designation: "",
  };

  // Dropdown options for Designation
  const designationOptions = [
    "Manager",
    "Supervisor",
    "Developer",
    "Designer",
    "Other",
  ];

  // Submit function
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate("/emailverification");
  };

  return (
    <BackgroundScreen
      pageName="Contact Information"
      onBackButtonClick={() => {
        handleBackButtonClick();
      }}
      showBackButton={true} // Show the back button in this component
    >
      {/* Form using Formik */}
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
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
              <Field
                type="text"
                id="businessEmail"
                name="businessEmail"
                placeholder="Business Email"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="businessEmail"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <Field
                as="select"
                id="designation"
                name="designation"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Designation</option>
                {designationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="designation"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  className="text-blue-500"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-2 text-gray-700 text-sm"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              <ErrorMessage
                name="agreeToTerms"
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

export default ContactInformation;
