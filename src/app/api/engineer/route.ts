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
    verified_credentials: [
      {
        id: "582fc86fb977",
        title: "IBM Cloud Essentials V3",
        issuer: "IBM",
        date: "Jan 2025",
        verification_link: "https://courses.cognitiveclass.ai/certificates/582fc86fb9774c0eae3cac3652286587",
      },
      {
        id: "UC-47b4a32a",
        title: "Professional Diploma in Software Testing",
        issuer: "MTF Institute",
        date: "Feb 2025",
        verification_link: "https://www.udemy.com/certificate/UC-47b4a32a-93d8-4a5a-b13a-44047235f274/",
      },
      {
        id: "UC-f726fbc0",
        title: "Practical Next.js & React",
        issuer: "Udemy",
        date: "Jan 2025",
        verification_link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f726fbc0-d1bb-480d-b0d1-535e03027558.jpg",
      },
      {
        id: "0f03b9e7",
        title: "Introduction to Cyber Security",
        issuer: "HP",
        date: "Dec 2024",
        verification_link: "https://api.life-global.org/learning/api/certificates/0f03b9e7-886c-4d66-8e94-f87db3cf4470",
      }
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
