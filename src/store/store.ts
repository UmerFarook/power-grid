import {FormInput} from "../app/form/Form";
import {FormState} from "../app/form/form.store";

export const formSlice = ((set) =>({
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
        set((state) =>({...state,formSlice:{...state.formSlice,formDataState:[...state.formSlice.formDataState, updatingFormData]}}))
    },
    deleteTheFormEntries:(formEntry:FormInput)=>{
        set((formData:FormInput[])=>{
            const formInputName = formEntry.gridName;
            let filteredFormData =  formData.formDataState.filter(formItem => formItem.gridName !== formInputName);
            return ({formDataState:filteredFormData});
        })
    }
}))