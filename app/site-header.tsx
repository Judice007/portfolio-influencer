"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#universo", label: "Meu universo" },
  { href: "#audiencia", label: "Audiência" },
  { href: "#parcerias", label: "Parcerias" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label="Felipe Júdice — início"
        onClick={() => setOpen(false)}
      >
        <span className="brand-symbol" aria-hidden="true">
          007
        </span>
        <span className="brand-copy">
          <strong>Felipe Júdice</strong>
          <small>creator media kit</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <a
        className="header-cta"
        href="https://wa.me/5524998449254"
        target="_blank"
        rel="noreferrer"
      >
        Falar comigo <span aria-hidden="true">↗</span>
      </a>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href="https://wa.me/5524998449254"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Falar comigo <span aria-hidden="true">↗</span>
          </a>
        </nav>
      )}
    </header>
  );
}
