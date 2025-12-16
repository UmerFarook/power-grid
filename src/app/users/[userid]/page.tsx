import React from 'react';
import {notFound} from 'next/navigation'

const User = async ({params}:{params:Promise<{userid:string}>})=>{
    const {userid} = await params;
    const [user] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userid}`).then(res => res.json());
 console.log(user,'34')
    if(Object.keys(user).length === 0){
     notFound();
 }
    return(<div>
        <p> {user.id}</p>
        <p> {user.name}</p>
        <p> {user.email}</p>


    </div>)

}
export default User;