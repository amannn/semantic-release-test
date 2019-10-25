module.exports = function leftPad(str, length, char) {
  while (str.length < length) {
    str = char + str;
  }

  return str;
};
