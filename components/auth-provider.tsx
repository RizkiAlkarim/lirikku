import { SessionProvider } from "next-auth/react";
import AuthButton from "./auth-button";
import { auth } from "@/lib/auth";

export default async function Auth(){
    const session = await auth()

    return(
        <SessionProvider basePath="/api/auth" session={session}>
            <AuthButton/>
        </SessionProvider>
    )
}