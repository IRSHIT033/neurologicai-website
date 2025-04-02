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
    <div className="flex flex-col mb-24 gap-7 text-left">
      <p className="flex-1 text-4xl poppinsTextSemiBold ">Want to reach us directly?</p>
      <p className="flex-1 max-w-xs text-lg pt-4 pb-16">
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
            />
            <span>{contact.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectContactSection;
