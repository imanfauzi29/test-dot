import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="flex flex-row items-start gap-4">
      <Image src="fake_profile.svg" alt="Fake Profile" width={36} height={36} />
      <div className="space-y-2">
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-base md:text-xl">
            Budi Setiadi
          </span>
          <div className="h-4 w-[1px] bg-gray-400" />
          <div className="flex gap-2 items-center">
            <FaStar className="size-5 text-yellow-400" />
            <span>4.5</span>
          </div>
        </div>
        <p className="text-base font-normal text-gray-400">
          Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat
          Bangun
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
