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

export const createTicket = (req: Request, res: Response) => {
    if(!req.body.title) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: title"
        });
    }

    if (!req.body.description) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: description"
        });
    }

    if (!req.body.priority) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid priority. Must be one of: critical, high, medium, low"
        });
    }

    const createdTicket = ticketService.createTicket(req.body);
    res.status(HTTP_STATUS.CREATED).json({
        message: "Ticket created",
        data: createdTicket
    });
};