import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const wa = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to ask about a car rental in Mauritius.")}`;
  const emailLink = siteConfig.email.includes("to be added") ? <span className="footer-placeholder">Email contact to be added</span> : <a href={`mailto:${siteConfig.email}`}>Email us <ArrowUpRight size={14} /></a>;
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="brand brand-light"><span className="brand-mark">IG</span><span>{siteConfig.name}<small>MAURITIUS CAR RENTAL</small></span></Link><p>Discover Mauritius at your own pace. Your next island drive starts right here.</p><span className="sample-note">Vehicle details and photos are sample content.</span></div><div><h3>Explore</h3><Link href="/cars">Our cars</Link><Link href="/#why-us">Why choose us</Link><Link href="/#delivery">Delivery</Link></div><div><h3>Get in touch</h3><a href={wa} target="_blank" rel="noreferrer">WhatsApp {siteConfig.phoneDisplay} <ArrowUpRight size={14} /></a>{emailLink}<Link href="/cars">Browse the fleet <ArrowUpRight size={14} /></Link></div><div className="footer-note"><span className="eyebrow">LOCAL KNOW-HOW</span><h3>Take the scenic route.</h3><p>Pick up your keys and let the island surprise you.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. Vehicle details and prices are sample content.</span><span>Made for exploring Mauritius <span aria-hidden="true">✳</span></span></div></footer>;
}
