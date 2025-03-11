"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
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

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      console.log(data);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-2 px-3">
      <div className="w-full min-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-20">
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
          <div className="space-y-3 mt-12 max-w-lg">
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
              className="relative inline-flex items-center justify-center px-8 py-3 font-bold rounded-2xl mt-20 bg-gradient-to-br from-primary to-blue text-white uppercase"
            >
              {loading ? "Sending..." : "Connect"}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactFormSection;
