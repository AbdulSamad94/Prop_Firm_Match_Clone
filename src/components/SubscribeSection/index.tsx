// components/SubscribeSection.js
import React from "react";

const SubscribeSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900">
      {/* Overlay or gradient effect - adjust colors as needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

      <div className="relative z-10 text-center p-8 text-white">
        <h2 className="text-lg uppercase tracking-widest mb-2">
          Stay Connected
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Subscribe For The Latest In Prop Trading News And Deals
        </h1>
        
        {/* Subscription Form */}
        <form className="flex flex-col items-center sm:flex-row sm:justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black focus:outline-none w-64"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
