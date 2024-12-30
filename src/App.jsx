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
        <Route path="/auth/profile" element={<ProfilePage/>} />
        <Route path="/auth/profile/edit/:id" element={<EditProfile/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
