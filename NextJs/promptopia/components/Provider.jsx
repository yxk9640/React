//we are using browser functionalities 
"use client";

//to maintain user profile on all pages
import { SessionProvider} from 'next-auth/react'; 


const Provider = ({ children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}  

    </SessionProvider>
  )
}

export default Provider