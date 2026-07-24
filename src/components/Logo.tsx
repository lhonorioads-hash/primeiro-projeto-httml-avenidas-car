import Image from "next/image";
import logo from "@/assets/brand/logo.png";

export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Avenidas Car"
      priority
      className={className}
    />
  );
}
