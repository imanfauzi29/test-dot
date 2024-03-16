"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Card, { CardImage, CardTitle } from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

// carousel images
const slides = [
  "/carousel/image-1.jpg",
  "/carousel/image-2.jpg",
  "/carousel/image-3.jpg",
];

// home list image
const homeList = [
  {
    title: "Kamar Tidur",
    dimension: "4.0 x 3.4",
    image: "/home-list/kamar-tidur.png",
  },
  {
    title: "Ruang Keluarga",
    dimension: "2.0 x 2.9",
    image: "/home-list/ruang-keluarga.png",
  },
  {
    title: "Ruang Kerja",
    dimension: "2.0 x 2.9",
    image: "/home-list/ruang-kerja.png",
  },
  {
    title: "Ruang Makan & Dapur",
    dimension: "3.0 x 2.9",
    image: "/home-list/ruang-makan.png",
  },
  {
    title: "Ruang Keluarga",
    dimension: "2.0 x 2.9",
    image: "/home-list/ruang-keluarga.png",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <Navbar />
      <Breadcrumb />
      <Carousel images={slides} />

      <section className="flex gap-8 px-14">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Tampilan Rumah
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeList.map(({ dimension, image, title }, i) => (
              <Card key={i}>
                <CardImage
                  src={image}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <CardTitle text={title} description={dimension} />
              </Card>
            ))}
          </div>
        </div>
        <div className="min-w-96 w-full"></div>
      </section>
    </main>
  );
}
