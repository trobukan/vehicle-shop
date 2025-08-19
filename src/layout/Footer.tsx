interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <p className="footer__text">
        Code licensed under the{" "}
        <a
          className="footer__link"
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licença MIT
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
