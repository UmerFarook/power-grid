'use client'
import React from 'react';
import {useContacts} from "../../hooks/useContacts";

function Page(props) {

    const {isLoading,contacts,isError, refetch} = useContacts({id:1});
    const handleRefresh = async () => {
        const result = await refetch();

        if (result.isSuccess) {
            console.log('Updated contacts:', result.data);
        }
    };
    return (
        <div>
            <h1>Ellam sheriyaavum {isLoading}</h1>
            <table>
                <tbody>
                {contacts?.map(contact =>{
                    return(

                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                            </tr>

                    )
                })}

                </tbody>
            </table>
            <br/>
            <button onClick={()=>handleRefresh()}>Refresh</button>

        </div>
    );
}

export default Page;