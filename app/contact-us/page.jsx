"use client";
import { contactLinks } from "@/constants";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const ContactUsPage = () => {
  const search = useSearchParams();
  search.get("complain");
  const [contactInfo, setContactInfo] = useState(
    search.get("complain") ? contactLinks[1] : contactLinks[0]
  );

  return (
    <div className="container md:grid md:grid-cols-[1fr_3fr]  py-12 gap-4">
      <ul className="col-start-1 mb-8 flex md:flex-col col-end-2 rounded-md border w-full h-min border-b-0 border-l-0 md:border-l ">
        {contactLinks.map((link) => (
          <button
            onClick={() => setContactInfo(link)}
            key={link.label}
            className={` ${
              contactInfo.label === link.label
                ? "text-base md:text-xl text-gold-500 py-6 border-b-4 border-b-gold-500 md:border-b md:border-b-gray-200 md:border-r-4 md:border-r-gold-500"
                : "text-sm sm:text-base"
            } flex gap-2 items-center border-l md:border-l-0 hover:bg-gold-50 transition-all duration-300 font-semibold border-b w-full text-right p-4`}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </ul>
      <div>{contactInfo.content}</div>
    </div>
  );
};

export default ContactUsPage;
