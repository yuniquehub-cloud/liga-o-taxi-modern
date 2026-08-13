import { useMemo, useState } from "react";
import { CalendarPlus, CheckCircle2, Clock, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, whatsappLink } from "@/config/company";

const TIMEZONE = "America/Sao_Paulo";

/** Monta o link do Google Agenda (template) com o agendamento preenchido. */
function buildGoogleCalendarUrl(input: {
  name: string;
  phone: string;
  date: string;
  time: string;
  origin: string;
  destination: string;
  notes: string;
}) {
  const [year = 0, month = 1, day = 1] = input.date.split("-").map(Number);
  const [hour = 0, minute = 0] = input.time.split(":").map(Number);
  const pad = (n: number) => String(n).padStart(2, "0");
  const start = `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
  const endHour = (hour + 1) % 24;
  const end = `${year}${pad(month)}${pad(day)}T${pad(endHour)}${pad(minute)}00`;

  const details = [
    `Corrida agendada com a ${company.companyName}.`,
    `Passageiro: ${input.name}`,
    `Telefone: ${input.phone}`,
    input.origin ? `Origem: ${input.origin}` : "",
    input.destination ? `Destino: ${input.destination}` : "",
    input.notes ? `Observações: ${input.notes}` : "",
    "",
    `Central: ${company.phone}`,
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Táxi — ${company.companyName}`,
    dates: `${start}/${end}`,
    ctz: TIMEZONE,
    details,
    location: input.origin || company.address.short,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function Booking() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: "08:00",
    origin: "",
    destination: "",
    notes: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [scheduled, setScheduled] = useState(false);

  const set = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setScheduled(false);
  };

  function submit(event: React.FormEvent) {
    event.preventDefault();

    if (form.name.trim().length < 2) {
      setError("Informe seu nome para o agendamento.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 10) {
      setError("Informe um telefone com DDD para a central confirmar.");
      return;
    }
    if (!form.date || !form.time) {
      setError("Escolha a data e o horário da corrida.");
      return;
    }

    setError(null);
    setScheduled(true);
    window.open(buildGoogleCalendarUrl(form), "_blank", "noopener,noreferrer");
  }

  const confirmText = encodeURIComponent(
    `Olá! Quero agendar um táxi.\nNome: ${form.name}\nData: ${form.date} às ${form.time}\nOrigem: ${form.origin}\nDestino: ${form.destination}`,
  );

  return (
    <section id="agendar" className="relative overflow-hidden surface-dark">
      <div className="absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-24">
        <div>
          <p className="eyebrow text-yellow">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Agendamento
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Agende sua corrida e salve no Google Agenda
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-graphite-foreground/75">
            Preencha os dados da corrida, salve o compromisso direto no seu Google Agenda e confirme
            com a central por telefone.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-graphite-foreground/80">
            {[
              "Lembrete automático no seu calendário",
              "Origem, destino e horário registrados",
              "Confirmação simples pela central",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-graphite-foreground/15 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-graphite-foreground/60">
              Horário de atendimento
            </p>
            {company.businessHours.map((h) => (
              <p key={h.label} className="mt-1.5 text-sm font-semibold">
                {h.label}: <span className="text-yellow">{h.value}</span>
              </p>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl bg-card p-6 text-card-foreground shadow-lift sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="ag-nome">Nome</Label>
              <Input
                id="ag-nome"
                className="mt-2"
                value={form.name}
                onChange={set("name")}
                placeholder="Seu nome completo"
                autoComplete="name"
              />
            </div>
            <div>
              <Label htmlFor="ag-tel">Telefone</Label>
              <Input
                id="ag-tel"
                className="mt-2"
                value={form.phone}
                onChange={set("phone")}
                placeholder="(11) 90000-0000"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="ag-data">Data</Label>
                <Input id="ag-data" type="date" className="mt-2" min={today} value={form.date} onChange={set("date")} />
              </div>
              <div>
                <Label htmlFor="ag-hora">Horário</Label>
                <Input id="ag-hora" type="time" className="mt-2" value={form.time} onChange={set("time")} />
              </div>
            </div>
            <div>
              <Label htmlFor="ag-origem">Origem</Label>
              <Input
                id="ag-origem"
                className="mt-2"
                value={form.origin}
                onChange={set("origin")}
                placeholder="Endereço de embarque"
              />
            </div>
            <div>
              <Label htmlFor="ag-destino">Destino</Label>
              <Input
                id="ag-destino"
                className="mt-2"
                value={form.destination}
                onChange={set("destination")}
                placeholder="Para onde você vai"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="ag-obs">Observações (opcional)</Label>
              <Textarea
                id="ag-obs"
                className="mt-2"
                rows={3}
                value={form.notes}
                onChange={set("notes")}
                placeholder="Bagagem, ponto de referência, número de passageiros…"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" variant="cta" size="xl" className="sm:flex-1">
              <CalendarPlus aria-hidden="true" />
              Adicionar ao Google Agenda
            </Button>
            <Button type="button" variant="outlineDark" size="xl" asChild>
              <a href={whatsappLink ? `${whatsappLink.split("?")[0]}?text=${confirmText}` : `tel:${company.phoneTel}`}>
                {whatsappLink ? <MessageCircle aria-hidden="true" /> : <Phone aria-hidden="true" />}
                Confirmar com a central
              </a>
            </Button>
          </div>

          {scheduled && (
            <p role="status" className="mt-4 flex items-start gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-strong" aria-hidden="true" />
              Abrimos o Google Agenda em uma nova aba. Confirme o agendamento com a central pelo
              telefone {company.phone}.
            </p>
          )}

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            O agendamento é registrado no seu calendário. A confirmação da corrida é feita pela
            central, dentro do horário de atendimento.
          </p>
        </form>
      </div>
    </section>
  );
}
