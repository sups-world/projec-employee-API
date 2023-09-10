import express from "express";

import { employeesRoutes } from "./employees.routes.js";

export const routes = express.Router();

routes.use("/employees", employeesRoutes);
