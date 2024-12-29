import React, { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(''); 
    } else {
      alert('Please write a comment before submitting.');
    }
  };

  return (
    <div className='w-full'>
      <h2 className='text-xl font-semibold mb-4'>Leave a Comment</h2>
      
      <div className='flex items-center gap-2 mb-6'>
        <textarea
          className='border flex-1 border-gray-200 outline-none rounded-md p-4 mb-4'
          placeholder='Comment Here'
          value={comment}
          onChange={handleCommentChange}
          rows={1}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </div>

      {/* Display Comments */}
      <div className='mt-8 h-64 overflow-x-auto'>
        <h3 className='text-lg font-semibold mb-2'>Comments:</h3>
        {commentsList.length > 0 ? (
          <ul className='space-y-4'>
            {commentsList.map((comment, index) => (
              <li key={index} className='bg-gray-100 p-4 rounded-md flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png"/>
                </Avatar>
              <div className='flex flex-col'>
              <p className='text-gray-900'>{comment}</p>
              <p className='text-sm'>23/23/10</p>
              </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
