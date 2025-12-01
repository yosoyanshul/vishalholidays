# Vishal Holidays - The Zenith of Corporate Travel

A breathtaking, high-conversion landing page for a premium corporate tourism agency. Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 🌍 Deployment Guide (Vercel)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Steps:

1.  **Push to GitHub**:
    -   Initialize a git repository: `git init`
    -   Add files: `git add .`
    -   Commit: `git commit -m "Initial commit"`
    -   Create a new repo on GitHub and push.

2.  **Deploy on Vercel**:
    -   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **"Add New..."** -> **"Project"**.
    -   Import your GitHub repository.
    -   **Framework Preset**: Next.js (Auto-detected).
    -   **Build Command**: `next build` (Default).
    -   **Install Command**: `npm install` (Default).
    -   Click **Deploy**.

3.  **Custom Domain**:
    -   Once deployed, go to **Settings** -> **Domains**.
    -   Add your custom domain (e.g., `vishalholidays.com`).

## 🎨 Design System

-   **Colors**:
    -   `Obsidian` (#050b14): Backgrounds
    -   `Glacial Blue` (#64ffda): Accents/CTAs
    -   `Starlight` (#e6f1ff): Text
-   **Fonts**:
    -   Headings: `Playfair Display`
    -   Body: `Inter`

## 📁 Project Structure

```
/app
  layout.tsx       # Global layout & fonts
  page.tsx         # Main landing page
  globals.css      # Tailwind theme & base styles
/components
  /layout          # Navbar, Footer
  /sections        # Hero, Services, Destinations, etc.
  /ui              # Reusable atoms (Button, etc.)
/lib
  utils.ts         # Helper functions
  constants.ts     # Site data
```
