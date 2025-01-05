import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
      />
      {project.featured && (
        <Badge className="absolute top-2 right-2 bg-yellow-500">
          Featured
        </Badge>
      )}
    </div>
    <CardHeader>
      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
      <CardDescription>{project.location}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-sm">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{project.completionDate}</span>
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        View Details
        <ArrowUpRight className="w-4 h-4" />
      </Button>
    </CardFooter>
  </Card>
);

const Projects2 = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: "Modern Security Gate System",
      description: "Custom-designed automated security gate with intercom integration for a luxury residential complex.",
      location: "Beverly Hills, CA",
      completionDate: "December 2023",
      tags: ["Security Gates", "Automation", "Residential"],
      imageUrl: "/api/placeholder/800/600",
      featured: true,
      category: "gates"
    },
    {
      id: 2,
      title: "Industrial Staircase Railing",
      description: "Contemporary stainless steel railings for a multi-story commercial building featuring LED integration.",
      location: "Seattle, WA",
      completionDate: "November 2024",
      tags: ["Railings", "Commercial", "LED Lighting"],
      imageUrl: "/api/placeholder/800/600",
      category: "railings"
    },
    {
      id: 3,
      title: "Fire-Rated Steel Door Installation",
      description: "90-minute fire-rated steel doors with panic hardware for a hospital wing.",
      location: "Houston, TX",
      completionDate: "October 2022",
      tags: ["Steel Doors", "Fire-Rated", "Healthcare"],
      imageUrl: "/api/placeholder/800/600",
      category: "doors"
    },
    {
      id: 4,
      title: "Decorative Garden Gates",
      description: "Custom-designed ornamental steel gates with artistic patterns for a botanical garden.",
      location: "Portland, OR",
      completionDate: "September 2024",
      tags: ["Gates", "Ornamental", "Public Space"],
      imageUrl: "/api/placeholder/800/600",
      category: "gates"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of custom steel doors, security gates, and architectural railings.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveFilter}>
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="doors">Doors</TabsTrigger>
            <TabsTrigger value="gates">Gates</TabsTrigger>
            <TabsTrigger value="railings">Railings</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <Filter className="mx-auto w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects2;