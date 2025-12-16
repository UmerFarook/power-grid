'use client'
import React, {useActionState} from 'react';
import action from "@/app/form/FormSubmit";

function Form(props) {

    const [state,formAction] = useActionState(action,[]);

    console.log(state.girdData)
    return (
        <div>

            <form action={formAction}>
            <input type={'text'} name={'gridName'} placeholder={'Enter Grid name'}/><br/>
            <input type={'text'} name={'power'} placeholder={'Enter Maximum power output in KW'} /><br/>
            <input type={'text'} name={'downtime'} placeholder={'Enter downtime in hours'} /><br/>
            <button type={'submit'}>Enter Grid Data</button>
            </form>

        </div>
    );
}

export default Form;