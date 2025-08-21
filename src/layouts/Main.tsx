import type { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Main = ({ className, children }: Props) => {
  return <main className={className}>{children}</main>;
};

export default Main;
