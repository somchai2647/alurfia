import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function HeroBanner({}: Props) {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center "
        style={{
          // blur the background image on the hero banner
          backgroundImage: `url(/background2-blur.jpg)`,
        }}
      >
        <div className="text-center text-white ">
          <div className="w-full flex justify-center">
            {/* tailwind animation loop scale */}
            <div className="rounded-full animate-pulse">
              <Image src="/favicon.ico" width={200} height={200} alt="logo" />
            </div>
          </div>
          <div className="drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-black">
            <h1 className="text-5xl font-bold mb-4">ALURFIA IN SHELTER</h1>
            <p className="text-xl md:text-3xl  mb-8">
              ร้านบอร์ดเกม คาราโอเกะ และไอศกรีมซอฟท์เสิร์ฟหน้า มฟล.
            </p>
          </div>
          <Link
            href="/checkin"
            className="inline-block bg-blue-500 text-white px-8 py-3 text-2xl font-medium rounded hover:bg-blue-700"
          >
            Check In
          </Link>
        </div>
      </section>
    </div>
  );
}
