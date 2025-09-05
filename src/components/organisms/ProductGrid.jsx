import React, { useCallback, useMemo, useState } from "react";
import ProductCard from "@/components/atoms/card";
import { products as initialProducts } from "@/data/product";

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState({});

  const products = useMemo(() => initialProducts, []);

  const handleToggleWishlist = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      const key = String(id);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const handleAddToCart = useCallback((id) => {
    const key = String(id);
    setCart((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-5 py-8">
      <div className="mb-4 text-sm text-neutral-700 flex items-center gap-4">
        <span>Cart items: {Object.values(cart).reduce((a, b) => a + b, 0)}</span>
        <span className="hidden sm:inline">•</span>
        <span>Wishlist: {wishlist.size}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            image={p.image || "/Hookahphoto.jpg"}
            price={p.price}
            currency="NPR"
            rating={p.rating}
            reviewsCount={p.reviewsCount}
            badge={p.badge}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            inWishlist={wishlist.has(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
