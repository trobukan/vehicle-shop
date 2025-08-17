interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <p>&copy; MIT License.</p>
    </footer>
  );
};

export default Footer;
