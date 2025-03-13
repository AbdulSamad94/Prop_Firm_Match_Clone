import { FirmType } from "@/types";

export const mockFirms: FirmType[] = [
    {
        id: 1,
        name: "Acme Corporation",
        industry: "Technology",
        employees: 250,
        status: "Active",
        email: "contact@acme.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Boulevard, San Francisco, CA 94107",
        description:
            "Acme Corporation is a leading technology firm specializing in innovative software solutions for enterprise clients.",
    },
    {
        id: 2,
        name: "Globex Industries",
        industry: "Manufacturing",
        employees: 500,
        status: "Active",
        email: "info@globex.com",
        phone: "+1 (555) 987-6543",
        address: "456 Factory Lane, Detroit, MI 48201",
        description:
            "Globex Industries is a manufacturing powerhouse with state-of-the-art production facilities.",
    },
    {
        id: 3,
        name: "Stark Enterprises",
        industry: "Energy",
        employees: 1000,
        status: "Pending",
        email: "contact@stark.com",
        phone: "+1 (555) 111-2222",
        address: "789 Energy Plaza, Los Angeles, CA 90001",
        description:
            "Stark Enterprises is revolutionizing the energy sector with sustainable solutions.",
    },
    {
        id: 4,
        name: "Wayne Industries",
        industry: "Research",
        employees: 750,
        status: "Inactive",
        email: "info@wayne.com",
        phone: "+1 (555) 333-4444",
        address: "321 Research Drive, Gotham, NY 10001",
        description:
            "Wayne Industries leads the field in cutting-edge research and development.",
    },
    {
        id: 5,
        name: "Umbrella Corp",
        industry: "Pharmaceuticals",
        employees: 600,
        status: "Active",
        email: "contact@umbrella.com",
        phone: "+1 (555) 555-6666",
        address: "555 Pharm Street, Boston, MA 02108",
        description:
            "Umbrella Corp develops breakthrough pharmaceutical products for global healthcare needs.",
    },
];

export const getFirmById = (id: number): FirmType | undefined => {
    return mockFirms.find(firm => firm.id === id);
};