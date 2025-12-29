'use server'
import { revalidatePath } from "next/cache";
import { User } from "./UserFormSubmit";

export const formAction = async (formData:FormData): Promise<User[]> =>{
    const userData : User = {
        id:Number(formData.get('id')),
        email:formData.get('email') || '',
        name:formData.get('name') || '',
    }
    try{
        const postData  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userData)
        }).then(res => res.json());

    }
    catch (error){
        throw Error("error.message")
    }

    revalidatePath('/users')
    return [userData];

}