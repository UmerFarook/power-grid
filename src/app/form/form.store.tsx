import { create } from "zustand";
import { FormInput } from "./Form";

export type FormState = {
    formDataState:FormInput[],
    addFormData:()=> void,
    deleteTheFormEntries:()=> void,
}

export const useFormStore = create((set)=>({
    formDataState:[{
        gridName:'lorem ipsum is adummy',
        power:12,
        downtime:1,

    },
        {
            gridName:'buhahahakalam',
            power:12,
            downtime:1,

        }] as FormInput[],
    addFormData:(updatingFormData:FormInput)=>{
        set((formData:FormState) => ({formDataState:[...formData.formDataState, updatingFormData]}))
    },
    deleteTheFormEntries:(formEntry:FormInput)=>{
        set((formData:FormInput[])=>{
            const formInputName = formEntry.gridName;
            let filteredFormData =  formData.formDataState.filter(formItem => formItem.gridName !== formInputName);
            console.log(filteredFormData)
            return ({formDataState:filteredFormData});
        })
    }
}))