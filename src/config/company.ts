export const company = {
  companyName: "Rádio Táxi Ligação",
  phone: "(11) 3535-5832",
  phoneRaw: "1135355832",
  phoneTel: "+551135355832",
  // Número oficial de WhatsApp ainda não confirmado.
  // Preencha com o formato internacional (ex.: "5511999999999") para ativar os botões.
  whatsapp: "",
  email: "falecom@radiotaxiligacao.com.br",
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
