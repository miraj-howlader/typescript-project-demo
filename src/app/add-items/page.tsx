"use client";

import { useState } from "react";
import { 
  ImageIcon, 
  Loader, 
  Star, 
  Trash2, 
  UploadCloud 
} from "lucide-react";
// FIXED: Changed TextArea to Textarea (lowercase 'a')
import { Button, Card, Input, TextArea } from "@heroui/react";
import toast from "react-hot-toast";

interface ItemData {
  title: string;
  description: string;
  price: string;
  rating: string;
  location: string;
  date: string;
}

const AddItems = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<ItemData>({
    title: "",
    description: "",
    price: "",
    rating: "",
    location: "",
    date: "",
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImage(null);
    setPreview("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const uploadImage = async () => {
    if (!image) return "";
    try {
      const body = new FormData();
      body.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body,
        }
      );
      const data = await res.json();
      return data.data.url;
    } catch (error) {
      console.error("Image upload failed", error);
      return "";
    }
  };

  const handleSubmit = async () => {
    const { title, description, price, rating, location, date } = formData;
    
    if (
      !title.trim() || 
      !description.trim() || 
      !price.trim() || 
      !rating.trim() || 
      !location.trim() || 
      !date.trim() ||
      !image
    ) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage();
      if (!imageUrl) {
        toast.error("Failed to upload image.");
        return;
      }

      const payload = {
        ...formData,
        image: imageUrl,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Item added successfully");
        setFormData({ title: "", description: "", price: "", rating: "", location: "", date: "" });
        setImage(null);
        setPreview("");
      } else {
        toast.error("Failed to add item to database");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Safe helper to format price without breaking on partial entries
  const formatPrice = (val: string) => {
    const num = Number(val);
    return isNaN(num) || !val ? "—" : `$${num.toLocaleString()}`;
  };

  return (
    <section className="min-h-screen bg-default-50/50 py-12 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-default-100 pb-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-default-900 sm:text-4xl">
              Add New Listing
            </h1>
            <p className="mt-2 text-sm text-default-500 sm:text-base">
              Fill in the information below to showcase your item beautifully.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-1 border-default-100 bg-background shadow-sm">
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-default-800">Item Details</h2>
                  <p className="text-xs text-default-400 mt-0.5">Basic information about your offering</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />

                  <Input
                    required
                    placeholder="Price: 0.00"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>

                {/* FIXED: Using lowercase component name */}
                <TextArea
                  placeholder="Description"
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <Input
                    required
                    type="number"
                    placeholder="Rating: 4.5"
                    name="rating"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                  />

                  <Input
                    required
                    placeholder="Location, Dhaka, Bangladesh"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />

                  <Input
                    type="date"
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Card>

            {/* Premium Upload Dropzone */}
            <Card className="border-1 border-default-100 bg-background shadow-sm" >
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-default-800">Media Gallery</h2>
                  <p className="text-xs text-default-400 mt-0.5">Upload a high-quality display image</p>
                </div>

                <div className="relative">
                  {preview ? (
                    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-default-200 group">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button 
                          size="sm"
                          isIconOnly
                          onClick={removeImage}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="image"
                      className="group border-default-200 hover:border-primary/50 hover:bg-default-50 flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all"
                    >
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="mb-3 rounded-full bg-primary/10 p-4 text-primary group-hover:scale-110 transition-transform">
                          <UploadCloud className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-semibold text-default-700">
                          Click to upload or drag & drop
                        </p>
                        <p className="text-xs text-default-400 mt-1">
                          PNG, JPG, or WEBP up to 5MB
                        </p>
                      </div>
                      <input
                        id="image"
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                      />
                    </label>
                  )}
                </div>
              </div>
            </Card>

            <Button
              size="lg"
             
              className="w-full font-medium shadow-md shadow-primary/20"
              onPress={handleSubmit}
              
            >
              {/* FIXED: Added spin class to loader */}
              {loading ? <Loader className="animate-spin w-5 h-5" /> : "Add Item"}
            </Button>
          </div>

          {/* Sticky Preview Side */}
          <div className="lg:sticky lg:top-8">
            <Card className="border-1 border-default-100 bg-background shadow-md overflow-hidden">
              <div className="border-b border-default-100 px-6 py-4 bg-default-50/50">
                <h2 className="text-sm font-semibold tracking-wider uppercase text-default-500">Live Preview</h2>
              </div>
              
              <div className="p-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-default-100 border border-default-100">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center text-default-400 gap-2">
                      <ImageIcon className="w-8 h-8 stroke-[1.5]" />
                      <span className="text-xs font-medium">No cover image uploaded</span>
                    </div>
                  )}
                </div>

                <div className="mt-5 space-y-4 px-2 pb-2">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-default-800 line-clamp-1">
                      {formData.title || "Untitled Masterpiece"}
                    </h3>
                    <p className="text-sm text-default-500 mt-1 line-clamp-2 min-h-[40px]">
                      {formData.description || "Your crafted product description details will sit gracefully over here."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-default-100 bg-default-50/50 p-3">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-default-400 block">Price</span>
                      <span className="text-base font-semibold text-default-800 block mt-0.5">
                        {/* FIXED: Safe calculation wrapper */}
                        {formatPrice(formData.price)}
                      </span>
                    </div>

                    <div className="rounded-xl border border-default-100 bg-default-50/50 p-3">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-default-400 block">Rating</span>
                      <div className="flex items-center gap-1 text-base font-semibold text-default-800 mt-0.5">
                        <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 shrink-0" />
                        <span>{formData.rating || "0.0"}</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-default-100 bg-default-50/50 p-3">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-default-400 block">Location</span>
                      <span className="text-sm font-medium text-default-700 block mt-0.5 line-clamp-1">
                        {formData.location || "Not specified"}
                      </span>
                    </div>

                    <div className="rounded-xl border border-default-100 bg-default-50/50 p-3">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-default-400 block">Date</span>
                      <span className="text-sm font-medium text-default-700 block mt-0.5">
                        {formData.date ? new Date(formData.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'}) : "—"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItems;