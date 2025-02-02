import winston from "winston";

const APP_NAME = "documents-api";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, message }) =>
        `[${timestamp}] INFO (${APP_NAME}): ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  ],
});

export default logger;
