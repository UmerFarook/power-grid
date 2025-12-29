import { auth } from "@/auth";
import Image from "next/image";
import getAuthSession from "./lib/actions/getAuthSession";
import Link from "next/link";

export default async function Home() {

    const {user}  = await getAuthSession()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">

        <div className="flex flex-col items-center gap-6 text-center sm:items-center sm:text-left">
          <h1 className="max-w-md text-5xl text-center font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
           Hello {user} !!! <br/> <br/>Welcome to Power System
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
           Manage the power grid
          </p>
            <p>
                <Link
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[208px]"
                    href="/form"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={16}
                        height={16}
                    />
                    Update Grid Data
                </Link>
            </p>
        </div>

      </main>
    </div>
  );
}
