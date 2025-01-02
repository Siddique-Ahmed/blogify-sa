import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import Dashboard from "./Admin/pages/Dashboard";
import UserPage from "./Admin/pages/UserPage";
import PostPage from "./Admin/pages/PostPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/create/blog" element={<CreateBlog />} />
        <Route path="/edit/blog/:id" element={<EditBlog />} />
        <Route path="/auth/profile" element={<ProfilePage />} />
        <Route path="/auth/profile/edit/:id" element={<EditProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        // Admin Route
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/user" element={<UserPage />} />
          <Route path="/admin/post" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
