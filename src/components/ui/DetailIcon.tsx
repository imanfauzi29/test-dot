import { DetailProduct } from "@/types/detail-product.types";
import Image from "next/image";


const DetailIcon = ({ icon, text, value }: DetailProduct) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <Image
        src={icon}
        width={0}
        height={0}
        alt={icon}
        sizes="100vw"
        className="size-6 md:size-8 text-secondary"
      />
      <span className="block text-xs md:text-base font-normal text-gray-500 text-nowrap">
        {text}
      </span>
      <span className="block text-xs md:text-base font-medium text-gray-900">
        {value}
      </span>
    </div>
  );
};

export default DetailIcon;
