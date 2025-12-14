import { useState } from "react";
import { Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || disabled) return;
    
    onSend(message.trim());
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 bg-card border-t border-border">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground flex-shrink-0"
      >
        <Smile className="w-5 h-5" />
      </Button>

      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="พิมพ์ข้อความ..."
        disabled={disabled}
        className="flex-1 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
        maxLength={500}
      />

      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        className="bg-gradient-primary text-primary-foreground flex-shrink-0"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
