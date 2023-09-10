import express from "express";

import { employeesRoutes } from "./employees.routes.js";
// import { defaultRoute } from './defaultRoutes';
// import { usersRoute } from './users.routes';
// import { postsRoute } from './posts.routes';
// import { authRoute } from './auth.routes';

export const routes = express.Router();

routes.use("/employees", employeesRoutes);
// routes.use('/users', usersRoute);
// routes.use('/posts', postsRoute);
// routes.use('/auth', authRoute);
