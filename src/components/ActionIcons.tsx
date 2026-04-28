type IconProps = {
  className?: string;
};

export function PlayStoreIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 3.5L14.6 12L4 20.5V3.5Z" fill="#34A853" />
      <path d="M14.6 12L18.2 8.95L21 10.52C21.67 10.89 21.67 11.86 21 12.23L18.2 13.8L14.6 12Z" fill="#FBBC04" />
      <path d="M4 3.5L18.2 8.95L14.6 12L4 3.5Z" fill="#4285F4" />
      <path d="M4 20.5L14.6 12L18.2 13.8L4 20.5Z" fill="#EA4335" />
    </svg>
  );
}

export function DetailsIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 7.5H16M8 12H16M8 16.5H13M6.8 3.5H17.2C18.75 3.5 20 4.75 20 6.3V17.7C20 19.25 18.75 20.5 17.2 20.5H6.8C5.25 20.5 4 19.25 4 17.7V6.3C4 4.75 5.25 3.5 6.8 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 5H19V10M10 14L19 5M19 13V17.8C19 18.99 18.03 19.96 16.84 19.96H6.16C4.97 19.96 4 18.99 4 17.8V7.12C4 5.93 4.97 4.96 6.16 4.96H11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
