module.exports = {
  emptyString: function isStringVariableSet(variable) {
    if (variable !== undefined) {
      if (variable !== null) {
        if (variable.toString().trim() !== '') {
          return true; // If its not null or empty
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
