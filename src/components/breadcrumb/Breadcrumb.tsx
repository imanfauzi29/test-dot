"use client";

import { BreadcrumbType } from "@/types/navbar.types";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumb = () => {
  const breadcrumbs: BreadcrumbType[] = [
    { name: "Home", href: "#" },
    { name: "Layanan Desain", href: "#" },
    { name: "Omah Apik 3", href: "#" },
  ];

  return (
    <nav className="flex px-14" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map(({ name, href }, i) => (
          <li key={i}>
            <div className="flex items-center">
              {/* breadcrumb icon, show when not last item */}
              {i > 0 && <FaChevronRight className="size-3 text-gray-300" />}
              {/* span when last item */}
              {i === breadcrumbs.length - 1 ? (
                <span className="ms-1 text-sm font-medium md:ms-2 text-gray-500">
                  {name}
                </span>
              ) : (
                <a
                  href={href}
                  className="ms-1 text-sm font-medium  md:ms-2 text-secondary"
                >
                  {name}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
