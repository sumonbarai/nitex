import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  emailVerificationRequest,
  registerRequest,
} from "../ApiRequest/ApiRequest";
import {
  errorNotification,
  successNotification,
} from "../utils/NotificationHelper";
import { setLocalStorage } from "../utils/SessionHelper";
import LineLoader from "../components/ui/LineLoader";
import useLoggedIn from "../hooks/useLoggedIn";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // checking user is login or not
  const isLoggedIn = useLoggedIn();
  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { status, data } = await registerRequest(formData);

    if (status === 200) {
      const { status, data } = await emailVerificationRequest(formData.email);

      if (status === 200) {
        setLocalStorage("RegEmail", formData.email);
        successNotification(
          "Registration Successful please verify your Email Address"
        );
        navigate("/otp");
      } else {
        setError(data?.error?.message);
        errorNotification(data?.error?.message);
        setLoading(false);
      }
    } else {
      setError(data?.error?.message);
      errorNotification(data?.error?.message);
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-gray-50 flex justify-center items-center"
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 md:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          Register
        </h1>
        <div className="w-32 mx-auto h-0.5 mb-6 mt-0 bg-orange-500"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 px-4">
            <label
              htmlFor="User name"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Email{" "}
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Password{" "}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              htmlFor="Confirm password"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Confirm password{" "}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-8 px-4 text-center">
            <Button
              variant="basic"
              size="normal"
              type="submit"
              text=" Register"
            />
          </div>

          {error && (
            <p className="text-center text-red-600 capitalize">{error}</p>
          )}

          <h3 className="mt-3 mb-4 text-center">
            {" "}
            Already have an account?{" "}
            <span className="text-orange-500 hover:underline">
              <Link to="/login"> Login</Link>
            </span>{" "}
          </h3>
        </form>
      </div>
      {loading && <LineLoader />}
    </section>
  );
};

export default Register;
