import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { navigation } from "./navigation";
import Button from "@/components/ui/button/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 w-full items-center">
      <Image
        src={"/logo.png"}
        width={0}
        height={0}
        sizes="100vh"
        className="w-auto h-10"
        alt="Logo"
      />

      <ul className="flex items-center gap-8">
        {navigation.map((item, i) => (
          <li key={i} className="block">
            <a
              href={item.href}
              className="py-2 flex items-center gap-2 font-semibold hover:text-secondary"
            >
              <span>{item.name}</span>
              {item.children && <FaChevronDown className="size-3" />}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Button variant="ghost" text="Daftar" />
        <Button text="Masuk" />
      </div>
    </div>
  );
};

export default Navbar;
