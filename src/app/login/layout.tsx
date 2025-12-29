import React from 'react';

function Layout({children}) {
    return (
        <div className="flex flex-col items-center gap-6 text-center sm:items-center sm:text-left">
            <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
               Login
            </h1>

            <div className="flex flex-col leading-8">
                {children}
            </div>
        </div>
    );
}

export default Layout;