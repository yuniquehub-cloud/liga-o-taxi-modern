import { company } from "@/config/company";
import logoAsset from "@/assets/logo.png.asset.json";

/** Logo oficial. Troque src/assets/logo.png.asset.json para atualizar a marca. */
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
        src={logoAsset.url}
        alt={`${company.companyName} - táxi na Mooca, São Paulo`}
        loading="eager"
        decoding="async"
        className={`w-auto ${className} ${tone === "light" ? "invert" : ""}`}
      />
    </span>
  );
}
