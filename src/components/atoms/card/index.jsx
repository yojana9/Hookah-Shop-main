import React, { memo } from "react";

function Currency({ value, currency = "NPR" }) {
  const num = Number(value ?? 0);
  return (
    <span className="font-semibold text-neutral-900">
      {currency} {num.toLocaleString()}
    </span>
  );
}

const ProductCard = memo(function ProductCard({
  id,
  title,
  image = "/Hookahphoto.jpg",
  price,
  currency = "NPR",
  rating,
  reviewsCount,
  badge,
  onAddToCart,
  onToggleWishlist,
  inWishlist = false,
}) {
  return (
    <article className=" max-w-xl mx-auto bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition">
      {/* compact image area */}.
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="relative bg-neutral-100 overflow-hidden">
        {!!badge && (
          <span className="absolute left-2 top-2 text-[10px] px-2 py-1 rounded-full bg-black/80 text-white">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-[140px]  object-cover"
          loading="lazy"
        />
      </div>

      {/* content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-neutral-900 line-clamp-2">{title}</h3>

        <div className="mt-1 items-center justify-between text-[12px]">
          <Currency value={price} currency={currency} />
          {(rating || reviewsCount) && (
            <span className="text-[11px] text-neutral-600">
              ⭐ {rating ?? "—"}{reviewsCount ? ` (${reviewsCount})` : ""}
            </span>
          )}
        </div>

        {/* small buttons */}
        <div className="mt-3  gap-2">
          <button
            onClick={() => onAddToCart?.(id)}
            className="-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onToggleWishlist?.(id)}
            className={`px-2.5 py-1.5 rounded-lg ring-1 transition text-xs ${
              inWishlist
                ? "ring-pink-600 bg-pink-50 text-pink-700"
                : "ring-neutral-300 text-neutral-700 hover:bg-neutral-50"
            }`}
            aria-label="Toggle wishlist"
            title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            {inWishlist ? "♥" : "♡"}
          </button>
        </div>
      </div>
      </div>
    </article>
  );
});

export default ProductCard;
