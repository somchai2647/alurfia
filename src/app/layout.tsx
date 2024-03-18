import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Providers } from "./providers";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";

const inter = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "ALURFIA IN SHELTER",
  description:
    "ALURFIA IN SHELTER ร้านบอร์ดเกม คาราโอเกะ และไอศกรีมซอฟท์เสิร์ฟหน้า มฟล.",
  keywords:
    "ALURFIA IN SHELTER, ร้านบอร์ดเกม, คาราโอเกะ, ไอศกรีมซอฟท์เสิร์ฟหน้า, มฟล.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
