import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

import { loginRequest } from "../ApiRequest/ApiRequest";
import LineLoader from "../components/ui/LineLoader";
import {
  errorNotification,
  successNotification,
} from "../utils/NotificationHelper";
import { setLocalStorage } from "../utils/SessionHelper";
import useLoggedIn from "../hooks/useLoggedIn";

const initialState = {
  emailOrUsername: "test@gmail.com",
  password: "test123",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [, setAuth] = useAuth();

  const from = location?.state?.from?.pathname || "/";

  // checking user is login or not
  const isLoggedIn = useLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate(from, { replace: true });
    }
  }, [isLoggedIn, navigate, from]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const input = formData.emailOrUsername;
    const isEmail = input.includes("@");

    const reqBody = isEmail
      ? { email: input, password: formData.password }
      : { username: input, password: formData.password };

    const { data, status } = await loginRequest(reqBody);

    if (status === 200 && data.token) {
      const userInfo = {
        user: data?.data,
        token: data.token,
      };

      setAuth(userInfo);
      setLocalStorage("userInfo", userInfo);

      successNotification("login success");
      navigate(from, { replace: true });
    } else {
      setError("User Credentials incorrect");
      errorNotification("User Credentials incorrect");
    }

    setLoading(false);
  };

  return (
    <section
      className="bg-gray-50 flex justify-center items-center"
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <p className="text-2xl text-red-600 text-center">
          i am using free backend server so please wait for sometime for backend
          response
        </p>
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          Log In
        </h1>
        <div className="w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 px-4">
            <label className="block mb-2 text-sm text-left font-medium text-gray-800">
              Email or Username
            </label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Enter Your Email or Username"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>

          <div className="mb-6 px-4">
            <label className="block mb-2 text-sm text-left font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          {error && (
            <p className="text-center text-red-600 capitalize p-2">{error}</p>
          )}

          <div className="mb-8 px-4 text-center">
            <Button
              variant="basic"
              size="normal"
              type="button"
              text="Log In"
              onClick={handleSubmit}
            />
          </div>

          <h3 className="mt-3 mb-4 text-center">
            Create a new account?
            <span className="text-orange-500">
              <Link to="/register">Register</Link>
            </span>
          </h3>
        </form>
      </div>
      {loading && <LineLoader />}
    </section>
  );
};

export default Login;
