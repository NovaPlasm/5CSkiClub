const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUpdateInput(data) {
  let errors = {};

  console.log(data);

  // Convert empty fields to an empty string so we can use validator functions
  data.idNumber = !isEmpty(data.idNumber) ? data.idNumber : "";
  data.birthDate = !isEmpty(data.birthDate) ? data.birthDate : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.gradYear = !isEmpty(data.gradYear) ? data.gradYear : "";
  data.dietaryInfo = !isEmpty(data.dietaryInfo) ? data.dietaryInfo : "";
  data.vehicleStatus = !data.vehicleStatus ? false : true;
  data.vehicleSpots = !isEmpty(data.vehicleSpots) ? data.vehicleSpots : "";
  data.gearStorage = !data.gearStorage ? false : true;
  data.ownsGear = !data.ownsGear ? false : true;
  data.winterIkonPass = !data.winterIkonPass ? false : true;
  data.experienceLevel = !isEmpty(data.experienceLevel) ? data.experienceLevel : "";
  data.specialConsiderations = !isEmpty(data.specialConsiderations) ? data.specialConsiderations : "";


  if (Validator.isEmpty(data.idNumber)) {
    errors.idNumber = "ID number field is required";
  }

  if (Validator.isEmpty(data.birthDate)) {
    errors.birthDate = "Birth date field is required";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number field is required";
  }

  if (Validator.isEmpty(data.gradYear)) {
    errors.gradYear = "Graduation year field is required";
  }

  if (Validator.isEmpty(data.dietaryInfo)) {
    errors.dietaryInfo = "Dietary info field is required";
  }

  if (data.vehicleStatus && Validator.isEmpty(data.vehicleSpots)) {
    errors.vehicleSpots = "Vehicle spots is required";
  }

  if (data.vehicleStatus && Validator.isEmpty(data.gearStorage)) {
    errors.gearStorage = "Gear storage field is required";
  }

  if (Validator.isEmpty(data.experienceLevel)) {
    errors.experienceLevel = "Experience level field is required";
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  };
};