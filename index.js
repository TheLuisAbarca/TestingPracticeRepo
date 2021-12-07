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
const num1 = new Calculator(10, 5);
console.log(num1.add());
module.exports = {stringLength, reverseString, Calculator};