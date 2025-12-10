import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "./globals.css";

import type { Metadata } from "next";
import GradientBackground from "@/components/visual/GradientBackground";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio – Développeur Frontend",
  description: "Expériences Web créatives et interactives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className="
          relative min-h-screen antialiased
          bg-transparent selection:bg-black/10
        "
      >
        {/* Fond animé */}
        <GradientBackground />

        {/* Header flottant */}
        <Header />

        {/* Contenu principal */}
        <main
          className="
            page-main
            relative z-10
            pt-32
          "
        >
          {children}
        </main>

        {/* Footer */}
        <Footer className="mt-16" />
      </body>
    </html>
  );
}