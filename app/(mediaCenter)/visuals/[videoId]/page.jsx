"use client";

import Video from "@/components/Video";

function VideoPage() {
  return (
    <>
      <div className=" bg-gradient-to-b  from-gold-500 to-gold-400 py-16">
        <div className="container">
          <div className="flex flex-col">
            <span className=" self-start text-sm rounded-md text-white mb-2 ">
              26 أغسطس 2023
            </span>
            <h1 className="text-2xl text-white font-bold">
              هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
            </h1>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <p className="leading-relaxed  mb-4">
          شريكًا فاعلاً في مسيرة البناء والتنمية الشاملة.واشادت الظاعن بجهود
          المجلس برئاسة صاحبة السمو الملكي الأميرة سبيكة بنت إبراهيم آل خليفة،
          والذي أسهم ومن خلال مبادرته الوطنية من تقدم المرأة البحرينية ومساعدتها
          على تبوأ العديد من الأدوار والمناصب القيادية لتواصل رحلة العطاء
          والبناء مع الرجل يدا بيد في ظل المسيرة التنموية الزاخرة والحافلة
          بالمكتسبات.وأضافت حقق
        </p>
        <Video />
      </div>
    </>
  );
}

export default VideoPage;
