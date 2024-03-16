import BankFooter from "@/components/bankFooter/BankFooter";
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
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

      {/* footer  */}
      <footer className="px-14 py-8 bg-[#012846] text-white gap-8 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 max-w-md">
            <Image
              src="/logo-white.png"
              alt="image-white"
              width={0}
              height={0}
              sizes="100vw"
              className="w-32"
            />
            <p>
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </p>
            <div className="flex items-center gap-2">
              <MdMailOutline />
              <span>sobat@sobatbangum.com</span>
            </div>

            <span>Social media:</span>
            <div className="flex items-center gap-4 text-gray-900">
              <div className="p-4 rounded-full bg-white">
                <FaInstagram />
              </div>
              <div className="p-4 rounded-full bg-white">
                <TiSocialFacebook />
              </div>
              <div className="p-4 rounded-full bg-white">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="flex gap-44">
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Produk & Layanan</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#">Renovasi</a>
                </li>
                <li>
                  <a href="#">Bangun Rumah</a>
                </li>
                <li>
                  <a href="#">Layanan Desain</a>
                </li>
                <li>
                  <a href="#">Teknologi Tambahan</a>
                </li>
                <li>
                  <a href="#">Beli Material</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Tentang Kami</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#">Tentang SobatBangun</a>
                </li>
                <li>
                  <a href="#">Kebijakan dan Privasi</a>
                </li>
                <li>
                  <a href="#">Syarat dan Ketentuan</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Daftar Menjadi Mitra</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <BankFooter
            title="Kredit Bangun Rumah"
            banks={["/bank/mandiri.png", "/bank/btn.png", "/bank/bni.png"]}
          />
          <BankFooter
            title="Tunai Via Bank Transfer"
            banks={[
              "/bank/mandiri.png",
              "/bank/bri.png",
              "/bank/bni.png",
              "/bank/permata.png",
            ]}
          />
          <BankFooter
            title="Kartu Kredit"
            banks={["/bank/visa.png", "/bank/mastercard.png", "/bank/jcb.png"]}
          />
          <BankFooter
            title="Rekan Teknologi Tambahan"
            banks={[
              "/bank/asco.png",
              "/bank/agra-surya-energi.png",
              "/bank/adidaya.png",
              "/bank/agra-surya-energi.png",
            ]}
          />
        </div>

        {/* copyright */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center justify-center">
            <span className="text-nowrap">Powered by:</span>
            <Image
              src="/logo-sig.png"
              alt="logo sig"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-10"
            />
          </div>
          <span className="block text-xs">
            Copyright © 2023 SobatBangun. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
