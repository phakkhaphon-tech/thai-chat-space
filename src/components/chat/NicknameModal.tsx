import { useState } from "react";
import { User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nickname: string) => void;
}

const randomNicknames = [
  "น้องหมี", "พี่เป็ด", "ลูกแมว", "นกน้อย", "กระต่าย",
  "ผีเสื้อ", "ปลาทอง", "หมาป่า", "นกฮูก", "กวางน้อย"
];

const NicknameModal = ({ isOpen, onClose, onSubmit }: NicknameModalProps) => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const generateRandomNickname = () => {
    const random = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
    const number = Math.floor(Math.random() * 1000);
    setNickname(`${random}${number}`);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim()) {
      setError("กรุณาใส่ชื่อเล่น");
      return;
    }

    if (nickname.length < 2) {
      setError("ชื่อเล่นต้องมีอย่างน้อย 2 ตัวอักษร");
      return;
    }

    if (nickname.length > 20) {
      setError("ชื่อเล่นต้องไม่เกิน 20 ตัวอักษร");
      return;
    }

    onSubmit(nickname.trim());
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <User className="w-5 h-5 text-primary" />
            เลือกชื่อเล่นของคุณ
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            ชื่อเล่นนี้จะแสดงให้ผู้อื่นเห็นในห้องแชท คุณสามารถใช้ชื่ออะไรก็ได้
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  setError("");
                }}
                placeholder="เช่น น้องหมี, ครูสอม, พี่ปอ"
                className="pr-12"
                maxLength={20}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={generateRandomNickname}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-primary"
                title="สุ่มชื่อเล่น"
              >
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <p className="text-xs text-muted-foreground">
              {nickname.length}/20 ตัวอักษร
            </p>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              ยกเลิก
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-primary text-primary-foreground">
              เข้าห้องแชท
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NicknameModal;
