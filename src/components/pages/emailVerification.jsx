import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackgroundScreen from "../utils/backgroundScreen";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();
  const otpInputRefs = Array(6)
    .fill(null)
    .map(() => useRef(null));
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const [submitted, setSubmitted] = useState(false);

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  // Initial form values
  const initialValues = {
    otp: "",
  };

  // Function to handle OTP input
  const handleOtpInput = (e, index, setFieldValue) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length === 1) {
      // Update the OTP value
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setFieldValue("otp", newOtp.join(""));

      // Focus on the next input field (if available)
      if (index < otp.length - 1 && otpInputRefs[index + 1]?.current) {
        otpInputRefs[index + 1].current.focus();
      }
    } else if (value === "" && index >= 0) {
      // Delete the digit when backspace is pressed
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      setFieldValue("otp", newOtp.join(""));

      // Focus on the previous input field (if available)
      if (index > 0 && otpInputRefs[index - 1]?.current) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  };

  // Function to handle OTP paste
  const handleOtpPaste = (e, setFieldValue) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain");
    if (pasteData.length === 6 && !isNaN(pasteData)) {
      // Update the OTP value
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      setFieldValue("otp", newOtp.join(""));
    }
  };

  // Submit function
  const handleSubmit = (values) => {
    // Handle OTP submission here
    console.log(values);
    setSubmitted(true); // Mark the form as submitted
    navigate("/mobilenumberverification");
  };

  // Email address for display
  const emailAddress = "user@example.com"; // Replace with the actual email address

  return (
    <BackgroundScreen
      pageName="Email Verification"
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
          {({ values, setFieldValue, errors }) => (
            <Form>
              <p className="text-center text-gray-600 px-3 pb-5">
                Please enter the OTP sent to {emailAddress}
              </p>
              <div className="mb-4">
                <div className="flex justify-center space-x-2">
                  {otp.map((digit, index) => (
                    <Field
                      key={index}
                      type="text"
                      id={`otp-${index}`}
                      name="otp"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpInput(e, index, setFieldValue)}
                      onPaste={(e) => handleOtpPaste(e, setFieldValue)}
                      className="w-10 h-10 text-center border-2 border-gray-300 rounded text-xl"
                      innerRef={otpInputRefs[index]}
                    />
                  ))}
                </div>
                {submitted && errors.otp && (
                  <div className="text-red-500">{errors.otp}</div>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit OTP
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </BackgroundScreen>
  );
};

export default EmailVerification;
