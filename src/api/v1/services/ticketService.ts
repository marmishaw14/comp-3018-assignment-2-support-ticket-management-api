import tickets from "../../../data/ticketData";
import { Ticket, TicketPriority, TicketStatus } from "../models/ticketModel";

/**
 * Retrieves all tickets
 */
export const getAllTickets = (): Ticket[] => {
    return structuredClone(tickets);
}

export const createTicket = (ticketData: {
    title: string,
    description: string,
    priority: TicketPriority,
    status: TicketStatus,
    createdAt: Date
}) => {
    const newTicket: Ticket = {
        id: tickets.length + 1,
        title: ticketData.title,
        description: ticketData.description,
        priority: ticketData.priority,
        status: "open",
        createdAt: new Date()
    };

    tickets.push(newTicket);
    return newTicket;
}