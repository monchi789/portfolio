import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[url(./assets/background.svg)]">
      <div className="container mx-3 md:mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
