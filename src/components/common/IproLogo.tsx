type IproLogoProps = {
  /** "dark" = white text label, for use on dark/coloured backgrounds.
      "light" = dark text label, for use on light/white backgrounds. */
  variant?: "dark" | "light";
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function IproLogo({
  variant = "light",
  size = 34,
  className,
  style
}: IproLogoProps) {
  const labelColor = variant === "dark" ? "#ffffff" : "#14202c";
  const fontSize = Math.round(size * 0.5);
  const textSize = Math.round(size * 0.53);
  const gap = Math.round(size * 0.29);
  const borderRadius = Math.round(size * 0.26);

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap, ...style }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius,
          background: "#238be6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: 800,
          fontSize,
          fontFamily: "'Geist', 'Helvetica Neue', sans-serif",
          flexShrink: 0
        }}
      >
        iF
      </div>
      <span
        style={{
          fontWeight: 700,
          fontSize: textSize,
          color: labelColor,
          fontFamily: "'Geist', 'Helvetica Neue', sans-serif",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }}
      >
        Ipro Fix
      </span>
    </div>
  );
}
