const validation = (userData) => {
  const errors = {};
  
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Invalid email format";
  }
  if (userData.email === "") {
    errors.email = "Email cannot be empty.";
  }
  if (userData.email.length > 35) {
    errors.email = "Email cannot be more than 35 characters long.";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Password must contain at least one number.";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters long.";
  }

  return errors;
};

export default validation;
