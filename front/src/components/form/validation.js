const validation = (userData) => {
  const errors = {};
  
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Tiene que ser un email"
  }
  if(userData.email === "") {
      errors.email = "No puede estar vacío."
  }
  if(userData.email.length > 35) {
      errors.email = "No puede tener más de 35 caracteres"
  }

  if(!/\d/.test(userData.password)) {
      errors.password = "Tiene que tener al menos un número"
  }
  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "tiene que tener una longitud entre 6 y 10 caracteres"
  }

  return errors;
}

export default validation;