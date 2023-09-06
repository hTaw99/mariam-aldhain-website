export default function Qualifications() {
  const qualifications = [
    {
      date: "2005 - 2008",
      university: "جامعة لوتن البريطانية",
      details: [
        "درجة الدكتوراه - (مع مرتبة الشرف) - تكنولوجيا الإعلام والسياسة الخارجية.",
        "درجة البكالوريوس - (مع مرتبة الشرف) - الانتاج الإعلامي وتكنولوجيا الوسائط المتعددة مع التخصص باللغات الاسبانية والفرنسية والإنجليزية. ",
      ],
    },
    {
      date: "1998 - 2000",
      university: "جامعة نورث البريطانية",
      details: [
        "- درجة البكالوريوس - (مع مرتبة الشرف) - تكنولوجيا الوسائط المتعددة وتطبيق البرمجيات.",
      ],
    },
    {
      date: "1996 - 1997",
      university: "كلية جيمس وات الأسكتلندية",
      details: [
        "الدبلوم العالي الوطني بامتياز- هندسة الحاسوب الآلي وتكنولوجيا الوسائط المتعددة",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-6">
      {qualifications.map((event) => (
        <>
          {/* date */}
          <div className="text-xl text-gold-500 font-semibold">
            {event.date}
          </div>
          {/* details */}
          <div className=" flex flex-col gap-2">
            <h1 className="text-red-500 text-xl font-semibold">
              {event.university}
            </h1>
            <div className="text-lg font-medium">
              {event.details.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
