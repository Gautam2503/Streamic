"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();
    return <div className="flex justify-between">
        <div>
            Streamic
        </div>
        <div>
            {session.data?.user && <button type="button" className= "m-2 p-2 bg-blue-400" onClick={() => signOut()}>Logout</button>}
            {!session.data?.user && <button type="button" className= "m-2 p-2 bg-blue-400" onClick={() => signIn()}>SignIn</button>}  
        </div>
      </div>
  }