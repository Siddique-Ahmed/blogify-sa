import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

const blogCategories = [
  "Technology",
  "Health & Wellness",
  "Lifestyle",
  "Travel",
  "Food",
  "Education",
  "Finance",
  "Entertainment",
  "Sports",
  "Parenting",
  "Fashion",
  "Personal Development",
  "Business & Startups",
  "Environment",
  "Art & Design",
  "Science",
  "Gaming",
  "Books & Literature",
  "Culture & History",
  "DIY & Crafts"
];


const CategorySection = () => {
  return (
    <div className="min-h-[50%] py-6 px-16">
      <div className="flex items-center justify-center">
        <Carousel className="w-full sm:w-[90%]">
          <CarouselContent className="w-full sm:max-w-[50%]">
            {
              blogCategories.map((cat,ind)=>{
                return (
                  <CarouselItem className="w-full flex items-center gap-4" key={ind}>
                    <Button className="w-full px-4">{cat}</Button>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySection;
