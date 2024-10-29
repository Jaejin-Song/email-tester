import dotenv from "dotenv";

export const envFactory = () => {
  dotenv.config();

  if (!process.env.SMTP_DEFAULT_HOST)
    throw new Error("env-process.env.SMTP_DEFAULT_HOST");
  if (!process.env.SMTP_DEFAULT_PORT)
    throw new Error("env-process.env.SMTP_DEFAULT_PORT");
  if (!process.env.SMTP_DEFAULT_USER)
    throw new Error("env-process.env.SMTP_DEFAULT_USER");
  if (!process.env.SMTP_DEFAULT_PASSWORD)
    throw new Error("env-process.env.SMTP_DEFAULT_PASSWORD");
  if (!process.env.SMTP_DEFAULT_EMAIL_ADDRESS)
    throw new Error("env-process.env.SMTP_DEFAULT_EMAIL_ADDRESS");

  return {
    smtp: {
      host: process.env.SMTP_DEFAULT_HOST,
      port: Number(process.env.SMTP_DEFAULT_PORT),
      user: process.env.SMTP_DEFAULT_USER,
      password: process.env.SMTP_DEFAULT_PASSWORD,
      emailAddress: process.env.SMTP_DEFAULT_EMAIL_ADDRESS,
    },
  };
};
