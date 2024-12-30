import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Button } from "./ui/button";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const BlogDetailComp = () => {
  const [like, setLike] = useState(false);

  const auth = true

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://github.com/shadcn.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex w-full justify-between">
              <p>Author Name</p>
              <p>Created At</p>
            </div>
            <div className="flex items-center justify-between">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <Link to={`/edit/blog/id`}>
            <FaEdit size={20} className="text-green-500"/>
            </Link>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div>
              <Button
                onClick={() => setLike(like ? false : true)}
                variant="outline"
                className="rounded-full border-none"
              >
                <CiHeart
                  className={`${like ? "text-red-600" : ""}`}
                  size={20}
                />
                <p>{like ? "1" : "0"}</p>
              </Button>
            </div>
          </div>
        </div>
      <CommentSection />
      </div>
    </section>
  );
};

export default BlogDetailComp;
