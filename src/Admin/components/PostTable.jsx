import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const posts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    createdAt: '2025-01-01',
    author: {
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'A Guide to JavaScript ES6 Features',
    createdAt: '2024-12-28',
    author: {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
    },
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    createdAt: '2024-12-30',
    author: {
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
    },
    image: 'https://via.placeholder.com/150',
  },
];

const PostTable = () => {
  const [statuses, setStatuses] = useState(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: 'Pending' }), {})
  );

  const handleStatusChange = (postId, status) => {
    setStatuses((prev) => ({ ...prev, [postId]: status }));
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Image</TableCell>
            <TableCell className="text-right">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.createdAt}</TableCell>
              <TableCell>
                <div>
                  <div>{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={post.image}
                    alt={post.title}
                    style={{ width: 50, height: 50, borderRadius: '4px' }}
                  />
                </Avatar>
              </TableCell>
              <TableCell className="flex items-center justify-end">
                <Select
                  value={statuses[post.id]}
                  onValueChange={(value) => handleStatusChange(post.id, value)}
                >
                  <SelectTrigger className="w-32">
                    {statuses[post.id]}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Accepted">Accepted</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
