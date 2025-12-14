import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const doRules = [
  "พูดจาสุภาพ ให้เกียรติผู้อื่น",
  "แจ้งเตือนเมื่อเห็นพฤติกรรมไม่เหมาะสม",
  "เคารพความเป็นส่วนตัวของผู้อื่น",
  "ใช้ภาษาไทยหรืออังกฤษที่เหมาะสม",
];

const dontRules = [
  "ห้ามโพสต์เนื้อหา 18+ หรือลามกอนาจาร",
  "ห้ามคุกคามหรือข่มขู่ผู้อื่น",
  "ห้ามสแปมหรือโฆษณาสินค้า",
  "ห้ามแอบอ้างตัวตนเป็นบุคคลอื่น",
];

const RulesPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            กฎการใช้งาน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เพื่อให้ทุกคนมีประสบการณ์การแชทที่ดี กรุณาปฏิบัติตามกฎเหล่านี้
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Do's */}
          <div className="bg-card rounded-2xl p-6 border border-success/20 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">สิ่งที่ควรทำ</h3>
            </div>
            <ul className="space-y-3">
              {doRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-card rounded-2xl p-6 border border-destructive/20 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">สิ่งที่ห้ามทำ</h3>
            </div>
            <ul className="space-y-3">
              {dontRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <Link to="/rules">
              อ่านกฎทั้งหมด
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RulesPreview;
