"use client";
import Link from "next/link.js";
import { PageData, pageData } from "@/constants/index";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";

const CardsList = () => {
  return (
    <div className="container px-2 md:px-40 mx-auto py-20 border-t space-y-10">
      <h2 className="">Šta to mi radimo za vas?</h2>

      <div className=" grid grid-cols-6 gap-6 items-strech">
        {pageData.map((card, index) => {
          if (index < 3) {
            return (
              <Link key={index} href={card.route} className="col-span-2">
                <Card data={card} />
              </Link>
            );
          }
          if (index === 3) {
            return (
              <>
                <div></div>
                <Link key={index} href={card.route} className="col-span-2">
                  <Card data={card} />
                </Link>
              </>
            );
          }
          if (index > 3) {
            return (
              <>
                <Link key={index} href={card.route} className="col-span-2">
                  <Card data={card} />
                </Link>
                <div></div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardsList;

const Card = ({ data }: { data: PageData }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      className="h-full flex flex-col shadow-2xl shadow-muted-foreground"
    >
      <Image
        src={data.image}
        width={400}
        height={500}
        alt="zastita na radu"
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-3 flex flex-col justify-between grow">
        <h3 className="text-primary py-2 font-bold">{data.title}</h3>
        <p className="text-right">saznaj više...</p>
      </div>
    </motion.div>
  );
};
