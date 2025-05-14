"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "@/node_modules/next/image";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-primary text-muted pt-4 md:pt-0">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col-reverse md:flex-row justify-center items-center gap-0 md:gap-20">
        <Image
          src={"/man-9020932_640.png"}
          width={250}
          height={200}
          alt="ali i pvc stolarija"
          className="rounded-t-xl w-[170px] md:w-[250px]"
        />
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div>
            <h2 className=" text-xl md:text-3xl text-white">
              Kontaktirajte nas – naši stručnjaci su spremni da odgovore na sva
              vaša pitanja i pruže efikasna rešenja.
            </h2>
          </div>
          <a href="tel:+38162480690">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" mx-auto md:mx-0 text-nowrap flex gap-3 text-xl md:text-3xl items-center text-primary bg-white rounded-lg px-4 md:px-8 md:py-2 py-2"
            >
              <PhoneIcon /> Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
