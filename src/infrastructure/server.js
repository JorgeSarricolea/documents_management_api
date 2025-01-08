import express from "express";
import errorHandler from "../interfaces/middlewares/errorHandler.js";

import AuthRoutes from "./routes/AuthRoutes.js";
import RoleRoutes from "./routes/RoleRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

const BASE_URL = "/api/v1";

app.use(express.json());

app.use(`${BASE_URL}/auth`, AuthRoutes);
app.use(`${BASE_URL}/roles`, RoleRoutes);
app.use(`${BASE_URL}/users`, UserRoutes);

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("🚀 Server deployed on http://localhost:" + PORT);
});
