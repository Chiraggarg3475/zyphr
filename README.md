# ⚡ Zyphr — AI-Powered Code Sandbox & Developer Workspace

Zyphr is a **next-generation AI-powered code workspace** built with **Next.js 15**, integrating secure authentication, isolated code execution, background automation, and analytics into one seamless platform.
Designed for modern developers, it provides an interactive, cloud-ready environment for running, managing, and analyzing code projects — all with AI assistance.

---

## 🚀 Features

✅ **AI Sandbox (E2B)** — Safely execute user or AI-generated code inside isolated Docker sandboxes.
✅ **Clerk Authentication** — Secure login, signup, and session management with social OAuth support.
✅ **Project Workspace** — Multi-file project environment with code viewer, tree view, and AI messaging.
✅ **Syntax Highlighting** — Integrated with Prism.js for real-time readable code blocks.
✅ **tRPC APIs** — Type-safe client-server communication with end-to-end validation.
✅ **Prisma ORM + PostgreSQL** — Relational data modeling with migration management.
✅ **Inngest Background Jobs** — Event-driven processing for AI executions and heavy workloads.
✅ **Analytics Dashboard** — Usage tracking and insights using Recharts and rate limiting.
✅ **Responsive UI/UX** — Tailwind CSS, Radix UI, and theme toggling for a premium experience.

---

## 🧠 Tech Stack Overview

| Layer                  | Technology                                                 |
| ---------------------- | ---------------------------------------------------------- |
| **Frontend**           | Next.js 15, React 19, Tailwind CSS, Radix UI, Lucide Icons |
| **Backend**            | tRPC, Inngest, Next.js API Routes                          |
| **Database**           | Prisma ORM + PostgreSQL                                    |
| **Authentication**     | Clerk                                                      |
| **AI Sandbox**         | E2B Code Interpreter                                       |
| **Validation & State** | Zod, React Query, React Hook Form                          |
| **Analytics**          | Recharts, rate-limiter-flexible                            |
| **Build & Dev Tools**  | TypeScript, ESLint, TurboPack                              |

---

## 🧩 Project Structure

```
zyphr/
├── .env / .env.example         # Environment variables
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies & scripts
├── prisma/                     # Prisma ORM setup
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Versioned DB migrations
├── sandbox-templates/          # E2B sandbox configurations
│   └── nextjs/                 # Docker & TOML configs for isolated execution
├── src/
│   ├── app/                    # Next.js App Router (pages, routes)
│   │   ├── (home)/             # Public site: Home, Pricing, Auth
│   │   ├── projects/           # Project workspace UI
│   │   ├── api/                # tRPC & Inngest APIs
│   ├── components/             # Core + ShadCN UI components
│   ├── modules/                # Feature modules (projects, messages, usage)
│   ├── inngest/                # Inngest client & async handlers
│   ├── lib/                    # Database & backend utilities
│   ├── trpc/                   # tRPC setup (client, server, routers)
│   ├── middleware.ts           # Auth & request middleware
│   ├── prompt.ts               # AI system prompts
│   └── types.ts                # Shared TypeScript types
├── public/                     # Static assets
└── tsconfig.json               # TypeScript config
```

---

## 🧭 System Architecture

```
                      ┌──────────────────────────────┐
                      │         Frontend UI          │
                      │ Next.js + Tailwind + Radix   │
                      └────────────┬─────────────────┘
                                   │
                         Clerk Auth + tRPC Calls
                                   │
                                   ▼
            ┌────────────────────────────────────────────┐
            │                Backend Layer               │
            │   tRPC + Inngest + Prisma + E2B Sandbox    │
            └────────────────┬───────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐   ┌────────▼────────┐   ┌────────▼──────────┐
│ Clerk Auth    │   │ Inngest Engine  │   │ E2B Sandbox       │
│ User Sessions │   │ Background Jobs │   │ AI Code Execution │
└───────┬───────┘   └────────┬────────┘   └────────┬──────────┘
        │                    │                    │
        ▼                    ▼                    ▼
┌────────────────┐   ┌────────────────────┐   ┌──────────────────┐
│ Prisma ORM     │   │ Background Events  │   │ Code Output Store│
│ PostgreSQL DB  │   │ Triggers, AI Tasks │   │ Logs, Fragments  │
└────────────────┘   └────────────────────┘   └──────────────────┘
```

### 🔄 Data Flow

1️⃣ **User Login/Signup** → Authenticated via Clerk.
2️⃣ **Frontend Action** → Sends request through tRPC client.
3️⃣ **Server Procedure (tRPC)** → Validated with Zod, interacts with Prisma.
4️⃣ **AI Execution** → Offloaded to Inngest & E2B sandbox.
5️⃣ **Result Returned** → Stored in DB → Displayed on UI via React Query.

---

## 🧱 Database Schema (Prisma)

| Model               | Description                             |
| ------------------- | --------------------------------------- |
| **User**            | Authenticated user, linked via Clerk ID |
| **Project**         | Stores user projects and metadata       |
| **MessageFragment** | Stores AI messages or code fragments    |
| **Usage**           | Tracks API/AI token usage per user      |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Chiraggarg3475/zyphr.git
cd zyphr
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment

Create a `.env` file with required credentials:

```bash
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-key"
CLERK_SECRET_KEY="your-clerk-secret"
E2B_API_KEY="your-e2b-key"
INNGEST_API_KEY="your-inngest-key"
```

### 4️⃣ Run the App

```bash
npm run dev
```

Access at **[http://localhost:3000](http://localhost:3000)**

---

## 📊 Analytics & Monitoring

* 📈 **Usage tracking** with Prisma + rate-limiter-flexible.
* 📊 **Data visualization** using Recharts.
* 🔒 **Secure async execution** using Inngest events and sandbox limits.

---

## 🔮 Future Enhancements

* 🔹 Real-time collaborative editing (WebSocket integration)
* 🔹 GitHub repository sync
* 🔹 AI assistant for debugging and refactoring
* 🔹 Dedicated container execution for each project

---

## 👨‍💻 Author

**Chirag Garg**
B.Tech CSE @ Thapar Institute of Engineering & Technology, Patiala
Building intelligent, scalable products at the intersection of **AI, IoT, and Cloud**.

📧 **Email:** [gargchirag2020@gmail.com](mailto:gargchirag2020@gmail.com)
📞 **Phone:** +91 7626032325
🔗 **GitHub:** [Chiraggarg3475](https://github.com/Chiraggarg3475)
💼 **LinkedIn:** [linkedin.com/in/chiragg3475](https://www.linkedin.com/in/chiragg3475/)

---

## 📜 License

Licensed under the **MIT License**.
