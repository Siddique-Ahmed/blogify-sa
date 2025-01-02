import React from 'react'
import PostTable from '../components/PostTable'

const PostPage = () => {
  return (
    <div className='h-[95vh] flex items-center flex-col gap-4 overflow-auto py-10'>
    <h1 className='text-4xl font-bold uppercase text-blue-500'>Blogify Posts</h1>
    <div className='w-full bg-white h-screen'>
      <PostTable/>
    </div>
  </div>
  )
}

export default PostPage
