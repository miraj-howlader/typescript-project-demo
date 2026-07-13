import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Card } from "@heroui/react";
import { Calendar, DollarSign, MapPin, Star } from "lucide-react";

interface BlogItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  date: string;
}

const Blog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/all`, {
    cache: "no-store",
  });

  const data: BlogItem[] = await res.json();
  const blogs = data.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-100 via-sky-50 to-indigo-100 py-20">
         <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

          <div className="container relative z-10 mx-auto px-4">
    <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Latest Articles
        </span>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Explore Our Latest Blogs
        </h2>

        <p className="mt-4 text-default-500">
          Discover inspiring destinations, travel tips, and stories from around
          the world.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {blogs.map((blog) => (
          <Card
            key={blog._id}
            className="group overflow-hidden border border-default-200 bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Price */}
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-lg">
                ${blog.price}
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-black shadow-lg">
                <Star size={14} fill="currentColor" />
                {blog.rating}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/* Title */}
              <h3 className="line-clamp-1 text-xl font-bold">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-default-500">
                {blog.description}
              </p>

              {/* Meta */}
              <div className="mt-6 space-y-3 text-sm text-default-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{blog.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{blog.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-primary" />
                  <span>${blog.price}</span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-auto pt-6">
                <Link href={`/manage-items/${blog._id}`}>
                  <Button
                    
                    className="w-full font-semibold"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
      </div>
      {/* Section Heading */}
      
    </section>
  );
};

export default Blog;