import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Crown, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RoomCard from "@/components/chat/RoomCard";
import NicknameModal from "@/components/chat/NicknameModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chatRooms = [
  {
    id: "general",
    name: "ห้องคุยทั่วไป",
    description: "ห้องสำหรับพูดคุยทั่วไป ทุกเรื่องทุกหัวข้อ มาทำความรู้จักกันได้เลย",
    onlineCount: 456,
    category: "ทั่วไป",
    isBoosted: true,
  },
  {
    id: "teens",
    name: "วัยรุ่น 18-25",
    description: "ห้องสำหรับน้องๆ วัยรุ่น พูดคุยเรื่องเรียน ความรัก และไลฟ์สไตล์",
    onlineCount: 234,
    category: "อายุ",
  },
  {
    id: "adults",
    name: "ผู้ใหญ่ 26+",
    description: "ห้องสำหรับพี่ๆ ผู้ใหญ่ พูดคุยเรื่องงาน ครอบครัว และชีวิต",
    onlineCount: 189,
    category: "อายุ",
  },
  {
    id: "music",
    name: "คนรักเพลง",
    description: "แชร์เพลงโปรด พูดคุยเรื่องศิลปินและคอนเสิร์ต",
    onlineCount: 145,
    category: "ความสนใจ",
  },
  {
    id: "gaming",
    name: "เกมเมอร์",
    description: "พูดคุยเรื่องเกม หาปาร์ตี้ แชร์ทิปส์และเทคนิค",
    onlineCount: 312,
    category: "ความสนใจ",
    isBoosted: true,
  },
  {
    id: "movies",
    name: "หนัง & ซีรีส์",
    description: "พูดคุยเรื่องหนังใหม่ ซีรีส์ดัง และแนะนำเรื่องน่าดู",
    onlineCount: 98,
    category: "ความสนใจ",
  },
  {
    id: "travel",
    name: "นักเดินทาง",
    description: "แชร์ประสบการณ์ท่องเที่ยว แนะนำที่เที่ยว ที่กิน",
    onlineCount: 76,
    category: "ความสนใจ",
  },
  {
    id: "vip-lounge",
    name: "VIP Lounge",
    description: "ห้องพิเศษสำหรับสมาชิก VIP เท่านั้น สิทธิพิเศษมากมาย",
    onlineCount: 45,
    category: "พิเศษ",
    isVipOnly: true,
  },
];

const categories = ["ทั้งหมด", "ทั่วไป", "อายุ", "ความสนใจ", "พิเศษ"];

const ChatLobby = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const filteredRooms = chatRooms.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "ทั้งหมด" || room.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRoomClick = (roomId: string) => {
    const savedNickname = localStorage.getItem("thaichat_nickname");
    if (savedNickname) {
      navigate(`/chat/${roomId}`);
    } else {
      setSelectedRoom(roomId);
      setShowNicknameModal(true);
    }
  };

  const handleNicknameSubmit = (nickname: string) => {
    localStorage.setItem("thaichat_nickname", nickname);
    setShowNicknameModal(false);
    if (selectedRoom) {
      navigate(`/chat/${selectedRoom}`);
    }
  };

  const totalOnline = chatRooms.reduce((sum, room) => sum + room.onlineCount, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              เลือกห้องแชท
            </h1>
            <p className="text-lg text-muted-foreground">
              มี <span className="text-primary font-semibold">{totalOnline.toLocaleString()}</span> คนออนไลน์ใน {chatRooms.length} ห้อง
            </p>
          </div>

          {/* Ad Zone */}
          <div className="bg-muted rounded-xl p-4 mb-8 flex items-center justify-center min-h-[90px]">
            <span className="text-sm text-muted-foreground">พื้นที่โฆษณา - 728x90</span>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาห้องแชท..."
                className="pl-10"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-5 w-full md:w-auto">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="text-xs md:text-sm">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* VIP Promo */}
          <div className="bg-gradient-to-r from-vip/10 to-yellow-400/10 border border-vip/30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vip to-yellow-400 flex items-center justify-center">
                <Crown className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">อัพเกรดเป็น VIP</h3>
                <p className="text-sm text-muted-foreground">รับแบดจ์พิเศษ เข้าห้อง VIP และสิทธิพิเศษอีกมากมาย</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-vip to-yellow-400 text-foreground hover:opacity-90">
              <Sparkles className="w-4 h-4 mr-2" />
              ดูสิทธิพิเศษ
            </Button>
          </div>

          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <div key={room.id} onClick={() => handleRoomClick(room.id)} className="cursor-pointer">
                <RoomCard {...room} />
              </div>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">ไม่พบห้องแชทที่ตรงกับการค้นหา</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <NicknameModal
        isOpen={showNicknameModal}
        onClose={() => setShowNicknameModal(false)}
        onSubmit={handleNicknameSubmit}
      />
    </div>
  );
};

export default ChatLobby;
