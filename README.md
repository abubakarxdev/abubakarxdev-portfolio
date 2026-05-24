# // SYSTEM_ARCHITECTURE: PORTFOLIO_V2

> **Operator:** Abu Bakar | Software Engineer & DevSecOps
> **Status:** Production Deployed
> **Live Node:** [abubakarxdev-portfolio.vercel.app](https://abubakarxdev-portfolio.vercel.app)

A high-performance, cyber-minimalist personal portfolio engineered to showcase full-stack system development, backend API integrations, and DevSecOps capabilities. Designed with a strict "terminal/systems" aesthetic to move beyond standard web templates and demonstrate true engineering proficiency.

---

## ⚙️ Core Architecture

This repository is built on a modern, serverless edge stack optimized for speed, accessibility, and strict SEO precision.

* **Framework:** Next.js (App Router) / React
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Deep Obsidian & Terminal Green palette)
* **Motion & Physics:** Framer Motion (System boot sequences, scroll reveals, & micro-interactions)
* **Serverless API:** Resend SDK (Encrypted contact transmissions)
* **Infrastructure:** Vercel Edge Network

---

## 🚀 Advanced Protocols & Features

This system integrates several advanced engineering features that move it beyond a standard static portfolio:

* **Protocol 1: Interactive Command Terminal (Easter Egg)**
  * A globally accessible, hidden CLI overlay triggered by `Cmd + K` (or `Ctrl + K`).
  * Allows users to navigate the site, download files, and query data using standard Linux commands (`whoami`, `cd`, `cat`).
* **Protocol 2: Public Resume API Endpoint**
  * A serverless Next.js `GET` route located at `/api/engineer`.
  * Exposes professional telemetry, credentials, and project history as strictly formatted, CORS-enabled JSON for programmatic consumption by recruiters and automated systems.
* **Protocol 3: Simulated System Telemetry**
  * A persistent, real-time widget simulating active edge node latency, uptime, and system status to reinforce the DevSecOps aesthetic.
* **System Resilience & Error Handling**
  * Custom `not-found.tsx` for unreachable nodes.
  * Global React Error Boundaries (`error.tsx`) to catch runtime exceptions and allow secure component reboots without full page reloads.
  * API failure fallbacks in the cryptographic dispatch form.

---

## 💻 Local Initialization

To boot this architecture on your local node:

**1. Clone the repository**
```bash
git clone git@github.com:abubakarxdev/abubakarxdev-portfolio.git
cd abubakarxdev-portfolio
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Environment Variables**

Create a `.env.local` file in the root directory and add your Resend API key for the transmission module:
```env
RESEND_API_KEY=your_resend_api_key_here
```

**4. Boot the development server**
```bash
npm run dev
```

Navigate to `http://localhost:3000` to access the local node.

---

## 🔒 Security & Deployment

This application is strictly configured for edge deployment via Vercel. All environmental variables must be injected into the Vercel deployment dashboard prior to building. The source code utilizes strict `IdentitiesOnly` SSH routing for secure repository updates.

---

> `// END_OF_FILE`
