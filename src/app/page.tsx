import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-14">
      <Navbar />
      <Breadcrumb />
    </main>
  );
}
