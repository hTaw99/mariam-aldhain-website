"use client";

import Link from "next/link";
import { BsFacebook, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";

export default function SocialMediaChannel() {
  const socialMediaLinks = [
    {
      label: "تويتر",
      icon: (
        <BsTwitter
          className="group-hover:text-red-500 transition-all duration-300"
          size={32}
        />
      ),
      path: "#",
    },
    {
      label: "فيسبوك",
      icon: (
        <BsFacebook
          className="group-hover:text-red-500 transition-all duration-300"
          size={32}
        />
      ),
      path: "#",
    },
    {
      label: "يوتيوب",
      icon: (
        <BsYoutube
          className="group-hover:text-red-500 transition-all duration-300"
          size={32}
        />
      ),
      path: "#",
    },
    {
      label: "واتساب",
      icon: (
        <BsWhatsapp
          className="group-hover:text-red-500 transition-all duration-300"
          size={32}
        />
      ),
      path: "#",
    },
  ];
  return (
    <div>
      <h1 className="text-xl mb-2 font-bold border-r-4 border-red-500  pr-4 relative ">
        قنوات التواصل الاجتماعي
      </h1>
      <p className="mr-4 mb-4 leading-relaxed">
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
            key={link.label}
            href={link.path}
            className="group bg-gray-100 w-auto p-8 md:p-16 rounded-md"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
