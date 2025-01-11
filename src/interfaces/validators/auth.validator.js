class AuthValidator {
  // Configuration limits
  static PASSWORD_MIN_LENGTH = 6;
  static SEMESTER_MIN = 1;
  static SEMESTER_MAX = 10;

  /**
   * Checks if an email is valid.
   * @param {string} email - The email to validate.
   * @returns {boolean} - True if the email is valid, false otherwise.
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Checks if a password meets the required criteria:
   * - At least one number
   * - At least one uppercase letter
   * - At least one lowercase letter
   * - At least one special character
   * - Minimum length of 6 characters
   * @param {string} password - The password to validate.
   * @returns {boolean} - True if the password is valid, false otherwise.
   */
  static isValidPassword(password) {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{6,}$/;
    return passwordRegex.test(password);
  }

  /**
   * Validates user data for signup.
   * @param {Object} data - The user data to validate.
   * @param {string} data.first_name - The first name of the user.
   * @param {string} data.last_name - The last name of the user.
   * @param {string} data.email - The email of the user.
   * @param {string} data.password - The password of the user.
   * @param {number} data.semester - The semester of the user (1-10).
   * @returns {Array<string>} - A list of validation errors, if any.
   */
  static validateSignup(data) {
    const errors = [];

    if (!data.first_name || typeof data.first_name !== "string") {
      errors.push("First name is required and must be a valid string.");
    }

    if (!data.last_name || typeof data.last_name !== "string") {
      errors.push("Last name is required and must be a valid string.");
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push(
        `A valid email is required. Provided: ${data.email || "None"}`
      );
    }

    if (!data.password || !this.isValidPassword(data.password)) {
      errors.push(
        "Password must be at least 6 characters long, contain at least one number, one uppercase letter, one lowercase letter, and one special character."
      );
    }

    if (
      typeof data.semester !== "number" ||
      data.semester < this.SEMESTER_MIN ||
      data.semester > this.SEMESTER_MAX
    ) {
      errors.push(
        `Semester must be a number between ${this.SEMESTER_MIN} and ${this.SEMESTER_MAX}. Provided: ${data.semester}`
      );
    }

    return errors;
  }

  /**
   * Validates user data for login.
   * @param {Object} data - The user data to validate.
   * @param {string} data.email - The email of the user.
   * @param {string} data.password - The password of the user.
   * @returns {Array<string>} - A list of validation errors, if any.
   */
  static validateLogin(data) {
    const errors = [];

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push(
        `A valid email is required. Provided: ${data.email || "None"}`
      );
    }

    if (!data.password) {
      errors.push("Password is required.");
    }

    return errors;
  }
}

export default AuthValidator;
