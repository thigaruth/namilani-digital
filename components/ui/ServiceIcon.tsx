import {
  MonitorSmartphone,
  Palette,
  Search,
  Server,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  monitor: MonitorSmartphone,
  search: Search,
  share: Share2,
  palette: Palette,
  server: Server,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? MonitorSmartphone;
  return <Icon className={cn("size-6", className)} strokeWidth={1.8} aria-hidden="true" />;
}
