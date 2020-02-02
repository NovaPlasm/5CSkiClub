const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: false
  },
  birthDate: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  gradYear: {
    type: String,
    required: false
  },
  dietaryInfo: {
    type: String,
    required: false
  },
  vehicleStatus: {
    type: Boolean,
    required: false
  },
  vehicleSpots: {
    type: String,
    required: false
  },
  gearStorage: {
    type: Boolean,
    required: false
  },
  ownsGear: {
    type: Boolean,
    required: false
  },
  winterIkonPass: {
    type: Boolean,
    required: false
  },
  experienceLevel: {
    type: String,
    required: false
  },
  specialConsiderations: {
    type: String,
    required: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);