// Show inputs error message
export const showError = (input, message) => {
  input.classList.add("is-invalid");

  // Return de divs
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  // El query selector toma una clase, id, etiqueta
  const small = formGroup.querySelector("small");
  small.innerText = message;
};

// Show succes outline
export const showSuccess = (input) => {
  input.classList.remove("is-invalid");

  const formGroup = input.parentElement;
  formGroup.className = "form-group";
};

// check email is valid
export const emailIsValid = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
};

export const checkRequired = (inputArr) => {
  let returnValue = true;
  inputArr.forEach(function (input) {
    //each input is the tag
    //trim function eliminate the blank spaces
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      returnValue = false;
    } else {
      showSuccess(input);
    }
  });
  return returnValue;
};

// Check input length
export const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
    return true;
  }

  return false;
};

const getFieldName = (input) => {
  //Get the first letter and make  uppercase
  //and get all the string from the position 1
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
