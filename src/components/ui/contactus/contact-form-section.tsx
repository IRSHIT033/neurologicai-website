const ContactFormSection = () => {
  return (
    <div className=" flex items-center justify-center py-2 px-3">
      <div className="w-full min-w-2xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-20">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-white text-medium font-bold uppercase"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className=" relative block w-full rounded-2xl border-0 bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-white text-medium font-bold uppercase"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="relative block w-full rounded-2xl border-0 bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-white text-medium font-bold uppercase"
              >
                Company
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  className="relative block w-full rounded-2xl border-0 bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact"
                className="block text-white text-medium font-bold uppercase"
              >
                Contact
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Phone Number"
                  className="relative block w-full rounded-2xl border-0 bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-12 max-w-lg ">
            <label
              htmlFor="message"
              className="block text-white text-medium font-bold uppercase"
            >
              Message
            </label>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="relative resize-none block w-full rounded-2xl border-0 bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-2xl group mt-20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-blue"></span>
              <span className="cursor-pointer relative uppercase font-bold text-white px-8 ">
                Connect
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
