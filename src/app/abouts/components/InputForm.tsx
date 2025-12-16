'use client';

import React, {useDeferredValue, useState} from 'react';
import {useForm} from "react-hook-form";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name:z.string().min(10)
})

function InputForm(props) {

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{name:'Aaaa'},
        resolver:zodResolver(schema),
    });

    const onSubmit =(e)=>{
        console.log()
    }



    const [inputname, setInputname] = useState();
    const updateValuess= (e)=>{
        setInputname(e);
        console.log(errors)
    }
    const deferredInput  = useDeferredValue(inputname);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} type={'text'} placeholder={'Enter name'} onChange={(e)=>updateValuess(e.target.value)}/>
                {errors?.name?.message}
                <button type={'submit'}>Submit</button>
            </form>

            {deferredInput}

        </div>

    );
}

export default InputForm;