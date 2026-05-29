import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import CapabilitiesBento from "@/components/CapabilitiesBento";
import ExecutionLogs from "@/components/ExecutionLogs";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AcademicFoundation from "@/components/AcademicFoundation";
import VerifiedCredentials from "@/components/VerifiedCredentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BootLoader from "@/components/BootLoader";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abu Bakar",
    url: "https://abubakarxdev-portfolio.vercel.app",
    image: "https://abubakarxdev-portfolio.vercel.app/operator.png",
    sameAs: ["https://github.com/abubakarxdev"],
    jobTitle: "Full-Stack Systems Engineer & DevSecOps",
    worksFor: {
      "@type": "Organization",
      name: "Pulse Matrix LLC",
    },
    description:
      "Professional portfolio of Abu Bakar. Full-Stack Systems Engineer specializing in secure API architectures, performant serverless workflows, and DevSecOps enterprise deployments.",
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-primary selection:bg-accent-green selection:text-black">
      {/* JSON-LD Structured Data for search engine rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Terminal Entry Loader */}
      <BootLoader />

      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex flex-col">
        {/* Immersive Hero Section */}
        <Hero />

        {/* Endless Tech Marquee Section */}
        <TechMarquee />

        {/* Capabilities Bento Section */}
        <CapabilitiesBento />

        {/* Career Execution Logs Section */}
        <ExecutionLogs />

        {/* Projects Showcase Section */}
        <ProjectsShowcase />

        {/* Academic Foundation Section */}
        <AcademicFoundation />

        {/* Verified Credentials Section */}
        <VerifiedCredentials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
