import React from 'react'
import UserTable from '../components/userTable'

const UserPage = () => {
  return (
    <div className='h-[95vh] w-full flex items-center flex-col gap-4 overflow-auto py-10'>
      <h1 className='text-4xl font-bold uppercase text-blue-500'>Blogify Users</h1>
      <div className='w-full bg-white h-screen'>
        <UserTable/>
      </div>
    </div>
  )
}

export default UserPage
