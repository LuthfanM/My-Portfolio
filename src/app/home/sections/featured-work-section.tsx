import { featuredProjects } from "@/helpers/constants/app-constants";
import ProjectCard from "../components/project-card";
import SectionHeader from "../components/section-header";

export default function FeaturedWorkSection() {
  return (
    <section id="portfolio" className="web3-section relative py-24">
      <div className="container relative z-10 mx-auto">
        <SectionHeader
          eyebrow="Featured work"
          title="Product work with real implementation detail"
        >
          Selected projects across AI mobile apps, geospatial dashboards,
          operational tools, and practical utilities.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
