import React from "react";
import Link from 'next/link';

type Props = {};

export default function HeroBanner({}: Props) {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center "
        style={{
          // blur the background image on the hero banner

          backgroundImage: `url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">ALURFIA IN SHELTER</h1>
          <p className="text-xl mb-8">
          ร้านบอร์ดเกม คาราโอเกะ และไอศกรีมซอฟท์เสิร์ฟหน้า มฟล.
          </p>
          <Link
            href="/checkin"
            className="inline-block bg-blue-500 text-white px-8 py-3 text-sm font-medium rounded hover:bg-blue-700"
          >
            Check In
          </Link>
        </div>
      </div>
    </div>
  );
}
