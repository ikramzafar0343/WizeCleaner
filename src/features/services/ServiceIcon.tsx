import {
  Bath,
  Bug,
  Building2,
  CloudFog,
  Droplets,
  Grid2x2,
  Home,
  Layers,
  ShieldCheck,
  Sofa,
  Sparkles,
  SprayCan,
  UtensilsCrossed,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "./data";

const icons: Record<IconName, LucideIcon> = {
  sparkles: Sparkles,
  home: Home,
  sofa: Sofa,
  utensils: UtensilsCrossed,
  bath: Bath,
  droplet: Droplets,
  building: Building2,
  shield: ShieldCheck,
  carpet: Sofa,
  steam: Wind,
  buildingTall: Building2,
  window: Grid2x2,
  spray: SprayCan,
  bug: Bug,
  fog: CloudFog,
  layers: Layers,
  grid: Grid2x2,
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.8} />;
}
