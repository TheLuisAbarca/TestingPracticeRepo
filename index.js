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

module.exports = {stringLength, reverseString};