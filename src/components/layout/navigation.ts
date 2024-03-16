import { NavigationType } from "@/types/Navbar";

export const navigation: NavigationType[] = [
    {
        name: "Tentang Kami",
        href: "#",
        children: [
            { name: "Visi & Misi", href: "/about" },
            { name: "Sejarah", href: "/about" },
        ],
    },
    {
        name: "Product & Layanan",
        href: "#",
        children: [
            { name: "Product", href: "/product" },
            { name: "Layanan", href: "/service" },
        ],
    },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
];