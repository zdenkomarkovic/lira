"use client";

import React from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Cardlist = () => {
  return (
    <div className="py-20">
      <div className="container px-2 md:px-40 mx-auto space-y-10">
        <h2 className="text-6xl text-primary text-center  font-gagalin">
          Nama se možete obratiti za:
        </h2>

        <div className=" flex flex-col gap-4 md:gap-4 overflow-hidden">
          {workList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <Card className="w-full  md:w-3/4 shadow-lg relative overflow-hidden  bg-white">
                  <svg
                    className="absolute top-0 left-0 w-1/2 h-full text-card"
                    viewBox="0 0 256 150"
                    preserveAspectRatio="none"
                  >
                    <polygon points="0,0 200,160 0,160 0,160" fill="#f5f5f5" />
                  </svg>

                  <svg
                    className="absolute top-0 right-0 w-1/2 h-full text-card"
                    viewBox="0 0 256 150"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="256,0 56,160 256,160 256,160"
                      fill="#f5f5f5"
                    />
                  </svg>
                  <CardHeader>
                    <p className=" text-center relative z-5 text-2xl md:text-4xl items-center text-primary">
                      {item.title}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
