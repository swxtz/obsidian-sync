import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-zinc-800 flex flex-row justify-center items-center px-3 py-2 rounded cursor-pointer gap-1 hover:bg-zinc-900 transition-all hover:text-zinc-400"
    >
      {children}
    </button>
  );
}
