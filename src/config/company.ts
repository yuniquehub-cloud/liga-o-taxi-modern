export const company = {
  companyName: "Rádio Táxi Ligação",
  phone: "(11) 3535-5832",
  phoneRaw: "1135355832",
  phoneTel: "+551135355832",
  // WhatsApp oficial (formato internacional).
  whatsapp: "5511968969503",
  whatsappDisplay: "(11) 96896-9503",
  email: "falecom@radiotaxiligacao.com.br",
  // E-mail que recebe o convite do agendamento no Google Agenda.
  bookingNotifyEmails: ["taximooca@gmail.com"],
  address: {
    street: "Rua Sapucaia, 500",
    district: "Mooca",
    city: "São Paulo",
    state: "SP",
    zip: "03170-050",
    full: "Rua Sapucaia, 500 – Mooca – São Paulo/SP – CEP 03170-050",
    short: "Rua Sapucaia, 500, Mooca, São Paulo - SP",
  },
  businessHours: [
    { label: "Segunda a Sexta", value: "5:00am às 7:30pm" },
    { label: "Sábado", value: "7:00am às 12:30pm" },
  ],
  mapsQuery: "Rua Sapucaia, 500, Mooca, São Paulo - SP, 03170-050",
} as const;

export const stats = [
  { value: "22+", label: "anos no mercado", detail: "Tradição no atendimento de táxi em São Paulo." },
  { value: "100 mil+", label: "clientes satisfeitos", detail: "Corridas urbanas, agendadas e empresariais." },
  { value: "20", label: "carros na frota", detail: "Veículos com ar-condicionado e motoristas qualificados." },
  { value: "5", label: "regiões atendidas", detail: "Mooca, Tatuapé, Vila Prudente, Belém e Brás." },
] as const;

/** Tabela de conversão de tarifas (valores anteriores x vigentes). */
export const fareHistory = [
  { label: "Bandeirada", old: 4.5, current: 6.55 },
  { label: "Km rodado", old: 2.75, current: 4.8 },
  { label: "Tarifa horária (hora parada)", old: 33.0, current: 55.5 },
] as const;

export const socials = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  twitter: "https://twitter.com/",
} as const;

export const fares = {
  bandeirada: 6.55,
  bandeira1: 4.8,
  bandeira2: 6.24,
  horaParada: 55.5,
} as const;

export const whatsappLink = company.whatsapp
  ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um táxi.")}`
  : null;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  company.mapsQuery,
)}`;

export const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(
  company.mapsQuery,
)}&output=embed`;

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
