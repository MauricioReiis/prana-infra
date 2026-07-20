import { FloatingButton } from "./styles";

export default function WhatsAppButton() {
  return (
    <FloatingButton
      href="https://wa.me/553291982940?text=Olá%2C%20vim%20pelo%20site%20da%20Prana%20Infra."
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Prana Infra pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.5A12.3 12.3 0 0 0 5.5 22.2L4 28.5l6.5-1.5A12.5 12.5 0 1 0 16 3.5Zm0 22.7c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8.9.9-3.7-.3-.4A10.2 10.2 0 1 1 16 26.2Zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.3 8.3 0 0 1-2.5-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.4-.3-.7-.5Z" />
      </svg>
    </FloatingButton>
  );
}
