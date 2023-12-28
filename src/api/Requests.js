import Url from "./baseUrl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp_Request = async (body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.post("auth/register", body);
    console.log("SignUp response", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};
const Login_Request = async (body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.post("auth/login", body);
    console.log("Login response", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};
const Get_All_Events = async (body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.get("events/getallevents", body);
    console.log("Get_All_Events response", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};

const Get_Single_Event = async (eventID) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    const response = await inst.get(`events/getevent/${eventID}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Invalid Error!");
    }
  }
};
const delete_user_Account = async (token, userId) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.delete(`auth/delete/${userId}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Invalid Error!");
    }
  }
};

export { Get_All_Events, Get_Single_Event };
