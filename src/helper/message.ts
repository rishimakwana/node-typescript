const VALIDATION_MESSAGES = {
  REQUIRED_FIELD_MISSING: "Required field is missing.",
  PASSWORD_NOT_MATCH: "Incorrect password. Please try again.",
  INVALID_PASS_LENGTH: "Invalid password (minimum 8 characters required).",
  INVALID_PASS: "Invalid password.",
  INVALID_TOKEN: "Invalid token.",
  INVALID_EMAIL: "Invalid email address.",
  INVALID_EMAIL_PWD: "Invalid email or Password.",
  INVALID_USERID: "Invalid user ID.",
  AMOUNT_MUST_NUMERIC: "Amount must be a numeric value.",
};

const USER_MESSAGES = {
  USERID_IS_NOT_CORRECT: "User id is invalid.",
  USER_NOT_FOUND: "User not found.",
  ALREADY_CREATE: "User already registered.",
  CHECK_EMAIL_PASS: "Email or password is required.",
  EMAIL_REQR: "Email is required.",
  NAME_REQR: "Name is required.",
  INVALID_PHONE: "Invalid phone number.",
  PHONE_MIN_LENGTH: "Phone number minimum length must be 10.",
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
  PREMIUM_REQR: "Policy premium is required.",
  INVALID_PREMIUM: "Invalid policy premium.",
  COVERAGE_REQR: "Coverage is required.",
  DESCRIPTION_REQR: "Policy description is required.",
  POLICY_NAME_REQR: "Policy name required.",
  POLICY_ADDED: "Policy added successfully.",
  POLICY_NOTFOUND: "Policy not found.",
  POLICY_DELETED: "Policy deleted successfully.",
  POLICY_UPDATED: "Policy updated successfully.",
  INVALID_POLICY: "Invalid updates!",
  INVALID_TRIP_CANCELLATION_COVERAGE: "Trip cancellation coverage must be a boolean value.",
  INVALID_EMERGENCY_MEDICAL_COVERAGE: "Emergency medical coverage must be a boolean value.",
  INVALID_BAGGAGE_COVERAGE: "Baggage coverage must be a boolean value.",
  TRIP_START_DATE_REQR: "Trip start date is required.",
  INVALID_TRIP_START_DATE: "Invalid trip start date format. Please provide a valid ISO 8601 date format.",
  TRIP_END_DATE_REQR: "Trip end date is required.",
  INVALID_TRIP_END_DATE: "Invalid trip end date format. Please provide a valid ISO 8601 date format."
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
  NAME_REQR: "Package name is required.",
  INVALID_NAME: "Invalid package name.",
  DESCRIPTION_REQR: "Package description is required.",
  INVALID_DESCRIPTION: "Invalid package description.",
  PRICE_REQR: "Package price is required.",
  INVALID_PRICE: "Invalid package price.",
  DESTINATION_REQR: "Package destination is required.",
  INVALID_DESTINATION: "Invalid package destination.",
  DAYS_REQR: "Package duration (days) is required.",
  INVALID_DAYS: "Invalid package duration (days). Must be a number.",
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
const HOTEL_MESSAGES = {
  HOTEL_NAME_REQUIRED: "Hotel name is required.",
  LOCATION_REQUIRED: "Location is required.",
  RATING_REQUIRED: "Rating is required.",
  INVALID_RATING: "Rating must be a number between 0 and 5.",
  DESCRIPTION_REQUIRED: "Description is required.",
  AMENITIES_REQUIRED: "At least one amenity is required.",
  INVALID_IMAGE_URL: "Invalid image URL.",
  HOTEL_CREATED: "Hotel created successfully.",
  HOTEL_NOT_FOUND: "Hotel not found.",
  HOTEL_UPDATED: "Hotel updated successfully.",
  HOTEL_DELETED: "Hotel deleted successfully."
};
const FLIGHT_MESSAGES = {
  FLIGHT_CREATED: "Flight created successfully.",
  FLIGHT_NOT_FOUND: "Flight not found.",
  FLIGHT_UPDATED: "Flight updated successfully.",
  FLIGHT_DELETED: "Flight deleted successfully."
};
const MESSAGE = {
  Failed: 0,
  OK: 1,
  FETCH_DATA_SUCCESSFULLY: "Fetch data successfully",
  Success: "Success",
  ...HOTEL_MESSAGES,
  ...FLIGHT_MESSAGES,
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
