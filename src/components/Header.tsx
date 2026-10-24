"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to enquire about renting a car in Mauritius.")}`;
  const links = [{ href: "/", label: "Home" }, { href: "/cars", label: "Our cars" }, { href: "/#why-us", label: "Why IslandGo" }, { href: "/#delivery", label: "Delivery" }];
  return <header className="site-header">
    <div className="topline"><span>YOUR ISLAND ADVENTURE STARTS HERE</span><span>Local service · Mauritius</span></div>
    <div className="nav-wrap container">
      <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}><span className="brand-mark">IG</span><span>{siteConfig.name}<small>MAURITIUS CAR RENTAL</small></span></Link>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="mobile-wa" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a></nav>
      <div className="nav-actions"><a className="nav-text-link" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a><Link className="button button-dark nav-cta" href="/cars">Find your car</Link></div>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
