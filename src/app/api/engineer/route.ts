import { NextResponse } from "next/server";

export async function GET() {
  const systemOperatorData = {
    _meta: {
      status: "200 OK",
      message: "Access granted. System telemetry operational.",
      timestamp: new Date().toISOString(),
    },
    identity: {
      name: "Abu Bakar",
      alias: "abubakarxdev",
      location: "Islamabad, Pakistan",
      roles: ["Full-Stack Systems Engineer", "DevSecOps Specialist"],
    },
    contact: {
      email: "abubakarxdev@gmail.com",
      github: "https://github.com/abubakarxdev",
      linkedin: "https://linkedin.com/in/abubakarxdev",
    },
    technical_stack: {
      frontend: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Python (FastAPI)", "PostgreSQL"],
      infrastructure: ["Linux (Ubuntu)", "Docker", "Kubernetes", "CI/CD", "Cloudflare"],
    },
    recent_deployments: [
      {
        id: "sys_bvt",
        project: "BVT Tech Architecture",
        role: "Systems Developer",
        status: "Deployed",
      },
      {
        id: "sys_neuro",
        project: "NeuroSentinel",
        role: "AI Healthcare Platform Developer",
        status: "Completed",
      },
    ],
    academic_foundation: {
      degree: "Bachelor of Software Engineering",
      institution: "COMSATS University Islamabad",
      graduated: 2025,
    },
  };

  // Return the JSON with pretty-print spacing for direct browser viewing
  return new NextResponse(JSON.stringify(systemOperatorData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allows anyone to fetch your API
    },
  });
}
