"use client";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}
