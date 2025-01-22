'use client';

import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    color?: string;
    icon?: React.ReactNode;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Fields",
    skills: [
      { name: "React", color: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20" },
      { name: "Next.js", color: "bg-black text-white border-white/20" },
      { name: "TypeScript", color: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20" },
      { name: "Flutter", color: "bg-[#02569B]/10 text-[#02569B] border-[#02569B]/20" },
      { name: "TailwindCSS", color: "bg-[#38B2AC]/10 text-[#38B2AC] border-[#38B2AC]/20" },
    ]
  },
  {
    title: "Backend Barn",
    skills: [
      { name: "Python", color: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20" },
      { name: "Django", color: "bg-[#092E20]/10 text-[#092E20] border-[#092E20]/20" },
      { name: "Go", color: "bg-[#00ADD8]/10 text-[#00ADD8] border-[#00ADD8]/20" },
      { name: "AWS", color: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20" },
      { name: "Terraform", color: "bg-[#7B42BC]/10 text-[#7B42BC] border-[#7B42BC]/20" }
    ]
  },
  {
    title: "Tool Shed",
    skills: [
      { name: "Docker", color: "bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/20" },
      { name: "Kubernetes", color: "bg-[#326CE5]/10 text-[#326CE5] border-[#326CE5]/20" },
      { name: "Jest", color: "bg-[#C21325]/10 text-[#C21325] border-[#C21325]/20" },
      { name: "Cypress", color: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20" },
      { name: "GitHub Actions", color: "bg-[#2088FF]/10 text-[#2088FF] border-[#2088FF]/20" }
    ]
  }
];

export function TechSkills() {
  return (
    <div className="space-y-12">
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="p-6 rounded-lg bg-[#1a1f2d] border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  className={`text-sm py-1 px-3 rounded-full ${skill.color}`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}