import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
