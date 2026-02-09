import express, { Router } from "express";
import * as ticketController from "../controllers/ticketContoller";

const ticketRouter: Router = express.Router();

ticketRouter.get("/tickets", ticketController.getAllTickets);

export default ticketRouter;