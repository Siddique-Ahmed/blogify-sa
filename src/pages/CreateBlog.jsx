import CreateBlogForm from '@/components/CreateBlogForm'
import Footer from '@/components/Home_Page_Components/Footer'
import Header from '@/components/Home_Page_Components/Header'
import React from 'react'

const CreateBlog = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header/>
      <CreateBlogForm/>
      <Footer/>
    </div>
  )
}

export default CreateBlog
