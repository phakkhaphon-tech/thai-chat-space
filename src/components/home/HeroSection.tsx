import { Link } from "react-router-dom";
import { MessageCircle, Users, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>แพลตฟอร์มแชทออนไลน์ที่ปลอดภัยที่สุด</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            พูดคุย หาเพื่อน
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">อย่างปลอดภัย</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            เข้าร่วมห้องแชทสาธารณะกับคนไทยนับพัน ไม่ต้องสมัครสมาชิก 
            เลือกชื่อเล่นและเริ่มพูดคุยได้ทันที
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-lg px-8 py-6 rounded-xl">
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                เริ่มแชทเลย
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent text-foreground text-lg px-8 py-6 rounded-xl">
              <Link to="/rules">
                <Shield className="w-5 h-5 mr-2" />
                ดูกฎการใช้งาน
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-foreground mb-1">
                <Users className="w-6 h-6 text-primary" />
                <span>1,234</span>
              </div>
              <p className="text-sm text-muted-foreground">ออนไลน์</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">10+</div>
              <p className="text-sm text-muted-foreground">ห้องแชท</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-foreground mb-1">
                <Shield className="w-6 h-6 text-success" />
                <span>100%</span>
              </div>
              <p className="text-sm text-muted-foreground">ปลอดภัย</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
