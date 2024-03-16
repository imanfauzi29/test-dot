"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Card, {
  CardContent,
  CardImage,
  CardTitle,
} from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";
import DetailProduct from "@/components/detailProduct/DetailProduct";
import Navbar from "@/components/layout/Navbar";
import Testimonial from "@/components/testimonial/Testimonial";
import { slides } from "@/data/carousel";
import { anotherDetailProductList, detailProduct } from "@/data/detail-product";
import { homeList } from "@/data/home-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <Navbar />
      <Breadcrumb />
      <Carousel images={slides} />

      <section className="flex gap-8 px-14">
        <div className="w-full">
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
        <div>
          <div className="flex flex-col gap-4 w-full">
            <div className="rounded-2xl border p-6 w-full">
              <DetailProduct data={detailProduct} />
            </div>

            {/* Testimonial  */}
            <div className="w-full space-y-4">
              <h2 className="text-2xl font-semibold">Testimoni</h2>
              <div className="flex flex-col gap-4">
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* another design  */}
      <section className="p-14 space-y-4">
        <h2 className="text-2xl font-semibold">
          Desain Lainnya oleh Studio SAe
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {anotherDetailProductList.map((item, i) => (
            <Card key={i}>
              <CardImage
                src={item.image as string}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
              <CardContent>
                <DetailProduct data={item} btnVariant="secondary" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
