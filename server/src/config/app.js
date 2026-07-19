const appConfig = {
  port: Number(process.env.PORT) || 3001,

  nodeEnv: process.env.NODE_ENV || "development",

  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",

  isDevelopment: process.env.NODE_ENV !== "production",

  isProduction: process.env.NODE_ENV === "production",
};

export default appConfig;