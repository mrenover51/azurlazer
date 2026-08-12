"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./brand";
import { navigation } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="Accueil AZUR LASER"><Brand /></Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map(({ label, href }) => (
            <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">Demander un devis</Link>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu de navigation"><span /><span /><span /></summary>
          <nav aria-label="Navigation mobile">
            {navigation.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
            <Link className="mobile-cta" href="/contact">Demander un devis</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
