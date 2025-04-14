const ContactUsHeader = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center text-center pt-[5vh]">
      <h1 className="text-2xl md:text-3xl lg:text-6xl poppinsTextMedium  mb-4 bg-gradient-to-r from-blue from-40% to-primary  bg-clip-text text-transparent ">
        Get in touch
      </h1>
      <p className="text-xs md:text-md lg:text-lg text-center max-w-lg leading-4 md:leading-6 lg:leading-8  mb-16 mx-8 lg:mx-auto">
        We would be pleased to engage with you to understand your business and
        offer tailored insights
      </p>
    </div>
  );
};

export default ContactUsHeader;
