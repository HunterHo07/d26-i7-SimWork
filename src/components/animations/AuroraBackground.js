'use client';

export default function AuroraBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-aurora-gradient bg-[length:200%_200%] animate-aurora opacity-20"></div>
    </div>
  );
}
