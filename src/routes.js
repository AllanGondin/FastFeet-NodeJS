import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";
import RecipientsController from "./app/controllers/RecipientsController";
const routes = new Router();

routes.post("/user", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.put("/user", UserController.update);
routes.post("/recipients", RecipientsController.store);

export default routes;
