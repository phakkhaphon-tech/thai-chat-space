import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow animate-float">
            <MessageCircle className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            พร้อมหาเพื่อนใหม่แล้วหรือยัง?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            เข้าร่วมชุมชน ThaiChat วันนี้ ไม่ต้องสมัครสมาชิก แค่เลือกชื่อเล่นก็พร้อมแชทได้ทันที
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-lg px-10 py-6 rounded-xl">
              <Link to="/chat">
                เริ่มแชทเลย
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-online animate-pulse-soft" />
              1,234 คนออนไลน์
            </span>
            <span>•</span>
            <span>ใช้งานฟรี</span>
            <span>•</span>
            <span>ปลอดภัย 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
