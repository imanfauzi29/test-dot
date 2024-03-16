import Image from "next/image";

interface BankFooterProps {
  title: string;
  banks: string[];
}

const BankFooter = ({ banks, title }: BankFooterProps) => {
  return (
    <div className="space-y-4">
      <span className="block">{title}</span>
      <div className="flex gap-6">
        {banks.map((bank, i) => (
          <Image
            key={i}
            src={bank}
            alt={bank}
            width={0}
            height={0}
            sizes="100vw"
            className="h-10 w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default BankFooter;
