import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  newTab?: boolean;
}

export function Link({ href, children, newTab }: LinkProps) {
  return (
    <a 
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="text-blue-500 hover:text-blue-600 underline"
    >
      {children}
    </a>
  );
} 