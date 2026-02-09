import tickets from "src/data/ticketData";
import { Ticket } from "../models/ticketModel";

/**
 * Retrieves all tickets
 */
export const getAllTickets = (): Ticket[] => {
    return structuredClone(tickets);
}