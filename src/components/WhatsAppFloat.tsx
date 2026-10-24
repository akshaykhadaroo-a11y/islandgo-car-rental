import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to ask about car rental in Mauritius.")}`;
  return <a href={link} target="_blank" rel="noreferrer" className="whatsapp-float"><MessageCircle size={19} /><span>Chat with us</span></a>;
}
