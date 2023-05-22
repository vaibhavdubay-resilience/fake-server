import { Router } from "express";
import { Controller } from "../controller";
const controller = new Controller()

export const inboxRoutes = Router()

inboxRoutes.post('/getInboxForUser', controller.sendMessage(400, "no data found"))

