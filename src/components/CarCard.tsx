import Image from "next/image";
import { ArrowRight, Settings2, UsersRound, BriefcaseBusiness, MessageCircle } from "lucide-react";
import type { Car } from "@/data/cars";
import { siteConfig } from "@/config/site";

export function CarCard({ car }: { car: Car }) {
  const message = `Hi, I would like to enquire about the ${car.name}.`;
  const wa = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  return <article className="car-card"><div className="car-photo"><Image src={car.image} alt={car.imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw" /><span className="photo-label">{car.badge ?? car.category}</span><span className="photo-arrow" aria-hidden="true"><ArrowRight size={17} /></span></div><div className="car-info"><div className="car-title-line"><div><span className="car-category">{car.category}</span><h3>{car.name}</h3></div><div className="car-price"><strong>{car.price.toLocaleString()}</strong><span>MUR / day</span></div></div><div className="car-specs"><span><Settings2 size={15} />{car.transmission}</span><span><UsersRound size={15} />{car.seats} seats</span><span><BriefcaseBusiness size={15} />{car.luggage} bags</span></div><div className="card-bottom"><a href={wa} target="_blank" rel="noreferrer" className="card-details">Enquire on WhatsApp <ArrowRight size={15} /></a><a href={wa} target="_blank" rel="noreferrer" className="card-wa" aria-label={`Enquire about ${car.name} on WhatsApp`}><MessageCircle size={18} /></a></div></div></article>;
}
