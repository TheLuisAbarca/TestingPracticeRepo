function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else {
    return "Invalid string";
  }
}

function reverseString(string) {
  if (string.length > 0 && string.length < 10) {
    return string.split("").reverse().join("");
  } else {
    return "Invalid string";
  }
}

function capitalizeString(string) {
    const regExp = /[a-z]/;
  if (string.length > 0 && string.length < 10) {
    if (regExp.test(string.charAt(0)) === true) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return "The first character is neither a lowercase letter or is not a letter";
    }
  } else {
      return "Invalid string";
  }

}

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  checkParameterExists() {
    if (this.num1 && this.num2) {
        return true;
    } else {
        return false;
    }
  }

  checkParametersType() {
    if (typeof this.num1 === "number" && typeof this.num2 === "number") {
      return true;
    } else {
      return false;
    }
  }

  add() {
    if (!this.checkParameterExists()) {
      return "Parameters are missing.";
    }
    if (!this.checkParametersType()) {
      return "Parameters must be numbers.";
    }
    return this.num1 + this.num2;
  }

  subtract() {
    if (!this.checkParameterExists()) {
      return "Parameters are missing.";
    }
    if (!this.checkParametersType()) {
      return "Parameters must be numbers.";
    }
    return this.num1 - this.num2;
  }

  multiply() {
    if (!this.checkParameterExists()) {
        return "Parameters are missing.";
    }
    if (!this.checkParametersType()) {
      return "Parameters must be numbers.";
    }
    return this.num1 * this.num2;
  }

  divide() {
    if (!this.checkParameterExists()) {
      return "Parameters are missing.";
    }
    if (!this.checkParametersType()) {
      return "Parameters must be numbers.";
    }
    return this.num1 / this.num2;
  }
}

module.exports = {stringLength, reverseString, capitalizeString, Calculator};