"use client";

import { useEffect, useMemo, useState } from "react";
import { Input, Pagination } from "@heroui/react";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface Product {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  date: string;
}

const ITEMS_PER_PAGE = 15;

const ManageItems = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/all`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

 const formattedData = data.map((item: any) => ({
  ...item,
  price: Number(item.price),
  rating: Number(item.rating),
}));

setProducts(formattedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const locations = [
    "all",
    ...new Set(products.map((item) => item.location)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    result = result.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    // Location Filter
    if (location !== "all") {
      result = result.filter(
        (item) => item.location === location
      );
    }

    // Rating Filter
    if (rating !== "all") {
      result = result.filter(
        (item) => item.rating >= Number(rating)
      );
    }

    // Sorting
    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        result.sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );
    }

    return result;
  }, [products, search, location, rating, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );



  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Manage Products
          </h1>

          <p className="mt-2 text-default-500">
            Search, filter, sort and manage your products.
          </p>
        </div>

        {/* Search & Filters */}

        <div className="mb-10 grid gap-4 md:grid-cols-4">

          {/* Search */}

         <Input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search products..."
  
   />

          {/* Location */}

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-default-300 bg-white px-4 py-3 outline-none transition focus:border-primary"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "all" ? "All Locations" : loc}
              </option>
            ))}
          </select>

          {/* Rating */}

          <select
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-default-300 bg-white px-4 py-3 outline-none transition focus:border-primary"
          >
            <option value="all">All Ratings</option>
            <option value="4">4★ & Up</option>
            <option value="3">3★ & Up</option>
            <option value="2">2★ & Up</option>
          </select>

          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-default-300 bg-white px-4 py-3 outline-none transition focus:border-primary"
          >
            <option value="newest">Newest</option>
            <option value="price-low">
              Price: Low → High
            </option>
            <option value="price-high">
              Price: High → Low
            </option>
            <option value="rating">
              Highest Rating
            </option>
          </select>
        </div>

        {/* Products */}

        {loading ? (
          <div className="py-20 text-center text-lg font-semibold">
            Loading products...
          </div>
        ) : paginatedProducts.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold">
              No Products Found
            </h2>

            <p className="mt-2 text-default-500">
              Try changing your search or filter options.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  
                />
              ))}
            </div>

           
          </>
        )}
      </div>
    </section>
  );
};

export default ManageItems;