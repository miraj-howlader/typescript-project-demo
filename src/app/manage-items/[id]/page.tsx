import Image from "next/image";
import { Calendar, DollarSign, MapPin, Star } from "lucide-react";


interface BlogDetails {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  date: string;
  createdAt: string;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CoreconnectDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
 

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/single/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog.");
  }

  const singleProduct: BlogDetails = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={1200}
            height={600}
            className="h-[450px] w-full object-cover"
          />

          <div className="space-y-6 p-8">
            <h1 className="text-4xl font-bold">
              {singleProduct.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-default-600">
              <div className="flex items-center gap-2">
                <DollarSign size={18} />
                <span>${singleProduct.price}</span>
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span>{singleProduct.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{singleProduct.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{singleProduct.date}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="mb-3 text-2xl font-semibold">
                Description
              </h2>

              <p className="leading-8 text-default-600">
                {singleProduct.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreconnectDetailsPage;