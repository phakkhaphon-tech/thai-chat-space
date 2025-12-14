import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Users, MoreVertical, Flag, LogOut, Settings } from "lucide-react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import OnlineUsersList from "@/components/chat/OnlineUsersList";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  nickname: string;
  message: string;
  timestamp: Date;
  isVip?: boolean;
  isModerator?: boolean;
}

const mockMessages: Message[] = [
  { id: "1", nickname: "ผู้ดูแล", message: "ยินดีต้อนรับทุกคนเข้าสู่ห้องแชท! กรุณาอ่านกฎการใช้งานก่อนแชทนะคะ", timestamp: new Date(Date.now() - 300000), isModerator: true },
  { id: "2", nickname: "น้องหมี123", message: "สวัสดีครับ มาใหม่เลย", timestamp: new Date(Date.now() - 240000) },
  { id: "3", nickname: "พี่เป็ด456", message: "ยินดีต้อนรับจ้า", timestamp: new Date(Date.now() - 180000), isVip: true },
  { id: "4", nickname: "ลูกแมว789", message: "วันนี้อากาศดีจังเลย ใครไปไหนมาบ้าง?", timestamp: new Date(Date.now() - 120000) },
  { id: "5", nickname: "กระต่ายน้อย", message: "อยู่บ้านเฉยๆ ครับ เหงาๆ เลยมาคุย", timestamp: new Date(Date.now() - 60000) },
  { id: "6", nickname: "นกน้อยบิน", message: "เหมือนกันเลย 555", timestamp: new Date(Date.now() - 30000), isVip: true },
];

const mockUsers = [
  { id: "1", nickname: "ผู้ดูแล", isModerator: true },
  { id: "2", nickname: "พี่เป็ด456", isVip: true },
  { id: "3", nickname: "นกน้อยบิน", isVip: true },
  { id: "4", nickname: "น้องหมี123" },
  { id: "5", nickname: "ลูกแมว789" },
  { id: "6", nickname: "กระต่ายน้อย" },
  { id: "7", nickname: "ปลาทอง999" },
  { id: "8", nickname: "หมาป่าเดียวดาย" },
];

const roomNames: Record<string, string> = {
  general: "ห้องคุยทั่วไป",
  teens: "วัยรุ่น 18-25",
  adults: "ผู้ใหญ่ 26+",
  music: "คนรักเพลง",
  gaming: "เกมเมอร์",
  movies: "หนัง & ซีรีส์",
  travel: "นักเดินทาง",
  "vip-lounge": "VIP Lounge",
};

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [showUserList, setShowUserList] = useState(false);
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    const savedNickname = localStorage.getItem("thaichat_nickname");
    if (!savedNickname) {
      navigate("/chat");
    } else {
      setNickname(savedNickname);
    }
  }, [navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      nickname,
      message,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleReport = (messageId: string) => {
    toast({
      title: "รายงานสำเร็จ",
      description: "ขอบคุณที่แจ้งเตือน ผู้ดูแลจะตรวจสอบโดยเร็ว",
    });
  };

  const handleLeaveRoom = () => {
    navigate("/chat");
  };

  const roomName = roomNames[roomId || ""] || "ห้องแชท";

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/chat">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div>
            <h1 className="font-semibold text-foreground">{roomName}</h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-online" />
              {mockUsers.length} ออนไลน์
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile user list trigger */}
          <Sheet open={showUserList} onOpenChange={setShowUserList}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Users className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-72">
              <OnlineUsersList users={mockUsers} isMobile onClose={() => setShowUserList(false)} />
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                ตั้งค่า
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Flag className="w-4 h-4 mr-2" />
                แจ้งปัญหาห้อง
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLeaveRoom} className="text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากห้อง
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Ad Zone */}
          <div className="bg-muted border-b border-border p-2 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">พื้นที่โฆษณา - 468x60</span>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-1">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  {...msg}
                  isOwnMessage={msg.nickname === nickname}
                  onReport={handleReport}
                />
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <ChatInput onSend={handleSendMessage} />
        </div>

        {/* Desktop user list */}
        <div className="hidden md:block">
          <OnlineUsersList users={mockUsers} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
