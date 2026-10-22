# Challenge Management App (Manager Dashboard)

A manager dashboard application built with **Next.js (App Router)** and **TypeScript** designed for platform administrators to manage coding challenges with full CRUD capabilities (Create, Read, Update, Delete). The backend operations are simulated using **json-server** as a RESTful mock API.

---

## Features

- **Authentication (Sign In & Sign Up):**
  - Form validation with **React Hook Form** and **Zod** (email format, minimum password length, name length).
  - Clean authentication pages with routing between Sign In and Sign Up.
- **Challenge Dashboard:**
  - Responsive table displaying challenge title, category, difficulty level, and creation date.
  - Interactive actions for each challenge: **Edit** and **Delete**.
  - Server actions integrated with `revalidatePath` and toast notifications for real-time feedback.
- **Challenge Creation & Editing (`ChallengeForm`):**
  - **Split-column layout**:
    - **Left column:** Challenge title, category, difficulty level (`Easy`, `Moderate`, `Hard`), and interactive Markdown previewer using `react-simplemde-editor`.
    - **Right column:** Function name input, CodeMirror code editor supporting JavaScript (`js`) and Python (`py`), and configurable editor font size.
  - **Test Case Management:**
    - Dynamically add and remove test cases.
    - Configurable properties per test case: input type (`number` | `string`), argument name, test value, expected output, and weight (0 to 1).
- **State Management & Feedback:**
  - Centralized **Redux Toolkit** state for global code editor settings (language and font size) and authentication state.
  - Modern toast alerts via **Sonner** / Shadcn UI for action feedback (success and error states).

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, Server Actions)
- **Language:** TypeScript
- **Styling & UI:** Tailwind CSS, Shadcn UI / Base UI, Lucide Icons
- **State Management:** Redux Toolkit & React Redux
- **Forms & Validation:** React Hook Form, Zod, `@hookform/resolvers`
- **Markdown Editor:** EasyMDE / `react-simplemde-editor`
- **Code Editor:** `@uiw/react-codemirror` with `@codemirror/lang-javascript` and `@codemirror/lang-python`
- **Mock REST API:** `json-server`
- **Notifications:** Sonner

---

## Architecture & Ports

To prevent port collisions, the services are configured as follows:

| Service | Port | URL | Notes |
| :--- | :--- | :--- | :--- |
| **Next.js App** | `8080` | `http://localhost:8080` | Configured via `next dev -p 8080` |
| **JSON Server** | `3000` | `http://localhost:3000` | Watches `db.json` |

---

## Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or later) installed.

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory (or copy from `.env.example`):

```bash
cp .env.example .env
```

Ensure `API_URL` points to your `json-server` instance:

```ini
API_URL=http://localhost:3000
```

### 4. Running the Application

You will need **two terminal windows**:

#### Terminal 1: Start JSON Server (Mock Backend)

```bash
npm run server
```
*(Runs `json-server --watch db.json --port 3000` serving the REST API at `http://localhost:3000/challenges`)*

#### Terminal 2: Start Next.js Development Server

```bash
npm run dev
```
*(Runs Next.js on port 8080)*

Once both are running, open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Available Scripts

In the project root, you can run:

- `npm run dev`: Starts the Next.js development server on port `8080`.
- `npm run server`: Starts the `json-server` mock REST API on port `3000` with hot-reload watching `db.json`.
- `npm run build`: Compiles and builds the Next.js app for production.
- `npm run start`: Runs the built production app on port `8080`.
- `npm run lint`: Runs ESLint across the codebase.

---

## Project Structure

```text
challenge_management_app/
├── actions/
│   └── challenges.ts           # Next.js Server Actions (fetch, create, update, delete)
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx          # Split banner layout for authentication
│   │   ├── sign_in/page.tsx    # Sign In page with Zod validation
│   │   └── sign_up/page.tsx    # Sign Up page with Zod validation
│   ├── (main)/
│   │   ├── layout.tsx          # Main application layout with Navigation Bar
│   │   ├── page.tsx            # Main entry / landing
│   │   └── challenges/
│   │       ├── page.tsx        # Challenges Dashboard
│   │       ├── new/page.tsx    # Create new challenge page
│   │       └── [id]/
│   │           ├── page.tsx    # Challenge overview / detail view
│   │           └── edit/page.tsx # Edit challenge page
│   ├── globals.css             # Tailwind & theme variables
│   └── layout.tsx              # Root HTML & font layout
├── components/
│   ├── ChallengeForm.tsx       # Reusable Create & Edit challenge form
│   ├── ChallengeOverview.tsx   # Markdown & test case viewer for challenge
│   ├── ChallengesList.tsx      # Shadcn table displaying challenge rows
│   ├── CreateChallengeButton.tsx # Navigation link to /challenges/new
│   ├── DeleteChallengeButton.tsx # Server-action-triggered delete button with toast
│   ├── EditChallengeButton.tsx   # Navigation link to /challenges/[id]/edit
│   ├── NavBar.tsx              # Top navigation bar with logo, links & logout
│   └── ui/                     # Reusable Shadcn UI primitives (button, table, input, sonner)
├── db.json                     # JSON Server mock database
├── types/
│   └── challenge.ts            # TypeScript interfaces (Challenge, ChallengeInput, tests)
├── .env.example                # Example environment variables
├── package.json
└── tsconfig.json
```
