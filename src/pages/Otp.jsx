import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { getLocalStorage, removeLocalStorage } from "../utils/SessionHelper";

import {
  emailVerificationRequest,
  otpVerifyRequest,
} from "../ApiRequest/ApiRequest";
import {
  errorNotification,
  successNotification,
} from "../utils/NotificationHelper";
import LineLoader from "../components/ui/LineLoader";
import useLoggedIn from "../hooks/useLoggedIn";
import ReactCodeInput from "react-code-input";

const Otp = () => {
  const [otpDigits, setOtpDigits] = useState("");

  const RegEmail = getLocalStorage("RegEmail");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // checking user is login or not
  const isLoggedIn = useLoggedIn();
  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleOtpChange = (e) => {
    setOtpDigits(e);
  };

  // verify otp code
  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (otpDigits === "") {
      errorNotification("Please enter the OTP before verifying.");
      return;
    }

    const { status, data } = await otpVerifyRequest(RegEmail, otpDigits);

    if (status !== 200) {
      errorNotification(errorNotification(data?.error?.message));
    } else {
      successNotification("OTP verify success");
      navigate("/login");
    }
    setLoading(false);
    setOtpDigits("");
    removeLocalStorage("RegEmail");
  };

  // resend opt code
  const handleResend = async () => {
    setLoading(true);
    const { status } = await emailVerificationRequest(RegEmail);
    if (status === 200) {
      successNotification("OTP Send for verification");
    }
    setLoading(false);
    setOtpDigits("");
  };

  return (
    <section
      className="bg-gray-50  flex justify-center items-center "
      style={{ height: "calc(100vh - 78px)", width: "100%" }}
    >
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="block mb-2 mt-4 text-center text-3xl font-medium text-gray-900">
          OTP
        </h2>
        <div className="w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300"></div>
        <form>
          <div className="mb-6 px-4 text-center">
            <h2 className="block mb-2 text-xl text-center font-medium text-gray-800">
              Please Enter the one time password to verify your account
            </h2>
            <p className="text-center">
              Your Verification code has been send {RegEmail}
            </p>

            {/* <div className="flex space-x-2 mt-8">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div> */}

            <ReactCodeInput type="text" fields={6} onChange={handleOtpChange} />
          </div>

          <div className=" flex gap-2 justify-center">
            <Button
              variant="basic"
              size="normal"
              type="button"
              text="Verify OTP"
              onClick={handleVerify}
            />
            <Button
              variant="outline"
              size="normal"
              type="button"
              text="Resend OTP"
              onClick={handleResend}
            />
          </div>
        </form>
        {loading && <LineLoader />}
      </div>
    </section>
  );
};

export default Otp;
