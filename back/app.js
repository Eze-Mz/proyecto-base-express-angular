require('dotenv').config();

const express = require('express');
//security headers
const helmet = require('helmet')
// cors
const cors = require('cors')
// logger
const logger = require('./utils/winston.logger');
// db-config
const { initializeDB } = require('./config/db-config');



// Rutes:
const routes = require('./routes');

const app = express();
// helmet config
app.use(helmet({
    xFrameOptions: { action: "deny" },
  }));
// parsear json
app.use(express.json());
// controlar aspectos de la url
app.use(express.urlencoded(
    {
      extended: false,
      limit: '10kb',
      parameterLimit: 10,
    },
  ));

// cors config
const whitelist = process.env.CORS.split(' ');
const corsOptions = {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        logger.api.error('Not allowed by CORS', { origin });
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
app.use(cors(corsOptions));

initializeDB();

app.use('/', routes);



module.exports = app;
