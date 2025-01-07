import express from "express";
import errorHandler from "../interfaces/middlewares/errorHandler.js";

import RoleRoutes from "./routes/RoleRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/v1/", RoleRoutes);

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("🚀 Server deployed on http://localhost:" + PORT);
});
