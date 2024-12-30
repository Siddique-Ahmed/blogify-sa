import Footer from '@/components/Home_Page_Components/Footer'
import Header from '@/components/Home_Page_Components/Header'
import EditProfileForm from '@/components/Profile_Page_Components/EditProfileForm'
import React from 'react'

const EditProfile = () => {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <EditProfileForm/>
      <Footer/>
    </div>
  )
}

export default EditProfile
