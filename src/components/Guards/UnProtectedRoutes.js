import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'


export default function UnProtectedRoutes({ children }) {

    const { user } = useUserContext()

    if (user){
      return <Navigate to='/'/>
    }

  return children
    
  
}
