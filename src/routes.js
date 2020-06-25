import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";
import Recipients from "./app/models/Recipients";
const routes = new Router();

routes.post("/user", UserController.store);
routes.post("/session", SessionController.store);
routes.get("/recipients", async (req, res) => {
  const recipients = await Recipients.create({
    name: 'Connor Sellers',
    street: '6235 Ante Av.',
    number: 34,
    complement: 'casa',
    uf: 'SP',
    city: 'Osasco',
    cep: '16428291',
  });
  return res.json(recipients);
});

routes.use(authMiddleware);
routes.put("/user", UserController.update);

export default routes;
