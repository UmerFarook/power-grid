'use client'
import React, {useActionState, useState} from 'react';
import { useForm } from "react-hook-form";
import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {FormState, useFormStore} from "./form.store";

const schema =  z.object({
    gridName:z.string().min(10),
    power:z.number(),
    downtime:z.number(),

})

export type FormInput = z.infer<typeof schema>;
function GridForm() {



    const queryClient = useQueryClient();
    const [mutationError, setMutationError] = useState('');
    const formDataStore = useFormStore((store :FormState)=>store.formDataState);
    const updateFormDataStore = useFormStore((store:FormState)=>store.addFormData);
    const deleteTheFormEntries = useFormStore((store:FormState)=>store.deleteTheFormEntries);

    const postFormData = useMutation({
        mutationKey:['grids'],
        mutationFn: async (formData:FormInput)=> {
            const res = await fetch('http://localhost:8080',{
                headers:{
                    'Content-Type':'application/json'
                },
                method:'POST',
                body:JSON.stringify(formData)
            });
            if(!res.ok){
                throw  new Error('form didnt submit');
            }

            return res.json();


        },
        onError:(e,data)=>{
            setMutationError(e.message)
        },
        meta:{invalidateQuery:['grids']},
        onSettled:()=>{
            queryClient.invalidateQueries({ queryKey: ['grids'] });
        },
        onSuccess:(data)=>{
            deleteTheFormEntries(data);
        }
    })

    const {register,formState:{errors:formErrors},handleSubmit,} = useForm<FormInput>({
        resolver:zodResolver(schema),
        defaultValues: {
            gridName: "",
            power: 0,
            downtime: 0,
        },
    });
    const updateGrid = (formData:FormInput) => {
        postFormData.mutate(formData);
    }
    return (
        <div>
            {formDataStore.map((formItem: FormInput,key)=> <p key={key}>{formItem.gridName}</p>)}

            {mutationError !='' && <p>{`Some error occured ${mutationError}`} </p>}
            <form onSubmit={handleSubmit(updateGrid)}>
            <input type={'text'} {...register('gridName')} placeholder={'Enter Grid name'}/><br/>
                {formErrors.gridName && <p>{formErrors.gridName.message}</p>}
            <input type={'text'} {...register('power',{ valueAsNumber: true })} placeholder={'Enter Maximum power output in KW'} /><br/>
                {formErrors.power && <p>{formErrors.power.message}</p>}
            <input type={'text'} {...register('downtime',{ valueAsNumber: true })} placeholder={'Enter downtime in hours'} /><br/>
                {formErrors.downtime && <p>{formErrors.downtime.message}</p>}
            <button type={'submit'}>Enter Grid Data</button>
            </form>

        </div>
    );
}

export default GridForm;