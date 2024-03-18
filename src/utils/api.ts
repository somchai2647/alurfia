import axios from "axios";
import type { Customer } from "@/interfaces/customer.interface";

export const api = {
  createCheckIn: async (name: string) => {
    const res = await axios.post("/api/checkin", { name });
    return (await res.data[0]) as Customer;
  },
  createCheckOut: async (name: string, id: number) => {
    const res = await axios.put("/api/checkin", { name, id });
    return (await res.data[0]) as Customer[];
  },
};
