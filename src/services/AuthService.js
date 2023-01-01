import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import UserService from "./UserService";

const { getByEmailAsync, addAsync } = UserService;
const result = {
  isSuccess: false,
  message: "",
  data: null,
};

const register = async (user) => {
  const foundUser = await getByEmailAsync(user.email);
  if (foundUser) {
    result.message = "There is already a user, registered with the email! ";
    return result;
  }

  delete user.confirmedPassword;
  const addedUser = await addAsync(user);
  if (addedUser) {
    result.data = addedUser;
    result.message = "Registered Successfully";
    result.isSuccess = true;
  } else {
    result.message = "Invalid Request!";
  }

  return result;
};

const login = async (email, password) => {
  result.message = "Email or password wrong!";
  const user = await getByEmailAsync(email);
  if (!user) {
    return result;
  }

  if (user.password !== password) {
    return result;
  }

  result.isSuccess = true;
  result.message = "Login Success";
  result.data = user;

  return result;
};

const AuthService = {
  register,
  login,
};

export default AuthService;
