import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// TODO: (ET) Add correct image links to projects
// TODO: (ET) Deploy all projects to vercel and update live url
export default function ProjectsPage() {
  const projects = [
    {
      title: "Military Base Rideshare App",
      description:
        "A ridesharing platform designed for military bases to connect personnel for safe and efficient transportation.",
      repo: "https://github.com/Younique98/military_base_rideshare",
      details:
        "https://github.com/Younique98/military_base_rideshare/blob/main/README.md",
      image: "/images/military_ride_share_app.jpg",
    },
    {
      title: "Milspouse Elevate",
      description:
        "A platform empowering military spouses by offering career-building resources and opportunities.",
      repo: "https://github.com/Younique98/milspouse-elevate",
      details:
        "https://github.com/Younique98/milspouse-elevate/blob/main/README.md",
      image: "/images/MilSpouse.png",
    },
    {
      title: "Windless Technologies Website",
      description:
        "The official company website for Windless Technologies, showcasing services, projects, and more.",
      repo: "https://github.com/Younique98/windless_technologies_company_website",
      details:
        "https://github.com/Younique98/windless_technologies_company_website/blob/main/README.md",
      image: "/images/home_page_consulting_ windless_technologies.png",
    },
    {
      title: "Elasticsearch Blog",
      description:
        "A blog platform leveraging Elasticsearch for fast, full-text search and excellent content discovery.",
      repo: "https://github.com/Younique98/elastic-search-blog",
      details:
        "https://github.com/Younique98/elastic-search-blog/blob/main/README.md",
      image: "/images/elastic_search_walkthrough.png",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Projects</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          A sample of what I&apos;ve built and shipped, from military-community
          platforms to internal tooling.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col hover:border-cyan-500/50 transition-colors"
            >
              <div className="relative w-full aspect-video bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex gap-3">
                <Button asChild variant="secondary" className="flex-1">
                  <a
                    href={project.details}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
