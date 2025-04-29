"use client";
import Cards1 from "@/components/Cards1";
import { cards1Data, pageData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import { useParams, notFound } from "@/node_modules/next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const service = pageData.find((c) => c.id === id);
  if (!service) {
    notFound();
  }
  return (
    <div className="py-12 md:py-24">
      <div className="container px-2 md:px-4 mx-auto pt-12 md:pt-0 space-y-6 md:space-y-12">
        <h1 className="text-primary text-3xl md:text-6xl font-bold text-center">
          {service.title}
        </h1>
        <p className=" text-center">{service.text2}</p>
        <div className="flex gap-12 flex-col md:flex-row items-center justify-around">
          {" "}
          <div>
            {service.description.map((line, i) => {
              return <li key={i}>{line}</li>;
            })}
          </div>
          <Image
            src={service.image}
            width={500}
            height={200}
            alt="zastita na radu"
            className="w-full md:w-1/2 aspect-[3/2] object-cover"
          />
        </div>
        <p className=" text-center">{service.text}</p>
        <Cards1 title={"Institut Lira zaštita na radu"} data={cards1Data} />
      </div>
    </div>
  );
};

export default Page;
