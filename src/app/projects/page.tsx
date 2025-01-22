import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

//TODO: (ET) Add correct image links to projects
//TODO: (ET) Deploy all projects to vercel and update live url
export default function ProjectsPage() {
  const projects = [
    {
      title: "Military Base Rideshare",
      description: "A ridesharing platform designed for military bases to connect personnel for safe and efficient transportation.",
      repo: "https://github.com/Younique98/military_base_rideshare",
      live: "https://military-base-rideshare.example.com",
      image: "/images/MilSpouse.png",
    },
    {
      title: "Milspouse Elevate",
      description: "A platform empowering military spouses by offering career-building resources and opportunities.",
      repo: "https://github.com/Younique98/milspouse-elevate",
      live: "https://milspouse-elevate.example.com",
      image: "/images/MilSpouse.png",
    },
    {
      title: "Windless Technologies Website",
      description: "The official company website for Windless Technologies, showcasing services, projects, and more.",
      repo: "https://github.com/Younique98/windless_technologies_company_website",
      live: "https://windless-technologies.example.com",
      image: "/images/MilSpouse.png",
    },
    {
      title: "Elasticsearch Blog",
      description: "A blog platform leveraging Elasticsearch for fast, full-text search and excellent content discovery.",
      repo: "https://github.com/Younique98/elastic-search-blog",
      live: "https://elastic-search-blog.example.com",
      image: "/images/MilSpouse.png",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={`${ project.title } preview`}
                width={800}
                height={400}
                className="rounded-md mb-4"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="secondary">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              </Button>
              <Button asChild>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
