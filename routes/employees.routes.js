import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  viewAllEmployees,
  viewOneEmployee,
} from "../controller/employees.controller.js";

export const employeesRoutes = Router();

employeesRoutes.get("/", viewAllEmployees);
employeesRoutes.get("/:id", viewOneEmployee);
employeesRoutes.post("/", createEmployee);
employeesRoutes.patch("/:id", editEmployee);
employeesRoutes.delete("/", deleteEmployee);
