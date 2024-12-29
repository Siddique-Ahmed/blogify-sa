import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const blogCategories = [
  {
    id: 1,
    title: "Technology",
    description:
      "Discover the latest advancements in technology, gadgets, and software.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 2,
    title: "Health & Wellness",
    description: "Tips and insights for maintaining a healthy lifestyle.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 3,
    title: "Lifestyle",
    description:
      "Explore lifestyle trends, hacks, and ideas for a better everyday life.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 4,
    title: "Travel",
    description: "Plan your next adventure with our travel tips and guides.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 5,
    title: "Food",
    description: "Delicious recipes, food reviews, and culinary inspiration.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 6,
    title: "Education",
    description:
      "Resources and advice for lifelong learning and academic success.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 7,
    title: "Finance",
    description: "Manage your finances better with these tips and strategies.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 8,
    title: "Entertainment",
    description:
      "Stay updated on the latest in movies, music, and pop culture.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 9,
    title: "Sports",
    description: "Catch up on sports news, events, and insights.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 10,
    title: "Parenting",
    description: "Tips and advice for raising happy, healthy children.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 11,
    title: "Fashion",
    description: "Discover the latest trends and timeless styles in fashion.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 12,
    title: "Personal Development",
    description:
      "Grow and achieve your goals with personal development insights.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 13,
    title: "Business & Startups",
    description: "Get inspired by business ideas and startup success stories.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 14,
    title: "Environment",
    description: "Learn about environmental issues and sustainable practices.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 15,
    title: "Art & Design",
    description: "Explore creative works and design inspirations.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 16,
    title: "Science",
    description:
      "Dive into fascinating discoveries and scientific breakthroughs.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 17,
    title: "Gaming",
    description: "Stay updated with the latest in gaming and eSports.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 18,
    title: "Books & Literature",
    description:
      "Find your next great read with our book reviews and recommendations.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 19,
    title: "Culture & History",
    description: "Explore the rich tapestry of culture and historical events.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
  {
    id: 20,
    title: "DIY & Crafts",
    description: "Get creative with fun and practical DIY projects.",
    image: "https://github.com/shadcn.png",
    author: "Siddique",
    date: "12/12/2024",
  },
];

const BlogComponent = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-10 bg-white">
      <h1 className="font-bold text-2xl sm:text-3xl mb-2">Latest Blogs</h1>
      <div className="w-full px-5 sm:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogCategories.slice(0, 6).map((card, ind) => {
          return (
            <Card key={ind} className="p-0">
              <CardHeader className="p-0">
                <div>
                  <img
                    src={card.image}
                    className="w-full h-64 object-cover rounded-t-md"
                    alt=""
                  />
                </div>
              </CardHeader>
              <CardContent className="flex py-4 flex-col gap-2">
                <CardTitle className="text-xl font-bold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-500 text-md line-clamp-2">
                  {card.description}
                </CardDescription>
                <div className="flex items-center flex-col my-2">
                  <Link className="self-end" to={"/blog-detail/:id"}>
                    <Button>Read More</Button>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <h1 className="font-semibold text-gray-600">
                      {card.author}
                    </h1>
                  </div>
                  <h4 className="text-gray-500 font-serif">{card.date}</h4>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Link to={"/blogs"}>
        <Button className="mt-10 px-10 font-bold flex items-center">
          See More <FaArrowRight />{" "}
        </Button>
      </Link>
    </div>
  );
};

export default BlogComponent;
