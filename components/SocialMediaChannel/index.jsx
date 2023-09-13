import { socialMediaLinks } from "@/constants";
import Link from "next/link";

export default function SocialMediaChannel() {
  return (
    <div>
      <h1 className="text-xl mb-2 font-bold border-r-4 border-red-500  pr-4 relative ">
        قنوات التواصل الاجتماعي
      </h1>
      <p className="mr-4 mb-4 leading-relaxed text-justify">
        من أجل التواصل المباشر مع الجمهور وإبراز إنجازات المجلس، وعرضها على
        المواطنين بكل شفافية، قامت الأمانة العامة بتوفير عدة قنوات تواصل
        اجتماعية من بينها: الأنستجرام، وتويتر وفيسبوك، على جانب برنامج المحادثة
        الواتساب، وذلك من أجل الاستفادة من وسائل التواصل الاجتماعي كوسيلة فاعلة
        يمكن للأمانة العامة بمجلس النواب استثمارها للتواصل مع المواطنين والتفاعل
        معهم ومعرفة قضاياهم وتوضيح الرؤى ووجهات النظر المختلفة حول ما يثيرونه من
        موضوعات وملاحظات تقع في نطاق العمل التشريعي.
      </p>
      <div className="flex flex-wrap gap-4 mr-4 items-center">
        {socialMediaLinks.map((link) => (
          <Link
            target="_blank"
            key={link.label}
            href={link.path}
            className="text-3xl hover:text-gold-500 transition-all duration-300 bg-gray-100 w-auto p-10 md:p-12 rounded-md"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
