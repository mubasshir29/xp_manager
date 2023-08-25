'use client'
import {SessionProvider} from 'next-auth/react'

const AuthProiver = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default AuthProiver