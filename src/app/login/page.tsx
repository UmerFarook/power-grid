

import React from 'react';
import { login } from "../lib/actions/auth";
import getAuthSession from "../lib/actions/getAuthSession";
import { redirect } from "next/navigation";
async function Page(props) {
  const {isLoggedIn}  = await getAuthSession();

    if(isLoggedIn){
        redirect('/')
    }
    return (
        <>
            <form action={login}>
                <p>You are not signed in</p>
                <button type={"submit"}>Sign in</button>
            </form>
        </>

    );
}

export default Page;