require('dotenv').config();
const http = require('http');
const app = require('./app');
const { dbConnector } = require('./config/db');

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

dbConnector()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server runnning on port: ${PORT} with MongoDB connected!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
