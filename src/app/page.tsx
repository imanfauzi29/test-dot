"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Carousel from "@/components/carousel/Carousel";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const slides = [
  "/carousel/image-1.jpg",
  "/carousel/image-2.jpg",
  "/carousel/image-3.jpg",
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-14">
      <Navbar />
      <Breadcrumb />
      <Carousel images={slides} />
    </main>
  );
}
