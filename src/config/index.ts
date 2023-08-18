import dotenv from "dotenv";

dotenv.config();

const { PORT, HOSTNAME, NODE_ENV, CAT_API_KEY } = process.env;

const server = {
  hostname: HOSTNAME,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOSTNAME}:${PORT}/`
      : `https://${HOSTNAME}:${PORT}/`,
};

const cats = {catApiKey: CAT_API_KEY}

const config = { server, cats };

export default config;
