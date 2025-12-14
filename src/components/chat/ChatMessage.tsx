import { Crown, Shield, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatMessageProps {
  id: string;
  nickname: string;
  message: string;
  timestamp: Date;
  isVip?: boolean;
  isModerator?: boolean;
  isOwnMessage?: boolean;
  onReport?: (id: string) => void;
}

const ChatMessage = ({
  id,
  nickname,
  message,
  timestamp,
  isVip,
  isModerator,
  isOwnMessage,
  onReport,
}: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`group flex gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-muted/50 ${
      isOwnMessage ? "bg-accent/30" : ""
    }`}>
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
        isVip ? "bg-gradient-to-br from-vip to-yellow-400" :
        isModerator ? "bg-gradient-primary" :
        "bg-muted"
      }`}>
        <span className={`text-sm font-semibold ${
          isVip || isModerator ? "text-foreground" : "text-muted-foreground"
        }`}>
          {nickname.charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`font-medium text-sm ${
            isOwnMessage ? "text-primary" : "text-foreground"
          }`}>
            {nickname}
          </span>
          
          {isVip && (
            <Tooltip>
              <TooltipTrigger>
                <Crown className="w-4 h-4 text-vip" />
              </TooltipTrigger>
              <TooltipContent>
                <p>สมาชิก VIP</p>
              </TooltipContent>
            </Tooltip>
          )}

          {isModerator && (
            <Tooltip>
              <TooltipTrigger>
                <Shield className="w-4 h-4 text-primary" />
              </TooltipTrigger>
              <TooltipContent>
                <p>ผู้ดูแลห้อง</p>
              </TooltipContent>
            </Tooltip>
          )}

          <span className="text-xs text-muted-foreground">
            {formatTime(timestamp)}
          </span>
        </div>

        <p className="text-foreground text-sm break-words">{message}</p>
      </div>

      {/* Report button */}
      {!isOwnMessage && onReport && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onReport(id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive"
        >
          <Flag className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default ChatMessage;
