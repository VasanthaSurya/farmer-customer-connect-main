const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    format:winston.format.combine(
      // winston.format.colorize({ all: true }),
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: { service: 'auth-service' },
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'info.log', level: 'info' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
