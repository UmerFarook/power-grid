import React from 'react';
import { nanoid } from 'nanoid';
import UserFormSubmit from "./UserFormSubmit";
const Users = async ()=>{
    const users = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?order=desc`
    ).then(res => res.json()).then(([users]) => users.users);


    return(
        <div>

        <h1 className="text-2xl text-center gap-5" data-testid="title">User List</h1>
        <UserFormSubmit/>
        {users?.map((user) =>{
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