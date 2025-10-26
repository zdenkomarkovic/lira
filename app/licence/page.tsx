"use client";

import React, { useState } from "react";

const Licence = [
  "2024.pdf",
  "2 Licenca Zoran Cvetković.pdf",
  "3 Licenca Predrag Micić.pdf",
  "4 Licenca Milena Ilić.pdf",
  "5 Licenca Sanja Krstić.pdf",
  "6 Licenca Marija Vidojković.pdf",
  "7 Licenca Sanja Stojanović.pdf",
  "8 Licenca Stefan Milijić.pdf",
  "9 Licenca Marija Stojanović.pdf",
];
const Licence2 = [
  "10 Rešenje-Procena rizika od katastrofa i Plan zaštite i spasavanja.pdf",
  "11 Licenca Sanja Stojanovuć - Vanredne.pdf",
  "12 Licenca Marija Stojanović - Vanredne.pdf",
  "13 Licenca Sanja Krstić - Vanredne.pdf",
  "14 Licenca Nemanja Dojčinović - Vanredne.pdf",
];

const Page = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <div className="py-12 md:py-24 ">
      <div className="container px-2 md:px-4 mx-auto pt-12 md:pt-0 space-y-6 md:space-y-12">
        <h1 className="text-primary text-3xl md:text-6xl font-bold text-center">
          Naše licence
        </h1>{" "}
        <h2 className="text-2xl md:text-5xl">Bezbednost i zdravlje na radu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Licence.map((pdf, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white"
              onClick={() => setSelectedPdf(pdf)}
            >
              <div className="bg-gray-100 p-3 border-b">
                <h3 className="text-sm font-semibold truncate" title={pdf}>
                  {pdf.replace(".pdf", "")}
                </h3>
              </div>
              <div className="w-full aspect-[1/1.414]">
                <iframe
                  src={`/images/${pdf}#toolbar=0`}
                  className="w-full h-full pointer-events-none"
                  title={pdf}
                />
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl md:text-5xl">Vanredne situacije</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Licence2.map((pdf, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white"
              onClick={() => setSelectedPdf(pdf)}
            >
              <div className="bg-gray-100 p-3 border-b">
                <h3 className="text-sm font-semibold truncate" title={pdf}>
                  {pdf.replace(".pdf", "")}
                </h3>
              </div>
              <div className="w-full aspect-[1/1.414]">
                <iframe
                  src={`/images/${pdf}#toolbar=0`}
                  className="w-full h-full pointer-events-none"
                  title={pdf}
                />
              </div>
            </div>
          ))}
        </div>
        {selectedPdf && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
                <h2 className="text-lg font-semibold truncate pr-4">
                  {selectedPdf.replace(".pdf", "")}
                </h2>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-600 hover:text-gray-900 text-2xl font-bold px-3 py-1 rounded hover:bg-gray-200"
                >
                  ×
                </button>
              </div>
              <iframe
                src={`/images/${selectedPdf}#toolbar=0`}
                className="w-full h-[calc(100%-60px)]"
                title={selectedPdf}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default Page;
