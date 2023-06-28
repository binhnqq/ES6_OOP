class Validation {
  constructor() {
  }
  checkID = (id) => {
      if ((id > 0 && id <= 999)) {
          return true;
      }
      return false;
  }
  checkValid = (value, regex) => {
      if (regex.test(value)) {
          return true;
      }
      else {
          return false;
      }
  }
  checkEmpty = (value) => {
      if (value !== '') {
          return true;
      }
      else {
          return false;
      }
  }
}
export default Validation;