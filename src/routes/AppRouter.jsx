import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { List } from '../list-page/List'
import { LoginRoutes } from '../auth/routes/LoginRoutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/checkingAuth'

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth);

  if( status === 'checking'){
    return (<CheckingAuth/>)
  }
   
 return (

    <Routes>

      {
        (status === 'authenticated') 
          ? <Route path='/list' element={<List/>} /> 
            :  <Route path='/auth/*' element={<LoginRoutes />} />
          
      }
      
      {
        (status === 'not-authenticated') 
          ?  <Route path='/*' element={<Navigate to={'/auth'}/>} />
            : <Route path='/*' element={<Navigate to={'/list'}/>} /> 
          
      }
    </Routes>
  )
}
