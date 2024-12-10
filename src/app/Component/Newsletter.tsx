'use client'
import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for subscribing (e.g., send email to the backend)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Up-to-Date About Our Latest Offers</h2>
        <p className="text-lg mb-8">Enter your email address to subscribe to our newsletter</p>
        <form onSubmit={handleSubscribe} className="max-w-lg mx-auto flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black p-3 rounded-r-lg hover:bg-yellow-600 gap-7"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className= "bg-black text-white p-3 rounded-r-lg hover:bg-yellow-600">
            Subscribe to Newsletter
          </button>
          {/* "bg-yellow-500 text-black p-3 rounded-r-lg hover:bg-yellow-600" */}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
