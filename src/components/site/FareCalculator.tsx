import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { brl, fares } from "@/config/company";

const rateRows = [
  { label: "Bandeirada (valor inicial)", value: brl(fares.bandeirada) },
  { label: "Km rodado — Bandeira 1 (Seg a Sáb, 6h às 20h)", value: brl(fares.bandeira1) },
  { label: "Km rodado — Bandeira 2 (Seg a Sáb, 20h às 6h; domingos e feriados)", value: brl(fares.bandeira2) },
  { label: "Hora parada / parado no trânsito", value: brl(fares.horaParada) },
];

type Result = { total: number; km: number; kmRate: number; kmCost: number; stopCost: number; minutes: number };

export function FareCalculator() {
  const [km, setKm] = useState("");
  const [flag, setFlag] = useState<"1" | "2">("1");
  const [minutes, setMinutes] = useState("0");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  function calculate(event: React.FormEvent) {
    event.preventDefault();
    const kmValue = Number(km.replace(",", "."));
    const minutesValue = minutes.trim() === "" ? 0 : Number(minutes.replace(",", "."));

    if (!km.trim() || Number.isNaN(kmValue) || kmValue <= 0) {
      setError("Informe a distância em km (por exemplo: 8,5).");
      setResult(null);
      return;
    }
    if (Number.isNaN(minutesValue) || minutesValue < 0) {
      setError("O tempo parado deve ser um número igual ou maior que zero.");
      setResult(null);
      return;
    }

    setError(null);
    const kmRate = flag === "1" ? fares.bandeira1 : fares.bandeira2;
    const kmCost = kmValue * kmRate;
    const stopCost = (minutesValue / 60) * fares.horaParada;
    setResult({
      total: fares.bandeirada + kmCost + stopCost,
      km: kmValue,
      kmRate,
      kmCost,
      stopCost,
      minutes: minutesValue,
    });
  }

  return (
    <section id="estimativa" className="surface-soft relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-yellow-strong sm:text-4xl">
            Estimativa de Valor da Corrida
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Calcule uma estimativa com base nas tarifas vigentes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <form
            onSubmit={calculate}
            noValidate
            className="rounded-2xl border border-border bg-card/95 p-6 shadow-lift backdrop-blur-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="km" className="text-sm font-bold">
                  Distância em km
                </Label>
                <Input
                  id="km"
                  name="km"
                  type="number"
                  inputMode="decimal"
                  step="0.1"
                  min="0"
                  placeholder="Ex.: 8.5"
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                  className="mt-2 h-12 text-base"
                  aria-describedby="km-hint"
                />
                <p id="km-hint" className="mt-1.5 text-xs text-muted-foreground">
                  Aceita casas decimais.
                </p>
              </div>

              <div>
                <Label htmlFor="bandeira" className="text-sm font-bold">
                  Tipo de bandeira
                </Label>
                <select
                  id="bandeira"
                  name="bandeira"
                  value={flag}
                  onChange={(e) => setFlag(e.target.value as "1" | "2")}
                  className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-base font-medium text-foreground"
                >
                  <option value="1">Bandeira 1</option>
                  <option value="2">Bandeira 2</option>
                </select>
              </div>

              <div>
                <Label htmlFor="minutos" className="text-sm font-bold">
                  Tempo parado (minutos)
                </Label>
                <Input
                  id="minutos"
                  name="minutos"
                  type="number"
                  inputMode="numeric"
                  step="1"
                  min="0"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm font-semibold text-destructive">
                {error}
              </p>
            )}

            <Button type="submit" variant="call" size="xl" className="mt-6 w-full">
              <Calculator aria-hidden="true" />
              Calcular Estimativa
            </Button>

            <div aria-live="polite">
              {result && (
                <div className="mt-6 rounded-xl border border-border bg-secondary/70 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    Valor estimado
                  </p>
                  <p className="mt-1 text-4xl font-extrabold text-foreground">{brl(result.total)}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex justify-between gap-4">
                      <span>Bandeirada</span>
                      <span className="font-semibold text-foreground">{brl(fares.bandeirada)}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>
                        {result.km.toLocaleString("pt-BR")} km × {brl(result.kmRate)} (Bandeira {flag})
                      </span>
                      <span className="font-semibold text-foreground">{brl(result.kmCost)}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>{result.minutes.toLocaleString("pt-BR")} min parado</span>
                      <span className="font-semibold text-foreground">{brl(result.stopCost)}</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    Esta é apenas uma estimativa com base nas tarifas vigentes. O valor final pode variar
                    conforme trajeto, trânsito e condições da corrida.
                  </p>
                </div>
              )}
            </div>
          </form>

          <div className="relative overflow-hidden rounded-2xl surface-dark p-6 shadow-lift sm:p-8 lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 dark-glow" aria-hidden="true" />
            <h3 className="text-lg font-extrabold">Tarifas vigentes</h3>
            <dl className="mt-5 divide-y divide-graphite-foreground/15">
              {rateRows.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-4 py-4">
                  <dt className="text-sm leading-snug text-graphite-foreground/75">{row.label}</dt>
                  <dd className="whitespace-nowrap text-base font-extrabold text-yellow">{row.value}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </section>
  );
}
