'use client';
import React from 'react';
import Header from "./header";
import {MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onSuccess:()=>{
            queryClient.invalidateQueries();
        },
        onSettled:()=>{},
    })
});


function Layout({props, children}) {
    return (
        <div>
            <Header/>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>

        </div>

    );
}

export default Layout;