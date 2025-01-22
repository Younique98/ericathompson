import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

//TODO: (ET) Add correct image links to projects
//TODO: (ET) Deploy all projects to vercel and update live url
export default function ProjectsPage() {
  const projects = [
    {
      title: "Military Base Rideshare App",
      description:
        "A ridesharing platform designed for military bases to connect personnel for safe and efficient transportation.",
      repo: "https://github.com/Younique98/military_base_rideshare",
      live: "https://github.com/Younique98/military_base_rideshare/blob/main/README.md",
      image: "/images/military_ride_share_app.jpg",
    },
    {
      title: "Milspouse Elevate",
      description:
        "A platform empowering military spouses by offering career-building resources and opportunities.",
      repo: "https://github.com/Younique98/milspouse-elevate",
      live: "https://github.com/Younique98/milspouse-elevate/blob/main/README.md",
      image: "/images/MilSpouse.png",
    },
    {
      title: "Windless Technologies Website",
      description:
        "The official company website for Windless Technologies, showcasing services, projects, and more.",
      repo: "https://github.com/Younique98/windless_technologies_company_website",
      live: "https://github.com/Younique98/windless_technologies_company_website/blob/main/README.md",
      image: "/images/home_page_consulting_ windless_technologies.png",
    },
    {
      title: "Elasticsearch Blog",
      description:
        "A blog platform leveraging Elasticsearch for fast, full-text search and excellent content discovery.",
      repo: "https://github.com/Younique98/elastic-search-blog",
      live: "https://github.com/Younique98/elastic-search-blog/blob/main/README.md",
      image: "/images/elastic_search_walkthrough.png",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
 <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
 <div className="grid grid-cols-1 gap-12">
   {projects.map((project, index) => (
     <Card key={index} className="hover:shadow-lg transition-shadow duration-300 w-full">
       <CardHeader className="h-32">
         <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
         <CardDescription>{project.description}</CardDescription>
       </CardHeader>
       <CardContent className="h-[600px] flex items-center justify-center">
         <Image
           src={project.image}
           alt={`${project.title} preview`}
           width={800}
           height={600}
           className="rounded-md w-full h-full object-contain"
         />
       </CardContent>
       <CardFooter className="h-20 flex justify-between">
         <Button asChild variant="secondary">
           <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
         </Button>
         <Button asChild>
           <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
         </Button>
       </CardFooter>
     </Card>
   ))}
 </div>
</div>
    </div>
  );
}
