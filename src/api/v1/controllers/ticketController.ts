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

export const getTicketById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    
    const selectedTicket = ticketService.getTicketById(id);

    if (selectedTicket) {
        res.status(HTTP_STATUS.OK).json({
            message: "Ticket found",
            data: selectedTicket
        });

    } else {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Ticket not found"
        });
    }
};

export const updateTicket = (req: Request, res: Response) => {
    // Validation check to see if priority field in request body is empty or doesn't contain priority types in priority field
    if(!req.body.priority || !["critical", "high", "medium", "low"].includes(req.body.priority)) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid priority. Must be one of: critical, high, medium, low",
        });
    }
    // Validation check to see if status field in request body is empty or doesn't contain status types in status field
    if(!req.body.status || !["open", "in-progress", "resolved"].includes(req.body.status)) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid status. Must be one of: open, in-progress, resolved"
        });
    }

    const id = Number(req.params.id);

    const selectedTicket = ticketService.updateTicket(id, req.body);

    if(!selectedTicket) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Ticket not found"
        })
    } else {
        return res.status(HTTP_STATUS.OK).json({
            message: "Ticket updated successfully",
            data: selectedTicket
        });
    }
}