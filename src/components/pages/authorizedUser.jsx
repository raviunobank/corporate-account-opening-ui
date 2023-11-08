import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const AuthorizedUser = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    designation: Yup.string().required("Designation is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    accessRights: Yup.string().required("Access Rights is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    designation: "",
    mobileNumber: "",
    emailAddress: "",
    accessRights: "",
  };

  // Dropdown options for Access Rights
  const accessRightsOptions = ["Admin", "Editor", "Viewer", "Custom"];

  // Submit function
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate("/buisnessdocument");
    // You can navigate to the desired screen or perform other actions
  };

  return (
    <BackgroundScreen
      pageName="Authorized User Information"
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
                id="designation"
                name="designation"
                placeholder="Designation"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="designation"
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
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="emailAddress"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <Field
                as="select"
                id="accessRights"
                name="accessRights"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Access Rights</option>
                {accessRightsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="accessRights"
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

export default AuthorizedUser;
