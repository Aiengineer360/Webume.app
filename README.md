# 📄 Webume.app — Resume → Portfolio Website Generator

Webume.app transforms your **LinkedIn PDF or Resume** into a fully functional **portfolio website** in the style of LinkedIn. Users can:

* Upload their resume (LinkedIn PDF or custom).
* Automatically generate a LinkedIn-inspired portfolio website.
* Edit portfolio entities (skills, projects, links).
* Customize links and profile sections.
* Publish/unpublish the portfolio instantly.

<img width="386" height="215" alt="image" src="https://github.com/user-attachments/assets/37e4475b-2b51-4eaf-9ff3-2124385e7546" />

---

## 🚀 Features

* 🔹 **PDF to Portfolio Conversion** – Convert resumes into a live website.

<img width="749" height="493" alt="image" src="https://github.com/user-attachments/assets/6c4c29a7-02fb-47f1-9e9c-6da166426897" />

* 🔹 **LinkedIn-Inspired Theme** – Clean, professional design.

  <img width="710" height="513" alt="image" src="https://github.com/user-attachments/assets/a35e95fa-e1c3-491d-bd12-a9cb29ed480f" />

* 🔹 **Editing Support** – Add/remove entities, update links manually.

  <img width="709" height="574" alt="image" src="https://github.com/user-attachments/assets/d512224f-9b4c-4c4e-a1cc-262d80b6bed0" />

  <img width="702" height="573" alt="image" src="https://github.com/user-attachments/assets/dbcb4bd4-94fb-4ac8-b087-75d6db73096d" />

* 🔹 **Publishing System** – Publish, unpublish, and re-publish with one click.

<img width="1130" height="672" alt="image" src="https://github.com/user-attachments/assets/93d2e6bf-a094-46fc-9fbb-e4f8490b2619" />
  
* 🔹 **Custom Links** – Update portfolio link.

---


## 🛠️ Tech Stack

* **Frontend**: [Next.js](https://nextjs.org/)
* **File Storage**: [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
* **Database / Caching**: [Upstash Redis](https://upstash.com/)
* **AI Processing**: [Together AI](https://www.together.ai/)
* **Authentication**: [Clerk](https://clerk.com/)
* **Monitoring / Analytics**: [Helicone](https://helicone.ai/)

---

## 🔑 Environment Variables

Add the following to your `.env.local` file:

```bash
# Vercel Blob
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"

# Upstash Redis
UPSTASH_REDIS_REST_URL="your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"

# Together AI
TOGETHER_API_KEY="your-together-api-key"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Helicone
HELICONE_API_KEY="your-helicone-api-key"
```

---

## 🔗 Setup Guides for Accounts

### 1. **Vercel Blob (File Storage)**

* Sign up: [https://vercel.com/signup](https://vercel.com/signup)
* Create a project → Enable **Blob Storage** in dashboard.
* Generate token: [Vercel Blob Tokens](https://vercel.com/docs/storage/vercel-blob/quickstart).

### 2. **Upstash Redis (Database / Cache)**

* Sign up: [https://upstash.com](https://upstash.com)
* Create a Redis Database → Copy **REST URL** + **REST TOKEN**.
* Docs: [Upstash Quickstart](https://upstash.com/docs/redis/overall/getstarted).

### 3. **Together AI (AI Models)**

* Sign up: [https://www.together.ai](https://www.together.ai)
* Generate API Key from dashboard.
* Docs: [Together AI API](https://docs.together.ai/docs).

### 4. **Clerk (Authentication)**

* Sign up: [https://clerk.com](https://clerk.com)
* Create an Application → Copy **Publishable Key** + **Secret Key**.
* Docs: [Clerk Next.js Guide](https://clerk.com/docs/nextjs).

### 5. **Helicone (Monitoring)**

* Sign up: [https://helicone.ai](https://helicone.ai)
* Create Project → Get **Helicone API Key**.
* Docs: [Helicone Setup](https://docs.helicone.ai).

---

## ▶️ Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Aiengineer360/Webume.app
   cd Webume.app
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```
3. Create `.env.local` and add all environment variables.
4. Start development server:

   ```bash
   pnpm run dev
   ```
5. Open: [http://localhost:3000](http://localhost:3000)

---
💼 “Showcase your career, the Webume way.” 
