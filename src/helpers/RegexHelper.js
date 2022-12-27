const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const RegexHelper = {
    EMAIL_REGEX,
    PASSWORD_REGEX
  };

  export default RegexHelper;