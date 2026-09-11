import { motion } from "framer-motion";
import { forwardRef } from "react";

type HalomotButtonProps = {
  inscription: string;
  onClick?: () => void;
  fixedWidth?: string;
  fillWidth?: boolean;
  gradient?: string;
  backgroundColor?: string;
  textColor?: string;
  innerBorderRadius?: string;
  outerBorderRadius?: string;
  hoverTextColor?: string;
  href?: string;
  className?: string;
};

export const HalomotButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, HalomotButtonProps>(
  (
    {
      inscription,
      onClick,
      fixedWidth,
      fillWidth = false,
      gradient = "linear-gradient(to right, #a123f4, #603dec)",
      backgroundColor = "#111014",
      textColor = "#fff",
      innerBorderRadius = "6px",
      outerBorderRadius = "6.34px",
      hoverTextColor,
      href,
      className = "",
    },
    ref
  ) => {
    const baseStyle = {
      width: fillWidth ? "100%" : fixedWidth,
      padding: "12px 24px",
      borderRadius: outerBorderRadius,
      background: backgroundColor,
      border: "1px solid rgba(255, 255, 255, 0.1)",
      cursor: "pointer",
      overflow: "hidden",
      textDecoration: "none",
      display: "inline-block",
    };

    const content = (
      <>
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: gradient,
          }}
        />

        {/* Inner Content */}
        <div
          className="relative z-10"
          style={{
            borderRadius: innerBorderRadius,
            padding: "8px 16px",
            background: "transparent",
            color: textColor,
            fontWeight: "600",
            fontSize: "14px",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (hoverTextColor) {
              e.currentTarget.style.color = hoverTextColor;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = textColor;
          }}
        >
          {inscription}
        </div>
      </>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative group ${className}`}
          style={baseStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
        style={baseStyle}
      >
        {content}
      </motion.button>
    );
  }
);

HalomotButton.displayName = "HalomotButton";