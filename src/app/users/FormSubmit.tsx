'use client'

import { nanoid } from "nanoid";
import React, { useActionState } from 'react'


function FormSubmit(props) {

    const action = async (prevState, formData:FormData)=>{
        const userData = {
            id:nanoid(),
            email:formData.get('email'),
            name:formData.get('name'),
        }
         const postData  = await fetch('/api/users',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json',
             },
             body:JSON.stringify(userData)
         }).then(res => res.json());


        return [userData];

    }
    const [[state],formAction] = useActionState(action,[])
    return (
        <div>
            {state?.name}
            <form action={formAction}>
                <input type={'number'} name={'id'} placeholder={'Enter id'}/>
                <input type={'text'} name={'email'} placeholder={'Enter email'}/>
                <input type={'text'} name={'name'} placeholder={'Enter name'}/>
                <button type={'submit'}>Update User</button>
            </form>

        </div>
    );
}

export default FormSubmit;