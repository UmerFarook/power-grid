'use server'

import { signIn, signOut } from "@/auth";

export const login = async ()=>{
    await signIn("github", { redirectTo: "/" });
}
export const logout = async ()=>{
   return  await signOut("github",{redirectTo:'/'});
}