require('dotenv').config();

const SECRET = process.env.SECRET;
const ENV = process.env.NODE_ENV;
const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER_BASE_URL = process.env.ISSUER_BASE_URL;

module.exports = {
  SECRET,
  ENV,
  CLIENT_ID,
  ISSUER_BASE_URL
};


https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c