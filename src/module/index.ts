import { Router } from "express";
import { eddRoutes, inboxRoutes, paymentRoutes } from "./routes";

export const mainRoutes = Router();

mainRoutes.use("/message", inboxRoutes);
mainRoutes.use("/edd", eddRoutes);
mainRoutes.use("/payment", paymentRoutes);
