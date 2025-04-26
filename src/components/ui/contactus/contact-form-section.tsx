"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email cannot be empty"),
  company: z.string().min(1, "Company cannot be empty"),
  contact: z.string().min(10, "Contact must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-2 px-6 lg:px-3 w-full md:w-2/4 text-xs md:text-[16px]">
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-20">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-white font-bold uppercase"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>

                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  {...register("name")}
                  className="relative block w-full rounded-2xl bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-white font-bold uppercase"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>

                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  {...register("email")}
                  className=" relative block w-full rounded-2xl bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-white font-bold uppercase"
              >
                Company
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>

                <input
                  type="text"
                  id="company"
                  placeholder="Company Name"
                  {...register("company")}
                  className=" relative block w-full rounded-2xl bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            {/* Contact */}
            <div className="space-y-2">
              <label
                htmlFor="contact"
                className="block text-white font-bold uppercase"
              >
                Contact
              </label>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>

                <input
                  type="text"
                  id="contact"
                  placeholder="Phone Number"
                  {...register("contact")}
                  className="relative block w-full rounded-2xl bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3 mt-4 md:mt-12 max-w-lg">
            <label
              htmlFor="message"
              className="block text-white font-bold uppercase"
            >
              Message
            </label>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-blue opacity-75"></div>

              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                {...register("message")}
                className=" relative block w-full rounded-2xl bg-background py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="relative cursor-pointer inline-flex items-center justify-center w-34 lg:w-40 h-10 font-bold rounded-2xl mt-4 md:mt-20 bg-gradient-to-br from-primary to-blue text-white uppercase"
            >
              {loading ? (
                <span className="w-2 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Connect"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
