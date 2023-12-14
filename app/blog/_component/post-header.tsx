import { ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getThumbnailPath } from "../../../services/utils";

type Props = {
  title?: string;
  description?: string;
  date?: string;
  slug: string[];
};

export default async function PostHeader({
  title,
  description,
  date,
  slug,
}: Props) {
  const thumbnailPath = await getThumbnailPath(slug);
  return (
    <header className="w-full h-full px-10 flex flex-col justify-center items-center relative">
      <div className="text-center">
        <Image
          width={400}
          height={400}
          className="w-[400px] h-[400px] mx-auto object-cover"
          src={thumbnailPath}
          alt={`${title} 이미지`}
        />
        <h1 className="pt-4 pb-6 text-7xl font-bold">{title}</h1>
        <p className="text-xl my-2 break-all">{description}</p>
        <p className="font-light">{date}</p>
      </div>
      <ChevronDownCircle className="w-8 h-8 absolute left-[50%] translate-x-[-50%] bottom-10" />
    </header>
  );
}
