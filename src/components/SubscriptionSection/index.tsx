// components/SubscriptionSection.tsx
"use client";

import { useState } from "react";

export default function SubscriptionSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        const data = await response.json();
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-14 md:py-32 px-4 relative overflow-hidden inter my-20">
      {/* Background gradient */}
      <div
        className="absolute inset-0 w-[95%] mx-auto border border-gray-700 rounded px-8"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-pink-400 font-medium mb-3 text-sm">STAY CONNECTED</p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white my-8">
          Subscribe For The Latest In Prop Trading News And Deals
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto relative justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-96 w-full h-14 py-3 px-4 rounded-full bg-[#28282c] text-white ring-1 ring-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500 duration-300 text-sm"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute right-2 md:right-10 top-[6px] py-3 px-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-500 hover:bg-pink-600 transition-colors text-white font-medium disabled:opacity-70 text-sm"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-4 text-white">{message}</p>}
      </div>
    </section>
  );
}
