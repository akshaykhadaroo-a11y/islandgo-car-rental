export type Car = {
  slug: string;
  name: string;
  category: string;
  transmission: "Automatic" | "Manual";
  seats: number;
  luggage: number;
  fuel: string;
  price: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  badge?: string;
};

// Demonstration content and photography. Replace these records with your fleet.
export const cars: Car[] = [
  { slug: "suzuki-swift", name: "Suzuki Swift", category: "Compact", transmission: "Automatic", seats: 5, luggage: 2, fuel: "Petrol", price: 1800, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85", imageAlt: "Red compact car on a quiet road", featured: true, badge: "Guest favourite" },
  { slug: "toyota-rav4", name: "Toyota RAV4", category: "SUV", transmission: "Automatic", seats: 5, luggage: 3, fuel: "Petrol", price: 3200, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85", imageAlt: "Modern white SUV outdoors", featured: true, badge: "Island ready" },
  { slug: "hyundai-grand-i10", name: "Hyundai Grand i10", category: "Economy", transmission: "Manual", seats: 5, luggage: 2, fuel: "Petrol", price: 1500, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85", imageAlt: "Small silver hatchback parked in the city", featured: true },
  { slug: "nissan-x-trail", name: "Nissan X-Trail", category: "SUV", transmission: "Automatic", seats: 7, luggage: 4, fuel: "Petrol", price: 3900, image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85", imageAlt: "Dark SUV in a scenic setting", featured: true, badge: "Room for everyone" },
];
