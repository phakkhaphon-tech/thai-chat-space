import { Link } from "react-router-dom";
import { MessageCircle, Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                Thai<span className="text-gradient-primary">Chat</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              แพลตฟอร์มแชทออนไลน์ที่ปลอดภัยและเป็นมิตร สำหรับคนไทยทุกคน
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  เข้าห้องแชท
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  กฎการใช้งาน
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ความปลอดภัย</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                ไม่มีเนื้อหา 18+
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                ระบบ Report
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                ผู้ดูแลตลอด 24 ชม.
              </li>
            </ul>
          </div>

          {/* Ad Zone Placeholder */}
          <div className="bg-muted rounded-xl p-4 flex items-center justify-center min-h-[120px]">
            <span className="text-xs text-muted-foreground">พื้นที่โฆษณา</span>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ThaiChat. สงวนลิขสิทธิ์ทั้งหมด
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            สร้างด้วย <Heart className="w-4 h-4 text-secondary" /> สำหรับคนไทย
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
