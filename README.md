# Ligação Taxi Modern

Crie um site institucional completo, moderno, responsivo e focado em conversão para a empresa **Rádio Táxi Ligação**, de São Paulo.

O site antigo é a referência estrutural e de conteúdo base, mas **não quero copiar o layout antigo**.
Quero uma **nova versão totalmente modernizada**, com aparência profissional, premium e limpa, mantendo os principais elementos importantes do site atual:

* identidade de táxi tradicional
* destaque para telefone e contato rápido
* mapa/endereço
* horários de atendimento
* calculadora de estimativa de corrida
* sensação de segurança e confiança

---

# OBJETIVO PRINCIPAL DO SITE

O site deve fazer o usuário entender em poucos segundos:

1. que a empresa é uma rádio táxi em São Paulo
2. que ele pode ligar ou chamar rapidamente
3. que existe uma calculadora de estimativa de corrida
4. onde fica a empresa e como entrar em contato

As prioridades de conversão são:

1. **Ligar para a central**
2. **Chamar no WhatsApp**
3. **Usar a calculadora de estimativa**
4. **Agendar ou solicitar atendimento**
5. **Entrar em contato institucionalmente**

---

# DADOS DA EMPRESA

Nome: **Rádio Táxi Ligação**

Telefone: **(11) 3535-5832**

E-mail: **[falecom@radiotaxiligacao.com.br](mailto:falecom@radiotaxiligacao.com.br)**

Endereço: **Rua Sapucaia, 500 – Mooca – São Paulo/SP – CEP 03170-050**

Horário de atendimento:

* **Segunda a Sexta: 5:00am às 7:30pm**
* **Sábado: 7:00am às 12:30pm**

Criar uma configuração central para dados de contato, algo como:

* companyName
* phone
* whatsapp
* email
* address
* businessHours

IMPORTANTE:
Se o número oficial de WhatsApp ainda não estiver definido, deixar preparado no código em uma constante para fácil edição posterior, sem inventar número.

---

# ESTILO VISUAL

Quero um design com aparência de agência profissional, não de template pronto.

O site antigo usa muito:

* preto
* amarelo
* branco

Quero manter essa base visual, porém com uma execução **muito mais elegante e atual**.

Direção visual:

* fundo claro nas áreas principais, com seções escuras pontuais para contraste
* amarelo como cor de destaque/CTA
* preto, grafite e branco como base
* muito espaço em branco
* tipografia forte e legível
* layout limpo
* visual moderno, sem exageros

Evitar:

* cara de site antigo
* carrossel ultrapassado
* excesso de efeitos
* sombras pesadas
* excesso de texto
* visual genérico de startup
* aparência de aplicativo estilo Uber/99

A empresa precisa parecer:

* confiável
* tradicional
* segura
* profissional
* prática
* local
* humana

---

# LOGO

Usar a identidade visual da Rádio Táxi Ligação.

Caso a logo oficial seja fornecida depois, deixar o componente preparado para substituição fácil.

---

# TIPOGRAFIA

Usar uma fonte moderna, forte e muito legível, como:

* Inter
* Manrope
* ou similar

Headlines impactantes e limpas.
Textos curtos, objetivos e fáceis de ler.

---

# ESTRUTURA DO SITE

Criar uma landing page/site one page moderno com as seguintes seções:

## 1. HEADER

Header sticky, elegante e simples.

No desktop:

* logo à esquerda
* menu à direita
* telefone visível
* botão de ação em destaque

Menu sugerido:

* Início
* Serviços
* Estimativa
* Sobre
* Contato

CTAs no header:

* **Ligar Agora**
* **Chamar Táxi**

No mobile:

* menu hambúrguer
* manter botão de ligação/ação visível

Também criar uma **barra fixa inferior no mobile** com:

* **Ligar**
* **WhatsApp / Chamar Táxi**

---

## 2. HERO SECTION

Criar uma hero section moderna e forte.

Não quero repetir o visual antigo com slider/carrossel grande e texto solto em cima.

Quero uma hero mais premium, limpa e objetiva.

Sugestão de conteúdo:

### Headline:

**Seu táxi na Mooca e em São Paulo, com segurança e praticidade.**

### Subheadline:

**Conte com a Rádio Táxi Ligação para um atendimento rápido, profissional e confiável.**

CTAs:

* **Ligar Agora**
* **Calcular Corrida**

Adicionar microtexto:
**Atendimento em São Paulo – Mooca**

Imagem:
usar fotografia realista e profissional relacionada a táxi em São Paulo.
Pode ser carro táxi, ambiente urbano, motorista profissional ou contexto de mobilidade urbana.

Evitar imagem com aparência artificial.

---

## 3. BLOCO DE BENEFÍCIOS / CONFIANÇA

Criar uma faixa de benefícios com 3 ou 4 itens, visual limpo e com ícones discretos.

Sugestões:

* **Segurança**
* **Atendimento Profissional**
* **Rapidez no Contato**
* **Conhecimento da Cidade**

Textos curtos.

---

## 4. SEÇÃO DE CALCULADORA DE ESTIMATIVA DE CORRIDA

ESSA SEÇÃO É OBRIGATÓRIA E MUITO IMPORTANTE.

No site antigo existe a seção “Estimativa de Valor de Viagem / Calcule sua Corrida”.
Quero manter essa funcionalidade, mas com design moderno e UX muito melhor.

### Título da seção:

**Estimativa de Valor da Corrida**

### Subtítulo:

**Calcule uma estimativa com base nas tarifas vigentes.**

### Tarifas que devem ser exibidas na interface:

* **Bandeirada (Valor Inicial): R$ 6,55**
* **Km Rodado - Bandeira 1 (Seg a Sáb, das 6h às 20h): R$ 4,80**
* **Km Rodado - Bandeira 2 (Seg a Sáb, das 20h às 6h; Domingos e Feriados): R$ 6,24**
* **Hora Parada / Parado no Trânsito: R$ 55,50**

### Funcionalidade da calculadora

Criar uma calculadora funcional com os seguintes campos:

1. **Distância em KM**

   * campo numérico
   * aceitar casas decimais
   * exemplo: 5, 8.5, 12

2. **Tipo de Bandeira**

   * select com opções:

     * **Bandeira 1**
     * **Bandeira 2**

3. **Tempo parado / trânsito (em minutos)**

   * campo numérico opcional
   * padrão inicial: 0

4. **Botão: Calcular Estimativa**

### Fórmula da estimativa

Usar a seguinte lógica:

**Valor estimado = Bandeirada + (KM × valor da bandeira escolhida) + ((minutos parados / 60) × valor da hora parada)**

Valores:

* bandeirada = 6.55
* bandeira1 = 4.80
* bandeira2 = 6.24
* horaParada = 55.50

### Exibição do resultado

Após clicar no botão, exibir:

* valor estimado em destaque
* breakdown opcional do cálculo
* texto de aviso

Exemplo de resultado:
**Valor estimado: R$ XX,XX**

Abaixo, exibir observação:
**Esta é apenas uma estimativa com base nas tarifas vigentes. O valor final pode variar conforme trajeto, trânsito e condições da corrida.**

### UX da seção

Quero essa seção com aparência premium, clara e fácil de usar.

Pode ter:

* card central
* tabela/resumo das tarifas
* formulário limpo
* resultado em destaque

Evitar o visual antigo pesado com tabela escura e layout datado.

### Requisitos técnicos da calculadora

* cálculo em tempo real ao clicar no botão
* tratamento para campos vazios ou inválidos
* máscara/formatação de moeda em reais
* validação amigável
* responsivo no mobile
* sem dependências pesadas desnecessárias

---

## 5. SEÇÃO DE SERVIÇOS

Criar uma seção com serviços oferecidos, em cards limpos e modernos.

Sugestões:

* **Corridas Urbanas**
* **Atendimento na Mooca e São Paulo**
* **Corridas Agendadas**
* **Atendimento Empresarial**
* **Deslocamentos com praticidade**

Não inventar coisas muito específicas que não foram confirmadas.

---

## 6. SEÇÃO “SOBRE”

Criar uma seção institucional curta.

Título:
**Confiança para te levar ao destino**

Texto base:
“A Rádio Táxi Ligação oferece atendimento profissional para quem busca praticidade, segurança e contato direto com uma central de táxi em São Paulo. Com presença na Mooca, a empresa busca oferecer um serviço confiável e acessível para o dia a dia dos passageiros.”

Não inventar:

* ano de fundação
* quantidade de veículos
* tamanho da frota
* números irreais

---

## 7. SEÇÃO DE LOCALIZAÇÃO / CONTATO RÁPIDO

Essa parte deve aproveitar a ideia do site antigo, mas com visual melhor.

Criar um bloco com:

* mapa incorporado do Google Maps
* cards de contato
* endereço
* telefone
* horário

### Endereço:

**Rua Sapucaia, 500, Mooca, São Paulo - SP**

### Telefone:

**011 3535-5832**

### Horário:

* **Seg-Sex: 5:00am - 7:30pm**
* **Sábado: 7:00am - 12:30pm**

Criar cards modernos com ícones:

* endereço
* telefone
* horário

Adicionar botão:
**Como Chegar**

Adicionar botão:
**Ligar para a Central**

---

## 8. SEÇÃO DE CONTATO FINAL

Criar uma área final com CTA forte.

Título:
**Precisa de um táxi? Fale com a Rádio Táxi Ligação.**

Botões:

* **Ligar Agora**
* **Chamar Táxi**
* **Calcular Corrida**

Também mostrar:

* telefone
* e-mail
* endereço

---

## 9. FOOTER

Criar footer moderno inspirado nas informações do site antigo, mas com muito melhor acabamento.

Estrutura:

* logo
* pequeno texto institucional
* links rápidos
* contato
* redes sociais

Texto institucional curto:
**O melhor serviço de táxi na Mooca em São Paulo, com atendimento profissional.**

Links do footer:

* Início
* Serviços
* Estimativa
* Contato

Contato:

* Rua Sapucaia, 500, Mooca, São Paulo - SP
* Ligue: 011 3535-5832
* Email: [falecom@radiotaxiligacao.com.br](mailto:falecom@radiotaxiligacao.com.br)

Rodapé final:
**© Rádio Táxi Ligação. Todos os direitos reservados.**

---

# TOM DE COMUNICAÇÃO

Usar português brasileiro.

Tom:

* direto
* confiável
* simples
* humano
* profissional

Evitar textos genéricos demais como:

* “soluções inovadoras”
* “excelência em mobilidade”
* “experiência única”

A comunicação deve parecer real e clara.

---

# SEO

Aplicar SEO técnico e local.

### Title:

**Rádio Táxi Ligação | Táxi na Mooca e em São Paulo**

### Meta description:

**Precisa de táxi na Mooca ou em São Paulo? Ligue para a Rádio Táxi Ligação, consulte a estimativa da corrida e fale com a central.**

Trabalhar naturalmente palavras-chave como:

* táxi na Mooca
* rádio táxi Mooca
* táxi em São Paulo
* telefone táxi Mooca
* rádio táxi São Paulo
* calcular corrida táxi
* estimativa corrida táxi

Adicionar:

* Open Graph
* canonical
* sitemap
* robots
* favicon
* alt text nas imagens
* headings organizadas
* JSON-LD de negócio local

---

# RESPONSIVIDADE

Mobile first.

Garantir excelente funcionamento em:

* 375px
* 390px
* 430px
* 768px
* 1024px
* 1440px

A calculadora precisa funcionar muito bem no mobile.

---

# ACESSIBILIDADE

Implementar:

* contraste adequado
* labels corretos nos inputs
* navegação por teclado
* aria-label
* foco visível
* HTML semântico

---

# PERFORMANCE

Quero o site rápido e leve.

Usar:

* imagens otimizadas
* lazy load
* bom desempenho em mobile
* evitar bibliotecas desnecessárias
* animações leves
* bom Core Web Vitals

---

# COMPONENTES SUGERIDOS

Criar componentes organizados, como:

* Header
* Hero
* TrustBar
* FareCalculator
* Services
* About
* MapContactSection
* FinalCTA
* Footer
* WhatsAppButton
* MobileActionBar

---

# IMPORTANTE SOBRE A EXECUÇÃO

Não fazer uma cópia do site antigo.

Usar o site antigo apenas como referência de:

* conteúdo
* identidade
* informações
* funcionalidade da calculadora
* mapa e contato

O resultado final precisa parecer:

* muito mais moderno
* mais limpo
* mais confiável
* mais premium
* mais responsivo
* mais fácil de usar

Quero um site com aparência profissional e atual, mantendo a essência da Rádio Táxi Ligação e com a calculadora funcionando corretamente com base nas tarifas informadas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9791f4e5-54e4-4e6c-9bb7-5c7e9dc5c9e0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
