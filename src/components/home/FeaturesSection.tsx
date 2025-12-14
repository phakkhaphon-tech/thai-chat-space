import { Shield, Users, Zap, Heart, MessageCircle, Crown } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "แชทแบบเรียลไทม์",
    description: "ส่งข้อความและเห็นการตอบกลับทันที ไม่ต้องรีเฟรชหน้า",
    color: "primary",
  },
  {
    icon: Users,
    title: "ห้องแชทหลากหลาย",
    description: "เลือกห้องแชทตามความสนใจ อายุ หรือหัวข้อที่ชอบ",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "ปลอดภัย 100%",
    description: "ระบบ Report และ Block ผู้ดูแลคอยดูแลตลอด 24 ชม.",
    color: "success",
  },
  {
    icon: Zap,
    title: "ไม่ต้องสมัครสมาชิก",
    description: "เลือกชื่อเล่นและเข้าแชทได้เลย ง่ายและรวดเร็ว",
    color: "warning",
  },
  {
    icon: Heart,
    title: "ชุมชนเป็นมิตร",
    description: "คนไทยหลายพันคนพร้อมพูดคุยและหาเพื่อนใหม่",
    color: "secondary",
  },
  {
    icon: Crown,
    title: "VIP สิทธิพิเศษ",
    description: "อัพเกรดเป็น VIP เพื่อรับสิทธิพิเศษและแบดจ์พิเศษ",
    color: "vip",
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    vip: "bg-vip/10 text-vip",
  };
  return colorMap[color] || colorMap.primary;
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ทำไมต้อง <span className="text-gradient-primary">ThaiChat</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            แพลตฟอร์มแชทที่ออกแบบมาเพื่อคนไทยโดยเฉพาะ ปลอดภัย เป็นมิตร และใช้งานง่าย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
