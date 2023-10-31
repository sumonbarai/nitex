import axios from "axios";

export const registerRequest = async (formData) => {
  try {
    const response = await axios.post("/v2/customer/register", formData);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const emailVerificationRequest = async (email) => {
  try {
    const response = await axios.post("/v2/customer/send-verification", {
      emailSubject: "OTP Verification",
      email: email,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const otpVerifyRequest = async (RegEmail, OTP_code) => {
  try {
    const response = await axios.get(
      `/v2/customer/auth/verify?email=${RegEmail}&otp=${OTP_code}`
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const loginRequest = async (reqBody) => {
  try {
    const response = await axios.post("v2/customer/login", reqBody);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const logoutRequest = async () => {
  try {
    const response = await axios.get("v2/customer/logout");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const getAllWishListRequest = async () => {
  try {
    const response = await axios.get("v2/customer/wish");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const addWishListRequest = async (productId) => {
  try {
    const response = await axios.post(`v2/customer/wish/add/${productId}`);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const removeWishListRequest = async (productId) => {
  try {
    const response = await axios.delete(`v2/customer/wish/remove/${productId}`);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const getAllWishListDetailsRequest = async () => {
  try {
    const response = await axios.get("v2/customer/wish/details");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
