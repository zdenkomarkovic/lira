"use client";

import Hero3 from "../public/hero.png";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="zastita na radu"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto text-center flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="text-primary text-2xl md:text-7xl font-bold px-4">
          INSTITUT LIRA NIŠ
        </h1>
        <h2 className="text-muted font-medium text-md md:text-4xl">
          Privredno društvo za bezbednost i zdravlje na radu, zaštitu životne
          sredine, zaštitu od požara, istraživanje, projektovanje i obrazovanje
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/#usluge">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-muted px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
            >
              Istražite naše usluge
              <ArrowRightIcon className="w-[25px]" />
            </motion.button>
          </Link>
          <a href="tel:+38162480690">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-muted border-muted border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
