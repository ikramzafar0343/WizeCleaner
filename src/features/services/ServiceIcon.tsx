import { Building2, Gem, Grid2x2, HardHat, Sofa, Sparkles, Sun, Truck, type LucideIcon } from "lucide-react";
import type { IconName } from "./data";

const icons: Record<IconName, LucideIcon> = {
  sparkles: Sparkles,
  hardHat: HardHat,
  truck: Truck,
  building: Building2,
  sofa: Sofa,
  window: Grid2x2,
  gem: Gem,
  sun: Sun,
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.8} />;
}
