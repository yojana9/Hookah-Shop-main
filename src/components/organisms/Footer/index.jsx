// src/components/organisms/Footer/index.jsx
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* SHOP */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-800">
              Shop
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li><span className="hover:underline cursor-pointer">Shop all</span></li>
              <li><span className="hover:underline cursor-pointer">New arrivals</span></li>
              <li><span className="hover:underline cursor-pointer">Accessories</span></li>
              <li><span className="hover:underline cursor-pointer">Hot Sale</span></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-800">
              Company
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li><span className="hover:underline cursor-pointer">About us</span></li>
              <li><span className="hover:underline cursor-pointer">Contact us</span></li>
              <li><span className="hover:underline cursor-pointer">Terms &amp; Conditions</span></li>
              <li><span className="hover:underline cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-800">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>786 Acorn Drive, Harrisonburg,<br />VA 22802, USA</li>
              <li>(+1) 329742389749</li>
              <li>example@example.com</li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-neutral-200" />

        {/* Bottom strip */}
        <div className="pt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: logo + socials */}
          <div className="flex items-center gap-6">
            <span className="font-extrabold text-2xl tracking-tight select-none">LOGO</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-black hover:text-white cursor-pointer">
                <FaTwitter className="h-5 w-5" />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-black hover:text-white cursor-pointer">
                <FaFacebookF className="h-5 w-5" />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-black hover:text-white cursor-pointer">
                <FaInstagram className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="text-xs text-neutral-600 text-center md:flex-1">
            © {new Date().getFullYear()} Epic Distribution Pvt. Ltd., All Rights Reserved
          </div>

          <div className="text-xs text-neutral-600 text-center md:text-right">
            Made by: <span className="font-semibold">Lishnu Tech Pvt. Ltd.</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
