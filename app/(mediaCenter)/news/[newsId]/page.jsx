import Image from "next/image";
import React from "react";

export default function page() {
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

      <div className="container">
        <div
          className=" 
       rounded-md  bg-gray-200 flex justify-center p-2 w-auto max-h-[700px]  mb-12"
        >
          <Image
            className=" object-contain w-auto max-h-full "
            quality={100}
            width={1000}
            height={1000}
            src="/photo6.jpg"
            priority
            alt=""
          />
        </div>
        <div className="text-base sm:text-lg relative before:absolute before:-top-4 before:w-32  before:h-1 before:bg-red-500 ">
          <p className="leading-relaxed mb-4">
            لحضرة صاحب الجلالة الملك حمد بن عيسى آل خليفة ملك البلاد المعظم حفظه
            الله، وإلى صاحب السمو الملكي الأمير سلمان بن حمد آل خليفة ولي العهد
            رئيس مجلس الوزراء حفظه الله، وإلى صاحبة السمو الملكي الأميرة سبيكة
            بنت إبراهيم آل خليفة قرينة ملك البلاد المعظم ورئيسة المجلس الأعلى
            للمرأة وذلك بمناسبة الذكرى الثانية والعشرين لتأسيس المجلس الأعلى
            المرأة،
          </p>
          <p className="leading-relaxed mb-4">
            وما حققه من مكانة كبيرة من خلال رؤيته الاستراتيجية، ومساعيه لتسخير
            كافة الإمكانيات لدعم المرأة البحرينية وضمان تقدمها، وبناء مجتمع
            تنافسي متكافئ ومستدام.ونوهت الظاعن بدور المجلس الأعلى للمرأة كجهة
            اختصاص يعمل بشكل مستمر على تقديم الاقتراحات اللازمة للجهات المختصة،
            وبالمبادرات الوطنية التي تستهدف منح المرأة البحرينية الفرص
            المتكافئة، لتكون
          </p>
          <p className="leading-relaxed  mb-4">
            شريكًا فاعلاً في مسيرة البناء والتنمية الشاملة.واشادت الظاعن بجهود
            المجلس برئاسة صاحبة السمو الملكي الأميرة سبيكة بنت إبراهيم آل خليفة،
            والذي أسهم ومن خلال مبادرته الوطنية من تقدم المرأة البحرينية
            ومساعدتها على تبوأ العديد من الأدوار والمناصب القيادية لتواصل رحلة
            العطاء والبناء مع الرجل يدا بيد في ظل المسيرة التنموية الزاخرة
            والحافلة بالمكتسبات.وأضافت حقق
          </p>
        </div>
      </div>
    </>
  );
}
