import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
// Preloader Component
// const Preloader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="relative">
//         {/* Outer circle */}
//         <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//         {/* Inner circle */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-8 h-8 border-4 border-blue-200 border-b-blue-600 rounded-full animate-spin"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// About2 Component
const Services = () => {
  
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Commercial High-Rise Railings",
      description: "Custom stainless steel railings for 50-story office building",
      specs: "316L Grade Stainless Steel, Mirror Finish",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Industrial Staircase",
      description: "Heavy-duty structural steel staircase for manufacturing facility",
      specs: "A572 Grade 50 Steel, Hot-Dip Galvanized",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Residential Glass Railings",
      description: "Modern glass and steel railings for luxury condominiums",
      specs: "12mm Tempered Glass with Stainless Steel Hardware",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Bridge Support Structure",
      description: "Steel support framework for pedestrian bridge",
      specs: "A992 Structural Steel, Powder Coated",
      image: "/api/placeholder/600/400"
    }
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Simulate a delay for loading
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading content:', error);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <Preloader />;
  } 

  return (
    <div className="min-h-screen bg-white">
      {/* Previous Hero Section remains the same */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src="/api/placeholder/1920/1080"
          alt="Steel fabrication facility" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Engineering Excellence</h1>
            <p className="text-xl max-w-2xl mx-auto">
              More than a decade of precision engineering, innovative design, and superior steel fabrication solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Capabilities Section - New */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Materials",
              items: ["Stainless Steel 304/316", "Mild Steel", "Aluminum", "Glass Integration"]
            },
            {
              title: "Processes",
              items: ["CNC Bending", "TIG/MIG Welding", "Powder Coating", "Laser Cutting"]
            },
            {
              title: "Finishes",
              items: ["Mirror Polish", "Brushed", "Powder Coated", "Hot-Dip Galvanized"]
            },
            {
              title: "Design Services",
              items: ["3D Modeling", "CAD Drafting", "Load Analysis", "Custom Solutions"]
            }
          ].map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Project Gallery Section - New */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform transition hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing Process Section - New */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Manufacturing Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            {
              step: "1",
              title: "Design & Engineering",
              description: "3D modeling and structural analysis"
            },
            {
              step: "2",
              title: "Material Selection",
              description: "Quality-tested raw materials"
            },
            {
              step: "3",
              title: "Fabrication",
              description: "Precision cutting and forming"
            },
            {
              step: "4",
              title: "Quality Control",
              description: "Multi-point inspection process"
            },
            {
              step: "5",
              title: "Installation",
              description: "Professional mounting and finishing"
            }
          ].map((process, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 text-white p-6 rounded-lg text-center h-full">
                <div className="text-2xl font-bold mb-3">Step {process.step}</div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm">{process.description}</p>
              </div>
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Previous sections remain the same */}
      {/* History Section */}
      {/* Services Section */}
      {/* Team Section */}
      {/* Certifications Section */}
      {/* CTA Section */}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-2">{selectedProject.description}</p>
              <p className="font-semibold">Technical Specifications:</p>
              <p className="text-gray-600">{selectedProject.specs}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;