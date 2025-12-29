import { create } from "zustand";
import { FormInput } from "./Form";
import {formSlice} from "../../store/store";

export type FormState = {
    formDataState:FormInput[],
    addFormData:()=> void,
    deleteTheFormEntries:()=> void,
}

export const useFormStore = create((...arg)=>({
    formSlice:formSlice(...arg)
}))