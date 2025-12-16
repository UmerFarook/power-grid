import React from 'react';
import FormSubmit from "./FormSubmit";
import { nanoid } from 'nanoid';
const Users = async ()=>{
    const [users]= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/`).then(res=> res.json());

    return(<div>
        <h1>Salam</h1>
        <FormSubmit/>
        {users.users?.map((user) =>{
           return(<div key={user.id}>
               <p> {user.id}</p>
               <p> {user.name}</p>
               <p> {user.email}</p>
               <p> {user.address?.street}</p>
           </div>)
        })}


    </div>)

}

export default Users;