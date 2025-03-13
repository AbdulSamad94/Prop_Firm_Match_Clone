export type StatusType = "Active" | "Pending" | "Inactive";

export interface FirmType {
    id: number;
    name: string;
    industry: string;
    employees: number;
    status: StatusType;
    email: string;
    phone: string;
    address: string;
    description: string;
}