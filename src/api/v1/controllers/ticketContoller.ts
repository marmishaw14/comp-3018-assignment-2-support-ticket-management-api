import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as ticketService from "../services/ticketService";
import { Ticket } from "../models/ticketModel";

export const getAllTickets = (req: Request, res: Response): void => {
    const tickets: Ticket[] = ticketService.getAllTickets();
    res.status(HTTP_STATUS.OK).json({
        message: "Tickets retrieved successfully",
        count: tickets.length,
        data: ticketService
    });
};