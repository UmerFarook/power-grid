
'use client'
import { client } from "@/services";
import {useMutation, useQuery } from "@tanstack/react-query";
import React from 'react';

export const useContacts = ({contactId}:{contactId:number}) => {

    const {isLoading,data:contacts,isError,refetch} = useQuery({
        queryFn:()=>{
            if(contactId){
              return client.getContactByID(contactId);
            }
            return client.getContacts();

        },
        queryKey:['contacts',{contactId}],
        select:((data) => {
            if(contactId){
               return [{id:data.id,name:data.name,email:data.email }]
            }
            return data.map(item => ({id:item.id,name:item.name,email:item.email}))
        })
    });


    return {isLoading,contacts,isError, refetch};
}

export const usePostContacts = (contact)=> useMutation({
    mutationFn:()=>client.addContact(contact),
    meta:{invalidateQuery:['contacts']}
});

export const useDeleteContact = (contact)=> useMutation({
    mutationFn:()=>client.deleteContact(contact),
    meta:{invalidateQuery:['contacts']}
})