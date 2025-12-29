
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { formAction } from "./submitFunction";

export type Geo = {
    lat: string;
    lng: string;
};

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string | FormDataEntryValue;
    username?: string;
    email: string | FormDataEntryValue;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
};
function UserFormSubmit(props) {


    return (
        <div>
            <form action={formAction}>
                <input type={'number'} name={'id'} placeholder={'Enter id'}/>
                <input type={'text'} name={'email'} placeholder={'Enter email'}/>
                <input type={'text'} name={'name'} placeholder={'Enter name'}/>
                <button type={'submit'}>Update User</button>
            </form>

        </div>
    );
}

export default UserFormSubmit;