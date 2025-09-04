import React, { useMemo } from "react";

type HeaderProps = {
  text: string;
  size?: "medium" | "small";
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ text, size = "medium", className }) => {
  // ✅ Memoize className so it's only recalculated if `size` or `className` changes
  const classes = useMemo(() => {
    const styles = {
      medium: "text-4xl font-extrabold tracking-wide uppercase",
      small: "text-xl font-semibold",
    };
    return `${styles[size]} ${className || ""}`;
  }, [size, className]);

  return <h2 className={classes}>{text}</h2>;
};

export default Header;
