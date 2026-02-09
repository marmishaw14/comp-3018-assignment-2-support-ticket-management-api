import { Ticket } from "../api/v1/models/ticketModel";

const tickets: Ticket[] = [
    {
        id: 1,
        title: "Update footer copyright year",
        description: "Footer still shows 2024",
        priority: "low",
        status: "open",
        createdAt: new Date("2026-02-05T10:00:00.000Z")
    },
    {
        id: 2,
        title: "Profile picture upload slow",
        description: "Upload takes 30+ seconds",
        priority: "medium",
        status: "open",
        createdAt: new Date("2026-02-06T10:00:00.000Z")
    },
    {
        id: 3,
        title: "Dashboard loading slowly",
        description: "Dashboard takes 10+ seconds to load",
        priority: "medium",
        status: "open",
        createdAt: new Date("2026-02-02T10:00:00.000Z")
    },
    {
        id: 4,
        title: "Password reset email",
        description: "Reset emails taking over 30 minutes",
        priority: "high",
        status: "open",
        createdAt: new Date("2026-02-03T10:00:00.000Z")
    },
    {
        id: 5,
        title: "Export PDF not working",
        description: "PDF export fails silently",
        priority: "high",
        status: "open",
        createdAt: new Date("2026-01-30T10:00:00.000Z")
    },
    {
        id: 6,
        title: "Login page not loading",
        description: "Users report blank screen on login",
        priority: "critical",
        status: "open",
        createdAt: new Date("2026-02-02T10:00:00.000Z")
    },
    {
        id: 7,
        title: "Dark mode toggle broken",
        description: "Dark mode doesn't persist after refresh",
        priority: "medium",
        status: "resolved",
        createdAt: new Date("2026-01-29T10:00:00.000Z")
    }
];

export default tickets;