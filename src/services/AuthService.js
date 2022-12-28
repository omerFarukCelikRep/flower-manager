import ApiService from "./ApiService";
import UserService from "./UserService";

const { getAsync, postAsync } = ApiService;
const { getByEmail } = UserService;

const register = (user) => {
  //Email kontrol
  if(getByEmail(user.email)){
    return false;
  }
  
  // Kullanıcı ekle
};

const AuthService = {
  register,
};

export default AuthService;
