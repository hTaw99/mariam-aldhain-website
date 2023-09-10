import Complaints from "@/components/Complaints";
import BriefcaseIcon from "@/components/Icons/Briefcase";
import CertificateIcon from "@/components/Icons/Certificate";
import FileIcon from "@/components/Icons/File";
import GlobeIcon from "@/components/Icons/Globe";
import UserSquereIcon from "@/components/Icons/UserSquere";
import About from "@/components/Resume/About";
import Certificates from "@/components/Resume/Certificates";
import Experiences from "@/components/Resume/Experiences";
import Languages from "@/components/Resume/Languages";
import Qualifications from "@/components/Resume/Qualifications";
import SocialMediaChannel from "@/components/SocialMediaChannel";

// import SocialMediaIcon from "@/components/Icons/SocialMediaIcon";
// import ComplainIcon from "@/assets/svgs/file-plus-02.svg";

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
    { label: "الأخبار", path: "/news" },
    { label: "معرض الصور", path: "/gallery" },
    { label: "المرئيات", path: "/visuals" },
    { label: "الملفات", path: "/files" },
  ],
};
export const resumeLinks = [
  {
    label: "عن د. مريم الظاعن",
    content: <About />,
    icon: <UserSquereIcon color="stroke-red-500" />,
  },
  {
    label: "المؤهلات العلمية",
    content: <Qualifications />,
    icon: <FileIcon color="stroke-red-500" />,
  },
  {
    label: "الشهادات العلمية الاحترافية",
    content: <Certificates />,
    icon: <CertificateIcon color="stroke-red-500" />,
  },
  {
    label: "الخبرات العملية",
    content: <Experiences />,
    icon: <BriefcaseIcon color="stroke-red-500" />,
  },
  {
    label: "اللغات",
    content: <Languages />,
    icon: <GlobeIcon color="stroke-red-500" />,
  },
];

export const contactLinks = [
  {
    label: "قنوات التواصل الاجتماعي",
    content: <SocialMediaChannel />,
    // icon: <SocialMediaIcon color="stroke-gray-500" />,
  },
  {
    label: "للشكاوي والمقترحات",
    content: <Complaints />,
    // icon: <ComplainIcon/>,
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
