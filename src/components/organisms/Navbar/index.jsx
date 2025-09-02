// src/components/organisms/Navbar/index.jsx
import React, { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

function Bar({ bg, children, onClose }) {
  return (
    <div className={`${bg} text-black/80 text-[11px] md:text-xs`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-center relative">
        <div className="truncate">{children}</div>
        <button
          aria-label="Close"
          className="absolute right-2 text-neutral-500 hover:text-neutral-800"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}

const NavItem = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      [
        "px-3 py-2 text-[15px] transition relative",
        isActive
          ? "text-neutral-900 font-semibold after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-[2px] after:bg-purple-600"
          : "text-neutral-700 hover:text-neutral-900",
      ].join(" ")
    }
  >
    {children}
  </RouterNavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showWarn, setShowWarn] = useState(true);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200 shadow-sm">
      {/* top slim bars */}
      {showWarn && (
        <Bar bg="bg-white" onClose={() => setShowWarn(false)}>
          <strong>WARNING:</strong>&nbsp;This product contains NICOTINE.
        </Bar>
      )}
      {showPromo && (
        <Bar bg="bg-[#E5F6E8]" onClose={() => setShowPromo(false)}>
          Get <b>20% off</b> your first order.&nbsp;
          <button className="underline underline-offset-2">Sign up now</button>
        </Bar>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop / tablet */}
        <div className="h-16 hidden md:grid grid-cols-3 items-center">
          {/* left links */}
          <nav className="flex items-center gap-2">
            <NavItem to="/shop">Shop all</NavItem>
            <NavItem to="/new">New arrivals</NavItem>
            <NavItem to="/accessories">Accessories</NavItem>
            <NavItem to="/hot-sale">Hot Sale</NavItem>
          </nav>

          {/* centered logo */}
          <div className="flex items-center justify-center">
            <Link to="/" className="inline-flex items-center select-none">
              <img
                src="/logo.png"
                alt="EPIC"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* right controls */}
          <div className="flex items-center justify-end gap-2">
            <Link
              to="/search"
              className="hidden lg:flex items-center gap-2 w-[22rem] px-4 py-2 rounded-full border bg-white focus-within:ring-2 focus-within:ring-purple-500/30"
            >
              <FiSearch />
              <input
                readOnly
                placeholder="Search"
                className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400 cursor-pointer"
              />
            </Link>

            <Link
              aria-label="Account"
              to="/account"
              className="p-2 rounded-lg hover:bg-neutral-100"
            >
              <FiUser className="h-5 w-5" />
            </Link>

            {/* ✅ Cart icon without badge */}
            <Link
              aria-label="Cart"
              to="/cart"
              className="p-2 rounded-lg hover:bg-neutral-100"
            >
              <FiShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile bar */}
        <div className="h-16 flex md:hidden items-center justify-between gap-3">
          <button
            aria-label="Open menu"
            className="p-2 rounded-lg hover:bg-neutral-100"
            onClick={() => setOpen(true)}
          >
            <FiMenu className="h-5 w-5" />
          </button>

          <Link to="/" className="inline-flex items-center gap-2 select-none">
            <img src="/logo.png" alt="EPIC" className="h-10 w-auto object-contain" />
          </Link>

          {/* ✅ Mobile Cart icon without badge */}
          <Link
            aria-label="Cart"
            to="/cart"
            className="p-2 rounded-lg hover:bg-neutral-100"
          >
            <FiShoppingCart className="h-5 w-5" />
          </Link>
        </div>

        {/* mobile search under bar */}
        <div className="md:hidden pb-3">
          <Link
            to="/search"
            className="flex items-center gap-2 px-3 py-2 border rounded-full bg-white"
          >
            <FiSearch className="shrink-0" />
            <input
              readOnly
              placeholder="Search products"
              className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute left-0 top-0 h-full w-[84%] max-w-xs bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="font-black text-lg">Menu</span>
              <button
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <nav className="grid gap-1 text-[15px]">
              <RouterNavLink to="/shop" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-neutral-100">Shop all</RouterNavLink>
              <RouterNavLink to="/new" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-neutral-100">New arrivals</RouterNavLink>
              <RouterNavLink to="/accessories" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-neutral-100">Accessories</RouterNavLink>
              <RouterNavLink to="/hot-sale" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-neutral-100">Hot Sale</RouterNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
