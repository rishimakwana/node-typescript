const VALIDATION_MESSAGES = {
  REQUIRED_FIELD_MISSING: "Required field is missing.",
  PASSWORD_NOT_MATCH: "Incorrect password. Please try again.",
  INVALID_PASS_LENGTH: "Invalid password (minimum 8 characters required).",
  INVALID_PASS: "Invalid password.",
  INVALID_EMAIL: "Invalid email address.",
  INVALID_EMAIL_PWD: "Invalid email or Password.",
  INVALID_USERID: "Invalid user ID.",
  AMOUNT_MUST_NUMERIC: "Amount must be a numeric value.",
};

const USER_MESSAGES = {
  USER_NOT_FOUND:"User not found.",
  ALREADY_CREATE: "User already registered.",
  CHECK_EMAIL_PASS: "Email or password is required.",
  EMAIL_REQR: "Email is required.",
  NAME_REQR: "Name is required.",
  INVALID_PHONE: "Invalid phone number.",
  PHONE_REQR: "Phone number is required.",
  PASSWORD: "Password is required.",
  SOMETHING_WENT_WRONG: "Oops! Something went wrong.",
  EMAIL_ALREADY_EXISTS: "Email address already in use.",
  EMAIL_NOT_EXISTS: "Please enter a valid email address.",
  SIGNUPSUCCESS: "Signup successfully.",
  PASSWORD_RESET_REQUEST: "Password reset request send successfully.",
  PASS_REQ_RESET_TOKEN: "Please enter Pasword or Reset token.",
  PASSWORD_RESET_SUCCESS: "Pasword Reset successfully.",
  EMAIL_NOT_REGISTER: "Email is not registered.",
  VERIFICATION_TOKEN_MISSING: "Verification token is missing.",
  INVALID_VERIFICATION_TOKEN: "Invalid Verification token.",
  ALREADY_VERIFIED: "User already varified.",
  EMAIL_VERIFIED: "Email address is varified.",
  USER_DELETED: "User deleted successfully.",
};

const ERROR_MESSAGES = {
  UNAUTHORIZED: "Unauthorized.",
  INTERNAL_SERVER_ERROR: "Internal server error.",
  EXPIRED_RESET_TOKEN: "Token expired.",
  INVALID_RESET_TOKEN: "Invalid reset token.",
};

const BLOG_MESSAGES = {
  BLOG_CREATED: "Blog created successfully.",
  BLOG_NOT_FOUND: "Blog not found.",
  BLOG_DELETED: "Blog deleted successfully.",
  BLOG_UPDATED: "Blog updated.",
  INVALID_BLOGId_CONTENT_TITLE: "Please enter a valid blogId, content, or title.",
  INVALID_BLOGId: "Invalid blog Id.",
};
const POLICY_MESSAGES = {
  POLICY_ADDED: "Policy added successfully.",
  POLICY_NOTFOUND: "Policy not found.",
  INVALID_POLICY: "Invalid updates!"
};
const RENTAL_MESSAGES = {
  RENTAL_NOT_FOUND: "Rental not found.",
  INVALID_RENTAL_DATA: "Invalid rental data provided.",
  RENTAL_CREATED: "Rental created successfully.",
  RENTAL_UPDATED: "Rental updated successfully.",
  RENTAL_DELETED: "Rental deleted successfully.",
};
const BOOKING_MESSAGES = {
  BOOKING_CREATED: "Booking created successfully.",
  BOOKING_NOT_FOUND: "Booking not found.",
  BOOKING_DELETED: "Booking deleted successfully.",
  BOOKING_CANCELLED: "Booking cancelled successfully.",
  BOOKING_ALREADY_CANCELLED: "Booking is already cancelled.",
};

const PACKAGE_MESSAGES = {
  PACKAGE_CREATED: "Trip package created successfully.",
  PACKAGE_NOTFOUND: "Trip package not found.",
  PACKAGE_UPDATED: "Trip package updated successfully.",
  PACKAGE_DELETED: "Trip package deleted successfully.",
};

const PROFILE_MESSAGES = {
  USER_ID_REQUIRED: "User ID is required.",
  NO_CHANGES: "No changes made or user not found.",
  PROFILE_UPDATED: "Profile updated successfully.",
};

const AUTHENTICATION_MESSAGES = {
  EMAIL_SENT: "Verification code email sent successfully.",
  EMAIL_SENT_ERROR: "Error on sending email.",
  VALIDATION_ERROR: "Validation error.",
};

const GENERAL_MESSAGES = {
  DB_CONNECTED: "Connected to the database.",
  FAILED_TO_CONNECT: "Failed to connect to the database.",
  PAYMENT_SUCCESS: "Payment Success.",
  RATE_LIMIT_EXCEEDED: "Rate limit exceeded, Please try after some time",
};

const MESSAGE = {
  Failed: 0,
  OK: 1,
  Success: "Success",
  ...POLICY_MESSAGES,
  ...VALIDATION_MESSAGES,
  ...USER_MESSAGES,
  ...BLOG_MESSAGES,
  ...BOOKING_MESSAGES,
  ...PACKAGE_MESSAGES,
  ...PROFILE_MESSAGES,
  ...AUTHENTICATION_MESSAGES,
  ...GENERAL_MESSAGES,
  ...ERROR_MESSAGES,
  ...RENTAL_MESSAGES
};

export default MESSAGE;
