import { LayoutProps } from "@/types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col bg-main-gray min-h-screen py-4 px-32">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
