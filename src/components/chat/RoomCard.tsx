import { Link } from "react-router-dom";
import { Users, MessageCircle, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  onlineCount: number;
  category: string;
  isVipOnly?: boolean;
  isBoosted?: boolean;
}

const RoomCard = ({ id, name, description, onlineCount, category, isVipOnly, isBoosted }: RoomCardProps) => {
  return (
    <div className={`relative group p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg ${
      isBoosted ? "border-vip/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]" : "border-border hover:border-primary/30"
    }`}>
      {/* Boosted badge */}
      {isBoosted && (
        <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-vip to-yellow-400 text-xs font-semibold text-foreground">
          ⚡ กำลังบูสต์
        </div>
      )}

      {/* VIP badge */}
      {isVipOnly && (
        <div className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-vip/10 text-xs font-semibold text-vip border border-vip/30">
          <Crown className="w-3 h-3" />
          VIP
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium mb-2">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-primary" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-online animate-pulse-soft" />
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{onlineCount} ออนไลน์</span>
        </div>

        <Button asChild size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-accent">
          <Link to={`/chat/${id}`}>
            เข้าห้อง
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;
