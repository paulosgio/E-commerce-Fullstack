import { create } from "zustand";
import type { IAuth, IMe } from "../interfaces";
import { MeService } from "../services/MeService";
import { LoginService } from "../services/AuthServices";

interface IAuthStore {
    me: IMe | null,
    fetchMe: ()=> Promise<void>,
    logOut: ()=> void,
    login: (data: IAuth)=> Promise<void>,
    token: string | null
}

export const useAuthStore = create<IAuthStore>((set)=> ({
    me: null,

    token: localStorage.getItem("token"),

    fetchMe: async ()=> {
        try {
            const data = await MeService()
            set({me: data})
            
        } catch (error) {
            console.log(error);
        }
    },

    logOut: ()=> {
        localStorage.removeItem("token")
        set({me: null, token: null})
    },

    login: async (data: IAuth) => {
        try {
            const token = await LoginService(data)
            localStorage.setItem("token", token)
            const me = await MeService()
            set({token, me})
        } catch (error) {
            console.log(error);
        }
    }
}))

