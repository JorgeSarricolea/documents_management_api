import express from "express";
import dotenv from "dotenv";
import errorHandler from "../interfaces/middlewares/error.handler.js";

import AuthRoutes from "./routes/auth.routes.js";
import RoleRoutes from "./routes/role.routes.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();

const BASE_URL = "/api/v1";

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(`${BASE_URL}/auth`, AuthRoutes);
app.use(`${BASE_URL}/roles`, RoleRoutes);
app.use(`${BASE_URL}/users`, UserRoutes);

app.use(errorHandler);

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server deployed on http://${HOST}:${PORT}`);
});
