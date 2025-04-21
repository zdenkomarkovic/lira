"use client";
import React from "react";
import Image from "next/image";
import { reference } from "@/constants/index";
import { motion } from "framer-motion";

const References = () => {
  return (
    <div className="">
      <div className="container px-6 mx-auto border-t text-center text-primary py-7 md:py-12 space-y-5 md:space-y-10">
        <h2 className="">Reference</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {reference.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px ",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-muted p-5 shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className=" mx-auto my-auto"
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default References;
