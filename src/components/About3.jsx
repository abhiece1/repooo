import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';
import Preloader from './Preloader';

// Main About Component
const About3 = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    { label: 'Clients Served', value: 0, target: 1000, icon: Users },
    { label: 'Years Experience', value: 0, target: 15, icon: Target },
    { label: 'Awards Won', value: 0, target: 25, icon: Award },
    { label: 'Projects Completed', value: 0, target: 500, icon: Rocket }
  ]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2s loading time
        setLoading(false);
      } catch (error) {
        console.error('Error loading content:', error);
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            return { ...stat, value: stat.value + 1 };
          }
          return stat;
        })
      );
    }, 5); // Increment every 5ms for smooth animation

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-500 to-blue-700 size-auto">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Our story of steel is a tale of strength and transformation. From raw materials to stunning creations, we craft doors and railings that blend unyielding durability. Guided by passion, precision, and innovation, we forge more than steel—we forge trust, security, and a legacy of excellence in every piece we create. Rooted in innovation and craftsmanship, our journey is one of dedication—shaping steel to shape lives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 size-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}+</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-100 size-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, we’ve grown from a small startup to a leading force in our industry. Our team of passionate experts is driven by a shared commitment to innovation and delivering outstanding results. We’re dedicated to transforming industries and improving lives through technology and collaboration.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey is built on a foundation of excellence, where every project we take on reflects our commitment to quality, integrity, and lasting impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Core Values</h3>
              <div className="space-y-4">
                {[
                  { title: 'Excellence', description: 'We strive for excellence in everything we do.', icon: <Target className="w-6 h-6 text-blue-600" /> },
                  { title: 'Collaboration', description: 'We believe great things happen when we work together.', icon: <Users className="w-6 h-6 text-blue-600" /> },
                  { title: 'Innovation', description: 'We constantly push boundaries and embrace new ideas.', icon: <Rocket className="w-6 h-6 text-blue-600" /> },
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white size-auto">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', image: '/api/placeholder/300/300' },
              { name: 'Michael Chen', role: 'CTO', image: '/api/placeholder/300/300' },
              { name: 'Emma Davis', role: 'Head of Operations', image: '/api/placeholder/300/300' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About3;
