"use client";

import { Search, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function SearchPanel() {
  const router = useRouter();
  const [error, setError] = useState("");
  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pickup = String(data.get("pickup"));
    const returned = String(data.get("return"));
    if (!pickup || !returned || returned < pickup) { setError("Choose a return date that is after your pickup date."); return; }
    const params = new URLSearchParams({ pickup, return: returned, location: String(data.get("location") || "") });
    router.push(`/cars?${params.toString()}`);
  }
  return <form id="search" className="search-panel" onSubmit={search}>
    <div className="search-heading"><div><span className="eyebrow">PLAN YOUR DRIVE</span><h2>Where to next?</h2></div><span className="search-small">A few details to get started</span></div>
    <div className="search-fields"><label className="search-field"><span><MapPin size={16} /> Pick-up location</span><select name="location" defaultValue=""><option value="">Choose a location</option><option>Sir Seewoosagur Ramgoolam Airport</option><option>Port Louis</option><option>Grand Baie</option><option>Flic en Flac</option><option>Hotel or accommodation</option></select></label><label className="search-field"><span><CalendarDays size={16} /> Pick-up date</span><input name="pickup" type="date" required /></label><label className="search-field"><span><CalendarDays size={16} /> Return date</span><input name="return" type="date" required /></label><button className="button button-accent search-submit" type="submit"><Search size={17} /> Explore cars <ArrowRight size={16} /></button></div>
    {error && <p className="form-error" role="alert">{error}</p>}
  </form>;
}
