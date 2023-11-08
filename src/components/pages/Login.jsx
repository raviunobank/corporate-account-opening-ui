import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import BackgroundScreen from "../utils/backgroundScreen";

const validationSchema = Yup.object({
  mobileOrEmail: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    mobileOrEmail: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    navigate("/emailverificationlogin");
    resetForm();
  };

  return (
    <BackgroundScreen pageName=" " showBackButton={false}>
      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="text-2xl font-bold text-center my-4">Log In</div>
              <div className="mb-4">
                <Field
                  className="w-full p-2 border-2 border-gray-300 rounded"
                  type="text"
                  id="mobileOrEmail"
                  name="mobileOrEmail"
                  placeholder="Mobile Number or Email-address"
                />
                <ErrorMessage
                  name="mobileOrEmail"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-6">
                <Field
                  className="w-full p-2 border-2 border-gray-300 rounded"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <div className="text-black my-3 text-center">
                Don't have an account yet?{" "}
                <Link
                  to="/contactinformation"
                  className="text-blue-500 font-bold"
                >
                  Register here!
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </BackgroundScreen>
  );
};

export default Login;
