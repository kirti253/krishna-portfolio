"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  agreeToContact: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@email.com",
      message: "",
      agreeToContact: false,
    },
  });

  const agreeToContact = watch("agreeToContact");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agreeToContact: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              Ready to Tell Your Story
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Because in healthcare, trust is the real metric.
            </p>

            {/* Profile Card */}
            <div className="bg-black rounded-2xl p-8 md:p-10 space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/professional-indian-man-content-creator-portrait-d.jpg"
                      alt="Krishna Bhatt"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  From 10M+ Views to One Call Away.
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Let's turn your expertise into content that educates,
                  inspires, and builds lasting patient trust.
                </p>
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-6 text-base md:text-lg font-medium rounded-full mt-6"
                >
                  <a href="#portfolio">
                    View Portfolio
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-stone-100 rounded-2xl p-6 md:p-8 lg:p-10">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Write us your message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  className="bg-white border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Jane"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last name *
                </label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  className="bg-white border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Smith"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-white border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="jane@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base shadow-sm transition-[color,box-shadow] outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-[3px] placeholder:text-gray-400"
                  placeholder="Leave us a message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToContact"
                  checked={agreeToContact}
                  onCheckedChange={(checked) =>
                    setValue("agreeToContact", checked === true)
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="agreeToContact"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I agree to be contacted by Krishna's team.
                </label>
              </div>
              {errors.agreeToContact && (
                <p className="text-sm text-red-600 -mt-4">
                  {errors.agreeToContact.message}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base md:text-lg font-medium rounded-md"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
