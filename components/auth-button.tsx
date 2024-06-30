'use client'
import { useSession } from 'next-auth/react'
import { logInWithGoogle, logOut } from '@/lib/helpers';
import { Button } from "./ui/button";

export default function AuthButton() {
  const session = useSession()

  return session?.data?.user ? (
    <Button variant='destructive' onClick={async ()=> await logOut()}>Sign Out</Button>
  ) :
  <Button variant='default' onClick={async () => await logInWithGoogle()}>Sign In</Button>
}
