const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50 text-center">
      <p className="text-muted-foreground text-xs font-body tracking-wider">
        © {new Date().getFullYear()} Mark Gabriel Alpis. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
