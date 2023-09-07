export default function Certificates() {
  const certificates = [
    {
      date: "2015",
      certificate: "دبلوم عالي في الإدارة الاستراتيجية والقيادة الادارية",
      university: "من معهد إدارة المعتمد / لندن - لوتن",
    },
    {
      date: "2014",
      certificate: "ادارة المشاريع العامة - ممارس محترف معتمد",
      university: "من معهد المديرين الفنيين المعتمدين عالميا / لندن - لوتن",
    },
    {
      date: "2013",
      certificate: "دبلوم عالي في الادارة العامة والقيادة الادارية",
      university: "من معهد إدارة المبيعات والتسويق / لندن - لوتن",
    },
    {
      date: "2008",
      certificate: "دبلوم عالي في الادارة العامة والقيادة الادارية",
      university: "من معهد الإدارة القيادية / لندن - لوتن",
    },
  ];
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-6">
      {certificates.map((event) => (
        <>
          {/* date */}
          <div key={event.date} className="text-xl text-gold-500 font-semibold">
            {event.date}
          </div>
          {/* details */}
          <div className=" flex flex-col gap-2">
            <h1 className="text-red-500 text-xl font-semibold">
              {event.certificate}
            </h1>
            <p className="italic text-lg">{event.university}</p>
          </div>
        </>
      ))}
    </div>
  );
}
