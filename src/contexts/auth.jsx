import React, { useState, createContext, useContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

import { auth } from '@/services/firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      setUser(newUser)
      setIsLoading(false)
    })
  }, [])

  const apiSignOut = () => signOut(auth)

  const apiSignupEmail = (values) => new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      router.push('/')
    }).catch((error) => {
      reject(error)
    })
  })

  const data = {
    user,
    isLoading,
    apiSignupEmail,
    apiSignOut
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
