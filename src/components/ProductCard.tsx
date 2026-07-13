import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import {
  Calendar,
  DollarSign,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

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

interface Props {
  product: Product;
}

const ProductCard = ({ product}: Props) => {
  return (
    <Card className="group overflow-hidden border border-default-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={350}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Price Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 shadow-lg">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <DollarSign size={14} className="text-primary" />
            {product.price}
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 shadow-lg">
          <div className="flex items-center gap-1 text-sm font-semibold text-black">
            <Star size={14} fill="currentColor" />
            {product.rating}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-default-500">
          {product.description}
        </p>

        {/* Meta */}
        <div className="mt-5 space-y-3 text-sm text-default-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            {product.location}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            {product.date}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-6 space-y-3">
          <Link href={`/manage-items/${product._id}`}>
            <Button
             
              className="w-full font-semibold"
            >
              View Details
            </Button>
          </Link>

         
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;