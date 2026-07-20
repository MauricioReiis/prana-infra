# Prana Infra - Landing Page

Landing page institucional da Prana Infra desenvolvida com React, TypeScript e Vite.

## Tecnologias

- React 19
- TypeScript
- Vite
- styled-components

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Scripts

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: publica localmente o build gerado

## Estrutura principal

```text
src/
  app/
  components/
    layout/
    sections/
    ui/
    WhatsAppButton/
  assets/
    images/
    logos/
  data/
  styles/
```

## Estilos

- Design system centralizado em variaveis CSS em `src/styles/GlobalStyles.ts`
- Cada componente/seção possui seu proprio `styles.ts`
- Tipografia carregada no `index.html` para melhor prioridade de carregamento

## Contato e links

Os links de WhatsApp do projeto estao configurados para o numero do cliente:

- `+55 32 9198-2940`
- Formato usado em URL: `553291982940`

## Favicon

O favicon foi gerado a partir da marca `src/assets/logos/prana-infra.webp` e esta disponivel em:

- `public/favicon.ico`

## Observacoes

- As imagens principais estao em WebP para melhor desempenho
- A imagem de compartilhamento social esta em `public/og-image.webp`
- O layout foi refinado para desktop e mobile
