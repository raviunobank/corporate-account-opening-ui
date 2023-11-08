import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const SetPassword = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  // Initial form values
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // Password rules text
  const passwordRulesText = (
    <div className="text-left mb-2 p-4">
      <p className="text-gray-600 text-sm font-bold mb-2">
        Set up your Log in password:
      </p>
      <ul className="list-disc pl-5">
        <li>At least 8 characters in length</li>
        <li>Must have at least 1 special character</li>
        <li>Must have at least 1 uppercase character</li>
        <li>Must have at least 1 lowercase character</li>
        <li>Must have at least 1 number</li>
      </ul>
    </div>
  );

  // Submit function
  const handleSubmit = (values) => {
    // Handle password submission here
    console.log(values);
    setSubmitted(true); // Mark the form as submitted
    navigate("/accountselection"); // Replace with the appropriate success page route
  };

  return (
    <BackgroundScreen
      pageName="Set Password"
      onBackButtonClick={() => {
        navigate(-1);
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
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-4">
                {passwordRulesText}{" "}
                {/* Display password rules above the input */}
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border-2 border-gray-300 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className="w-full p-2 border-2 border-gray-300 rounded"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {submitted && !errors.password && (
                <p className="text-green-500">
                  Password has been set successfully!
                </p>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
                disabled={isSubmitting}
              >
                Set Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </BackgroundScreen>
  );
};

export default SetPassword;
