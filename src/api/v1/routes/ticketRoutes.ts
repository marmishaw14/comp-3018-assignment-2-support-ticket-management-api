import express, { Router } from "express";
import * as ticketController from "../controllers/ticketController";

const ticketRouter: Router = express.Router();

ticketRouter.get("/tickets", ticketController.getAllTickets);
ticketRouter.post("/tickets", ticketController.createTicket);
ticketRouter.get("/tickets/:id", ticketController.getTicketById);

export default ticketRouter;