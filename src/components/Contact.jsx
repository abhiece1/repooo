import React, { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('quote');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src="/api/placeholder/1920/1080"
          alt="Contact us" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-7xl font-bold mb-8">Contact Us</h1>
            <p className="text-2xl max-w-3xl mx-auto">
              Reach out to us for any inquiries, support, or career opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {['quote', 'locations', 'support', 'careers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-xl text-xl font-semibold transition-all ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Quote Form Section */}
        {activeTab === 'quote' && (
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Get a Quote</h2>
            <form className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl text-gray-700 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-700 mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-700 mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-700 mb-3">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xl text-gray-700 mb-3">Project Type</label>
                <select
                  name="projectType"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                >
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-xl text-gray-700 mb-3">Budget Range</label>
                <select
                  name="budget"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                >
                  <option value="">Select Budget Range</option>
                  <option value="below-10k">Below $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="above-50k">Above $50,000</option>
                </select>
              </div>
              <div>
                <label className="block text-xl text-gray-700 mb-3">Timeline</label>
                <select
                  name="timeline"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                >
                  <option value="">Select Timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xl text-gray-700 mb-3">Project Details</label>
                <textarea
                  name="message"
                  rows="6"
                  className="w-full px-6 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-xl py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Locations Section */}
        {activeTab === 'locations' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                city: "New York",
                address: "123 Industrial Ave, Brooklyn, NY 11201",
                phone: "+1 (212) 555-0123",
                email: "ny@steelco.com"
              },
              {
                city: "Chicago",
                address: "456 Manufacturing Blvd, Chicago, IL 60601",
                phone: "+1 (312) 555-0124",
                email: "chi@steelco.com"
              },
              {
                city: "Los Angeles",
                address: "789 Production St, Los Angeles, CA 90012",
                phone: "+1 (323) 555-0125",
                email: "la@steelco.com"
              }
            ].map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">{location.city}</h3>
                <div className="space-y-6">
                  <p className="text-xl text-gray-600">{location.address}</p>
                  <p className="text-xl text-gray-600">{location.phone}</p>
                  <p className="text-xl text-gray-600">{location.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Section */}
        {activeTab === 'support' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Technical Support</h3>
                <p className="text-xl text-gray-600 mb-6">24/7 support for technical inquiries and assistance</p>
                <div className="space-y-4">
                  <p className="text-xl text-gray-600">Phone: +1 (800) 555-0126</p>
                  <p className="text-xl text-gray-600">Email: support@steelco.com</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Customer Service</h3>
                <p className="text-xl text-gray-600 mb-6">Monday - Friday: 9 AM - 6 PM EST</p>
                <div className="space-y-4">
                  <p className="text-xl text-gray-600">Phone: +1 (800) 555-0127</p>
                  <p className="text-xl text-gray-600">Email: customer@steelco.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">FAQ</h3>
              <div className="space-y-8">
                {[
                  {
                    q: "What are your standard delivery times?",
                    a: "Delivery times vary by project scope. Typical timeframes range from 2-6 weeks."
                  },
                  {
                    q: "Do you offer installation services?",
                    a: "Yes, we provide professional installation services for all our products."
                  },
                  {
                    q: "What warranty do you offer?",
                    a: "We offer a 10-year warranty on materials and 5-year warranty on installation."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-8">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">{faq.q}</h4>
                    <p className="text-xl text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Careers Section */}
        {activeTab === 'careers' && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Team</h3>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals to join our growing team. Explore our current opportunities below.
              </p>
              <div className="space-y-8">
                {[
                  {
                    position: "Senior Structural Engineer",
                    location: "New York, NY",
                    type: "Full-time"
                  },
                  {
                    position: "Steel Fabricator",
                    location: "Chicago, IL",
                    type: "Full-time"
                  },
                  {
                    position: "Project Manager",
                    location: "Los Angeles, CA",
                    type: "Full-time"
                  }
                ].map((job, index) => (
                  <div key={index} className="border-b pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-semibold text-gray-800">{job.position}</h4>
                      <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-lg">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-xl text-gray-600 mb-6">{job.location}</p>
                    <button className="text-xl text-blue-600 hover:text-blue-700 font-medium">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;