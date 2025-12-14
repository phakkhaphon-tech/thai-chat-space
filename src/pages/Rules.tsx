import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, Shield, ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const doRules = [
  "พูดจาสุภาพ ให้เกียรติผู้อื่นเสมอ",
  "แจ้งเตือนผู้ดูแลเมื่อเห็นพฤติกรรมไม่เหมาะสม",
  "เคารพความเป็นส่วนตัวของผู้อื่น",
  "ใช้ภาษาไทยหรืออังกฤษที่เหมาะสม",
  "ช่วยสร้างบรรยากาศที่ดีในห้องแชท",
  "ปฏิบัติตามคำแนะนำของผู้ดูแล",
];

const dontRules = [
  "ห้ามโพสต์เนื้อหา 18+ หรือลามกอนาจาร",
  "ห้ามคุกคาม ข่มขู่ หรือกลั่นแกล้งผู้อื่น",
  "ห้ามสแปม โฆษณา หรือหลอกลวง",
  "ห้ามแอบอ้างตัวตนเป็นบุคคลอื่น",
  "ห้ามแชร์ข้อมูลส่วนตัวของผู้อื่น",
  "ห้ามพูดเรื่องการเมืองหรือศาสนาในเชิงลบ",
  "ห้ามใช้คำหยาบคายหรือดูถูกผู้อื่น",
  "ห้ามส่งลิงก์ที่เป็นอันตราย",
];

const penalties = [
  { offense: "ครั้งแรก", action: "แจ้งเตือน", description: "ผู้ดูแลจะส่งข้อความเตือนให้ปฏิบัติตามกฎ" },
  { offense: "ครั้งที่สอง", action: "ห้ามแชท 1 ชม.", description: "ไม่สามารถส่งข้อความได้ชั่วคราว" },
  { offense: "ครั้งที่สาม", action: "ห้ามแชท 24 ชม.", description: "ไม่สามารถเข้าห้องแชทได้ 1 วัน" },
  { offense: "ร้ายแรง", action: "แบนถาวร", description: "ไม่สามารถใช้งานได้อีกต่อไป" },
];

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าแรก
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              กฎการใช้งาน ThaiChat
            </h1>
            <p className="text-lg text-muted-foreground">
              เพื่อให้ทุกคนมีประสบการณ์การแชทที่ดี กรุณาปฏิบัติตามกฎเหล่านี้อย่างเคร่งครัด
            </p>
          </div>

          {/* Safety Promise */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">คำมั่นสัญญาด้านความปลอดภัย</h2>
              <p className="text-muted-foreground">
                เรามุ่งมั่นที่จะสร้างพื้นที่ที่ปลอดภัยสำหรับทุกคน มีผู้ดูแลคอยดูแลตลอด 24 ชั่วโมง 
                และมีระบบแจ้งเตือนที่รวดเร็ว หากพบเห็นสิ่งไม่เหมาะสม กรุณาแจ้งทันที
              </p>
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Do's */}
            <div className="bg-card rounded-2xl p-6 border border-success/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">สิ่งที่ควรทำ</h2>
              </div>
              <ul className="space-y-4">
                {doRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-card rounded-2xl p-6 border border-destructive/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">สิ่งที่ห้ามทำ</h2>
              </div>
              <ul className="space-y-4">
                {dontRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Penalties */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">บทลงโทษ</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ความผิด</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">การดำเนินการ</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">รายละเอียด</th>
                  </tr>
                </thead>
                <tbody>
                  {penalties.map((penalty, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="py-3 px-4 text-foreground font-medium">{penalty.offense}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          penalty.offense === "ร้ายแรง" 
                            ? "bg-destructive/10 text-destructive"
                            : "bg-warning/10 text-warning"
                        }`}>
                          {penalty.action}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{penalty.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              ยอมรับกฎการใช้งานแล้ว? มาเริ่มแชทกันเลย!
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                เข้าห้องแชท
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
