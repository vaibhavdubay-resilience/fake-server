import { Router } from "express";
import { inboxRoutes } from "./routes/inbox.route";
import { eddRoutes } from "./routes/edd.route";

export const mainRoutes = Router();

mainRoutes.use("/message", inboxRoutes);
mainRoutes.use("/edd", eddRoutes);
