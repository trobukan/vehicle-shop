import { type ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  id?: string;
}

const Section = ({ className, children, id }: Props) => {
  return <section className={className} id={id}>{children}</section>;
};

export default Section;
