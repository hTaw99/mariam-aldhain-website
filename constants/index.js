import Complaints from "@/components/Complaints";
import About from "@/components/Resume/About";
import Certificates from "@/components/Resume/Certificates";
import Experiences from "@/components/Resume/Experiences";
import Languages from "@/components/Resume/Languages";
import Qualifications from "@/components/Resume/Qualifications";
import SocialMediaChannel from "@/components/SocialMediaChannel";

import BriefcaseIcon from "@/assets/icons/briefcase-01.svg";
import GlobeIcon from "@/assets/icons/globe-02.svg";
import CertificateIcon from "@/assets/icons/certificate-01.svg";
import FileIcon from "@/assets/icons/file-02.svg";
import UserSquereIcon from "@/assets/icons/user-square.svg";
import SocialMediaIcon from "@/assets/icons/social-media.svg";
import ComplainIcon from "@/assets/icons/file-plus-02.svg";
import NewsIcon from "@/assets/icons/line-chart-up-03.svg";
import GalleryIcon from "@/assets/icons/image-03.svg";
import VisualsIcon from "@/assets/icons/video-recorder.svg";

console.log();

export const navigationLinks = [
  { label: "الرئيسية", path: "/" },
  { label: "السيرة الذاتية", path: "/resume" },
  {
    label: "المركز الإعلامي",
    path: null,
    list: [
      { label: "الأخبار", path: "/news" },
      { label: "معرض الصور", path: "/gallery" },
      { label: "المرئيات", path: "/visuals" },
      { label: "الملفات", path: "/files" },
    ],
  },
  { label: "تواصل معنا", path: "/contact-us" },
];
export const mediaCenterLinks = {
  name: "المركز الإعلامي",
  list: [
    { label: "الأخبار", path: "/news", icon: <NewsIcon /> },
    { label: "معرض الصور", path: "/gallery", icon: <GalleryIcon /> },
    { label: "المرئيات", path: "/visuals", icon: <VisualsIcon /> },
    { label: "الملفات", path: "/files", icon: <FileIcon /> },
  ],
};
export const resumeLinks = [
  {
    label: "عن د. مريم الظاعن",
    content: <About />,
    icon: <UserSquereIcon />,
  },
  {
    label: "المؤهلات العلمية",
    content: <Qualifications />,
    icon: <FileIcon />,
  },
  {
    label: "الشهادات العلمية الاحترافية",
    content: <Certificates />,
    icon: <CertificateIcon />,
  },
  {
    label: "الخبرات العملية",
    content: <Experiences />,
    icon: <BriefcaseIcon />,
  },
  {
    label: "اللغات",
    content: <Languages />,
    icon: <GlobeIcon />,
  },
];

export const contactLinks = [
  {
    label: "قنوات التواصل الاجتماعي",
    content: <SocialMediaChannel />,
    icon: <SocialMediaIcon />,
  },
  {
    label: "للشكاوي والمقترحات",
    content: <Complaints />,
    icon: <ComplainIcon />,
  },
];

export const footerLinks = [
  {
    name: "حول النائب",
    list: [
      { label: "الرئيسية", path: "/" },
      { label: "السيرة الذاتية", path: "/resume" },
      { label: "الشكاوي والمقترحات", path: "/contact-us" },
    ],
  },
  {
    name: "المركز الإعلامي",
    list: [
      { label: "الأخبار", path: "/news" },
      { label: "معرض الصور", path: "/gallery" },
      { label: "المرئيات", path: "/visuals" },
      { label: "الملفات", path: "/files" },
    ],
  },
  {
    name: "روابط ذات صلة",
    list: [
      { label: "مجلس النواب – مملكة البحرين ", path: "#" },
      { label: "مجلس الشورى – مملكة البحرين ", path: "#" },
      { label: "وزارة شؤون مجلسي الشورى والنواب ", path: "#" },
      { label: "هيئة المعلومات والحكومة الإلكترونية ", path: "#" },
    ],
  },
];

export const blocks = ["809", "812", "813", "814", "840"];
