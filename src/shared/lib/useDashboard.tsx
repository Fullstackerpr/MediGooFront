import { create } from "zustand";
import { api } from "../api";

export interface IUser {
  id: number;
  state: string;
  merc: number;
  bmw: number;
  tesla: number
}

type store = {
  users: IUser[];
  getUser: () => Promise<void>;
};

export const useUser = create<store>((set) => ({
  users: [],

  getUser: async () => {
    const res = await api.get("users");
    set({ users: res.data });
  },
}));
