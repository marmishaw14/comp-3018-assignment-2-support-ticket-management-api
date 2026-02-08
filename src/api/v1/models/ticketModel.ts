/**
 * Represents the priority of a user's ticket
 * - "low": The ticket is low priority
 * - "medium": The ticket is medium priority
 * - "high": The ticket is high priority
 * - "critical": The ticket is critical priority
 */
export type TicketPriority = "low" | "medium" | "high" | "critical";

/**
 * Represents the status of a user's ticket
 * - "open": The ticket status is open
 * - "in-progress": The ticket status is in progress
 * - "resolved": The ticket status is resolved
 */
export type TicketStatus = "open" | "in-progress" | "resolved";

/**
 * Represents a ticket in the help desk system
 */
export interface Ticket {
    id: number;
    title: string;
    description: string;
    priority: TicketPriority;
    status: TicketStatus;
    createdAt: Date;
}
