"use client";
import { useState } from "react";
import Head from "next/head";
import { Phone, Mail, Send, Check } from "lucide-react";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "./ui/cover";
import Link from "next/link";
export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Construct the WhatsApp message
      const { name, email, phone, message } = FormField;

      const whatsappMessage = `
      Hello! You have a new inquiry from your website:
          
      👤 Name: ${name}
      📧 Email: ${email}
      📱 Phone: ${phone || "Not provided"}
      🗨️ Message: ${message}
        `;

      const encodedMessage = encodeURIComponent(whatsappMessage.trim());

      // Change the phone number to your desired WhatsApp number (with country code, no +)
      const whatsappNumber = "919787174450"; // example number

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappURL, "_blank");

      // You can reset the form or mark it as submitted
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const [FormField, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  type FormField = "name" | "email" | "message";

  type FormErrors = {
    name?: string | null;
    email?: string | null;
    message?: string | null;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as FormField]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!FormField.name.trim()) newErrors.name = "Name is required";
    if (!FormField.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(FormField.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!FormField.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div
      id="Contact"
      className="w-full overflow-x-hidden min-h-screen gap-[20px] bg-black z-2"
    >
      <Head>
        <title>Connect With Me</title>
        <meta
          name="description"
          content="Get in touch with our team for inquiries about courses, admissions, or any other information you need."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black text-white z-2">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <Cover>Connect With Me</Cover>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto opacity-90">
            Let&apos;s Build Something Together!
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto mt-4 opacity-80">
            Whether you have an idea for a project, want to collaborate, or just
            want to say hi — my inbox is always open. I&apos;m always excited to
            connect with like-minded people, discuss innovative ideas, and
            explore new opportunities.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 ">
        <div className="max-w-6xl mx-auto">
          {/* Contact info and form container */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Contact info section */}
            <div className="md:col-span-2 bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-200 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-400">
                      <a
                        href="tel:+919787174450"
                        className="hover:text-blue-400 transition-colors"
                      >
                        +91 9787174450
                      </a>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:naveenudai26@gmail.com"
                        className="hover:text-blue-400 transition-colors"
                      >
                        naveenudai26@gmail.com
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-200 mb-3">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/naveenudai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                    className="bg-blue-900 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,15.7C9,16.4,8.4,17,7.7,17	c-0.7,0-1.3-0.6-1.3-1.3v-4.5C6.5,10.6,7,10,7.7,10C8.4,10,9,10.6,9,11.3V15.7z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2	c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2C9.1,8.2,8.6,8.7,7.7,8.7z M18,15.8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-2.6	c0-1.1-0.7-1.2-0.9-1.2c-0.2,0-1.1,0-1.1,1.2v2.6c0,0.7-0.5,1.2-1.2,1.2h-0.1c-0.7,0-1.2-0.5-1.2-1.2v-4.5c0-0.7,0.6-1.3,1.3-1.3	s1.3,0.6,1.3,1.3c0,0,0.3-1.3,2.2-1.3c1.2,0,2.2,1,2.2,3.2V15.8z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://x.com/Naveen74081646"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my X profile"
                    className="bg-blue-900 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/naveee.nn/profilecard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Instagram profile"
                    className="bg-blue-900 hover:bg-blue-300 text-white p-2 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-900 hover:bg-blue-300 text-white p-2 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact form section */}
            <div className="md:col-span-3 bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-200 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 text-lg mb-1">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We&apos;ve received your
                      message and will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={FormField.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-300 bg-red-50"
                            : "border-gray-700"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={FormField.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-gray-700"
                        }`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={FormField.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    {/* <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={FormField.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="Course Inquiry"
                      />
                    </div> */}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={FormField.message}
                      onChange={handleChange}
                      //   rows="5"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                        errors.message
                          ? "border-red-300 bg-red-50"
                          : "border-gray-700"
                      }`}
                      placeholder="Please write your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center transition-colors hover:scale-105 ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Map section */}
          <div className="bg-gray-950 rounded-lg shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-200 mb-6">
              Find Me at
            </h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Google Maps Embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                {/* Replace the iframe source with your actual Google Maps embed URL */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3242377324973!2d80.04081763108744!3d12.822312311033897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1744559921406!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  //   allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
