import Image from "next/image";

export default function Languages() {
  const language = [
    {
      name: "الإنجليزية",
      flag: "/england.svg",
    },
    {
      name: "الإسبانية",
      flag: "/spain.svg",
    },
    {
      name: "الفرنسية",
      flag: "/france.svg",
    },
    {
      name: "الألمانية",
      flag: "/germany.svg",
    },
    {
      name: "الأردو",
      flag: "/germany.svg",
    },
  ];
  return (
    <div className="flex flex-col text-lg">
      {language.map((lang) => (
        <div key={lang.name} className="flex items-center gap-2">
          <div>
            <Image
              alt={lang.name}
              width={24}
              height={24}
              src={lang.flag}
            ></Image>
          </div>
          <span>{lang.name}</span>
        </div>
      ))}
    </div>
  );
}
