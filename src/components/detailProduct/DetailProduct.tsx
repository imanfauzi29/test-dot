import Image from "next/image";
import DetailIcon from "../ui/DetailIcon";
import Button, { Variant } from "../ui/button/Button";
import { FaCheckCircle } from "react-icons/fa";
import { DetailProductList } from "@/types/detail-product.types";

interface DetailProductProps {
  data: DetailProductList;
  btnVariant?: Variant;
}

const DetailProduct = ({
  data,
  btnVariant = "primary",
}: DetailProductProps) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
            {data.house_type && (
              <div className="py-1 px-6 rounded-full bg-gray-100 text-gray-800">
                {data.house_type}
              </div>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src={data.profile}
              alt={data.user_account}
              width={0}
              height={0}
              sizes="100vw"
              className="size-7 xl:size-9"
            />
            <span className="text-sm lg:text-base">{data.user_account}</span>
          </div>
        </div>

        {data.type_house && (
          <div className="flex flex-col gap-2">
            <table>
              <tbody>
                <tr>
                  <td className="text-gray-500">Jenis Rumah</td>
                  <td className="text-gray-900">{data.type_house}</td>
                </tr>
                <tr>
                  <td className="text-gray-500">Tipe Desain</td>
                  <td className="text-gray-900">
                    <span className="text-secondary flex gap-2 items-center">
                      <FaCheckCircle /> {data.design_type}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-between py-3 border-t border-b gap-4 overflow-auto">
          {data.detail_product.map(({ icon, text, value }, i) => (
            <DetailIcon key={i} icon={icon} text={text} value={value} />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="block">Harga Desain</span>
          <h1 className="text-2xl lg:text-4xl font-semibold">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.price)}
          </h1>
          <p className="text-gray-500">{data.price_description}</p>
        </div>

        <Button
          variant={btnVariant}
          text="Konsultasi Sekarang"
          className="w-full !py-4"
        />
      </div>
    </>
  );
};

export default DetailProduct;
