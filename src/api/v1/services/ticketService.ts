import tickets from "../../../data/ticketData";
import { Ticket, TicketPriority, TicketStatus } from "../models/ticketModel";

/**
 * Retrieves all tickets
 */
export const getAllTickets = (): Ticket[] => {
    return structuredClone(tickets);
}

/**
 * 
 * @param ticketData - Ticket data to be entered
 * @returns newTicket - The newly created ticket.
 */
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

/**
 * 
 * @param id - Ticket id
 * @returns The ticket containing the requested id
 */
export const getTicketById = (id: number): Ticket | undefined => {
    return tickets.find(ticket => ticket.id === id);
}