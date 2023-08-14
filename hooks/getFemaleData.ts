import { client } from "@/app/lib/sanityClient";
import { Image } from "sanity";

export const getFemaleData = async () => {
  const res =
    await client.fetch(`*[_type == 'product' && category->name == 'Female'] {
    _id,
    title,
    image,
    price,
    category->{
      name
    }
  }`);
  return res;
};

export interface getFemaleDataProps {
  _id: number;
  title: string;
  image: Image;
  price: number;
  category: {
    name: string;
  };
}
