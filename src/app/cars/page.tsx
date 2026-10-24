"use client";

import Image from "next/image";
import { Suspense } from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, CarFront } from "lucide-react";
import { cars } from "@/data/cars";
import { CarCard } from "@/components/CarCard";

export default function CarsPage() {
  return <Suspense fallback={<div className="container section-pad">Loading the fleet…</div>}><CarsContent /></Suspense>;
}

function CarsContent() {
  const params = useSearchParams();
  const [category, setCategory] = useState(params.get("category") ?? "All cars");
  const [transmission, setTransmission] = useState("Any transmission");
  const [seats, setSeats] = useState("Any seats");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);
  const filtered = useMemo(() => cars.filter((car) => (category === "All cars" || car.category === category) && (transmission === "Any transmission" || car.transmission === transmission) && (seats === "Any seats" || car.seats >= Number(seats)) && car.price <= maxPrice), [category, transmission, seats, maxPrice]);
  const clear = () => { setCategory("All cars"); setTransmission("Any transmission"); setSeats("Any seats"); setMaxPrice(5000); };
  return <>
    <section className="fleet-hero"><Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2100&q=85" alt="A dramatic mountain road through Mauritius highlands" fill priority sizes="100vw" /><div className="fleet-hero-overlay" /><div className="container fleet-hero-copy"><span className="eyebrow">THE ISLAND IS YOURS TO EXPLORE</span><h1>Find your <em>island drive.</em></h1><p>From easy little runabouts to roomy SUVs, meet the car that fits your kind of Mauritius.</p><span className="fleet-count"><CarFront size={16} /> {cars.length} sample vehicles</span></div></section>
    <section className="fleet-page section-pad"><div className="container"><div className="fleet-topline"><div><span className="eyebrow">THE FLEET</span><h2>Choose your <em>ride.</em></h2></div><button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal size={17} /> Filters {showFilters ? <X size={16} /> : null}</button></div><div className="fleet-layout"><aside className={showFilters ? "filters is-open" : "filters"}><div className="filter-head"><strong>Filter cars</strong><button onClick={clear}>Clear all</button></div><label className="filter-group">Category<select value={category} onChange={(e) => setCategory(e.target.value)}><option>All cars</option>{[...new Set(cars.map((car) => car.category))].map((item) => <option key={item}>{item}</option>)}</select></label><label className="filter-group">Transmission<select value={transmission} onChange={(e) => setTransmission(e.target.value)}><option>Any transmission</option><option>Automatic</option><option>Manual</option></select></label><label className="filter-group">Minimum seats<select value={seats} onChange={(e) => setSeats(e.target.value)}><option>Any seats</option><option value="4">4 or more</option><option value="5">5 or more</option><option value="7">7 or more</option></select></label><label className="filter-group price-filter"><span>Daily price <strong>Up to MUR {maxPrice.toLocaleString()}</strong></span><input type="range" min="1000" max="5000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /><span className="range-ends"><small>MUR 1,000</small><small>MUR 5,000+</small></span></label><p className="sample-hint">Prices and vehicles shown are sample content.</p></aside><div className="fleet-results"><div className="results-bar"><span><strong>{filtered.length}</strong> cars to explore</span><span>Daily rates shown in MUR</span></div>{filtered.length ? <div className="car-grid">{filtered.map((car) => <CarCard key={car.slug} car={car} />)}</div> : <div className="empty-state"><CarFront size={32} /><h3>No cars match those filters</h3><p>Try widening your search to see more options.</p><button className="button button-dark" onClick={clear}>Clear filters</button></div>}</div></div></div></section>
  </>;
}
