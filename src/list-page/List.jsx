import React from 'react'
import { ListComponent } from '../components/ListComponent'
import { Form } from '../components/Form'
import { NavBar } from '../components/NavBar'


export const List = () => {

  return (
    <>
      <NavBar/>
      <div className='w-full h-full flex'>
        <ListComponent />
        <Form />
      </div>
    </>
      

  )
}
