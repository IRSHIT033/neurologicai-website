import Image from "next/image";
const contactDetails = [
  {
    logo: "/contactus-mail-logo.svg",
    details: "info@neurologicai.com",
  },
  {
    logo: "/contactus-call-logo.svg",
    details: "+91 9836243989",
  },
  {
    logo: "/contactus-linkedin-logo.svg",
    details: "https://www.linkedin.com/company/neurologicai",
  },
];

const DirectContactSection = () => {
  return (
    <div className="flex flex-col mb-24 gap-7 text-left px-6 lg:px-0">
      <p className="flex-1 text-xl lg:text-4xl poppinsTextSemiBold ">Want to reach us directly?</p>
      <p className="flex-1 max-w-xs text-sm lg:text-lg pt-1 lg:pt-4 pb-10 lg:pb-16">
        For business inquiries and partnerships, please connect
      </p>
      <div className="flex-3 flex-col items-center space-y-4">
        {contactDetails.map((contact) => (
          <div key={contact.details} className="flex items-center gap-4">
            <Image
              src={contact.logo}
              alt={contact.details}
              width={40}
              height={40}
              className="w-4 h-4 lg:w-10 lg:h-10"
            />
            <span className="text-[12px] md:text-lg">{contact.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectContactSection;
