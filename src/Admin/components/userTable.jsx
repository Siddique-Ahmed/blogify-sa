import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term)
      )
    );
  };

  const handleUpdate = (id) => {
    alert(`Update user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <div className='z-50'>
      <div className="w-full p-4">
        <Input
          type="text"
          placeholder="Search by name or email"
          className="bg-white block w-full outline-none border border-gray-100"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredUsers.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell className="text-right">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                      style={{ width: 40, height: 40, borderRadius: '50%' }}
                    />
                  </Avatar>
                </TableCell>
                <TableCell className="flex items-center justify-end gap-2">
                  <Button
                    className="bg-green-600 hover:bg-green-500"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="w-full flex justify-center p-4">
          <h1>No Users Available</h1>
        </div>
      )}
    </div>
  );
};

export default UserTable;
