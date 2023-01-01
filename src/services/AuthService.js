import UserService from "./UserService";

const { getByEmailAsync, addAsync } = UserService;

const register = async (user) => {
  //Email kontrol
  const foundUser = await getByEmailAsync(user.email);
  if (foundUser) {
    return false; //TODO: Dönüş tipini düzelt
  }

  // Kullanıcı ekle
  const addedUser = await addAsync(user);
  return addedUser ? true : false;
};

const login = async (email, password) => {};

const AuthService = {
  register,
  login
};

export default AuthService;
