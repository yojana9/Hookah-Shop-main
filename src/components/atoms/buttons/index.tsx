import React, { useMemo } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, text, onClick }) => {
  // ✅ Memoize classes so they're only recalculated if `variant` changes
  const classes = useMemo(() => {
    const base =
      "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold tracking-wide transition-colors";

    const styles = {
      primary:
        "bg-purple-700 text-white hover:bg-purple-800 focus:ring-2 focus:ring-purple-600",
      secondary:
        "border border-purple-700 text-purple-700 hover:bg-purple-50 focus:ring-2 focus:ring-purple-600",
    };

    return `${base} ${styles[variant]}`;
  }, [variant]);

  return (
    <button onClick={onClick} className={classes}>
      {text}
      {variant === "primary" && <span className="ml-2">→</span>}
    </button>
  );
};

export default Button;
