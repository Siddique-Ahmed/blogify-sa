import EditBlogForm from '@/components/EditBlogForm'
import Footer from '@/components/Home_Page_Components/Footer'
import Header from '@/components/Home_Page_Components/Header'
import React from 'react'

const EditBlog = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header/>
      <EditBlogForm/>
      <Footer/>
    </div>
  )
}

export default EditBlog
