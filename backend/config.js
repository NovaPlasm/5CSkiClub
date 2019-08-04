const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  dbcreds: process.env.DBCREDS,
  env: process.env.NODE_ENV,
  port: process.env.PORT
};