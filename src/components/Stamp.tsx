interface StampProps {
  src: string;
  alt?: string;
  label?: string;
  year?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  rotate?: number;
}

export default function Stamp({
  src,
  alt = "",
  label = "POSTES",
  year = "2025",
  className = "",
  size = "md",
  rotate = 0,
}: StampProps) {
  const sizes = {
    sm: "w-24 h-28",
    md: "w-36 h-44",
    lg: "w-48 h-56",
  };

  return (
    <div
      className={`inline-block ${sizes[size]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="w-full h-full bg-white relative flex flex-col"
        style={{
          padding: "6px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          backgroundImage: `
            radial-gradient(circle, transparent 4px, white 4px)
          `,
          backgroundSize: "12px 12px",
          backgroundPosition: "-6px -6px",
          border: "none",
          outline: "none",
        }}
      >
        <div
          className="w-full h-full flex flex-col overflow-hidden relative"
          style={{
            border: "2px solid #ccc",
            background: "white",
            padding: "4px",
          }}
        >
          <div className="flex justify-between items-start mb-1 px-1">
            <span className="text-[8px] text-gray-500 font-mono">{year}</span>
            <span className="text-[8px] text-gray-400 font-mono italic">air mail</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-end items-center px-1 mt-1">
            <span className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
