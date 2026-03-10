import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SyllabusSection from '../components/SyllabusSection';

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will be in touch.\n\n' + JSON.stringify(formData, null, 2));
    setFormData({ name: '', email: '', interest: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection
          title="The Renevizion Method Course v2"
          subtitle="Unlock Your Creative Potential and Build a Thriving Business"
          description="Our updated course guides you through a proven framework for developing innovative ideas and transforming them into successful ventures. Learn directly from industry leaders and gain practical skills to redefine your future."
          ctaText="Join the Waitlist"
          ctaLink="#waitlist"
        />

        <section id="course-details" className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Course Details</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Master the Renevizion framework for idea generation and validation.</li>
                <li>Develop a robust business model canvas for your ventures.</li>
                <li>Acquire practical skills in product development and market entry.</li>
                <li>Learn effective strategies for funding and scaling your business.</li>
                <li>Connect with a community of like-minded innovators and mentors.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Is This Course For?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Aspiring entrepreneurs and startup founders.</li>
                <li>Established professionals looking to innovate within their organizations.</li>
                <li>Creatives and freelancers seeking to monetize their passions.</li>
                <li>Anyone eager to transform their ideas into tangible results.</li>
              </ul>
            </div>
          </div>
        </section>

        <SyllabusSection />

        <section id="philosophy" className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            At Renevizion, we believe that true innovation stems from a blend of creative vision and strategic execution. Our method is designed to demystify entrepreneurship, making it accessible and actionable for everyone. We foster an environment of collaboration, continuous learning, and courageous experimentation, empowering our students to not just dream, but to build and succeed.
          </p>
        </section>

        <section id="waitlist" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">Join the Waitlist</h2>
          <p className="text-center text-lg mb-6">Be the first to know when enrollment opens and gain access to exclusive pre-course content!</p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-lg font-medium mb-2">Your Interest</label>
              <textarea
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                placeholder="Tell us what you hope to gain from the course..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-indigo-700 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Join Waitlist
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-6 mt-8">
        <p>&copy; 2024 Renevizion Method Course. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Enroll;
