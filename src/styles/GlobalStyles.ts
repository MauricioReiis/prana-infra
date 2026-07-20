import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --c-bg: #f4eee3;
    --c-surface: #fffaf0;
    --c-surface-strong: #fffef9;
    --c-red: #a82611;
    --c-red-deep: #861b0b;
    --c-gold: #cf9f1f;
    --c-text: #453027;
    --c-line: rgba(130, 56, 35, .2);
    --shadow-soft: 0 18px 50px rgba(55, 34, 23, .12);
    --shadow-card: 0 20px 36px rgba(62, 35, 20, .12);

    --ff-body: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
    --ff-display: 'Sora', 'Segoe UI', sans-serif;

    --container: 1180px;
    --radius: 18px;

    --space-1: .5rem;
    --space-2: .75rem;
    --space-3: 1rem;
    --space-4: 1.5rem;
    --space-5: 2rem;
    --space-6: 3rem;
    --space-7: 4.5rem;
    --space-8: 7rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  body {
    min-width: 320px;
    font-family: var(--ff-body);
    background:
      radial-gradient(circle at 8% 8%, rgba(255, 244, 213, .4), transparent 38%),
      radial-gradient(circle at 94% 88%, rgba(229, 241, 210, .42), transparent 35%),
      linear-gradient(180deg, #f8f3ea 0%, #f2ecdf 100%);
    color: var(--c-text);
    line-height: 1.5;
    letter-spacing: -.01em;
  }

  h1,
  h2,
  h3 {
    font-family: var(--ff-display);
    text-wrap: balance;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  a {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: var(--c-gold);
    color: #fff;
  }

  .section {
    position: relative;
    padding-block: clamp(4.5rem, 8vw, 8rem);
  }

  .eyebrow {
    color: var(--c-gold);
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
  }
`
