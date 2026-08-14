import { company } from "@/config/company";
import logoAsset from "@/assets/logo.png";

/** Logo oficial. Troque src/assets/logo.png para atualizar a marca. */
export function Logo({
  tone = "dark",
  className = "h-10",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className="flex items-center">
      <img
        src={logoAsset}
        alt={`${company.companyName} - táxi na Mooca, São Paulo`}
        loading="eager"
        decoding="async"
        className={`w-auto ${className} ${
          tone === "light" ? "[filter:brightness(0)_invert(1)]" : ""
        }`}
      />
    </span>
  );
}
