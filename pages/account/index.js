import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Profile from '../../components/Account/Dashboard';
import LogIn from '../../components/Account/LogIn';

export default function Account() {
  const { data:session } = useSession();
  const customer = session?.user.data.customer;
  console.log(customer)

  if (session || true) {
    return <Profile customer={customer}/>
  } else {
    return <LogIn />
  }

}
