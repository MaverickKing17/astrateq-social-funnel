# Astrateq Gadgets Pre-Launch Link-in-Bio & Trust Portal

A highly polished, premium, and responsive pre-launch and transparency portal for **Astrateq Gadgets**. This portal is designed to validate interest in a software-based **Driver Awareness Intelligence** concept for Canadian drivers. It emphasizes a strong privacy-first architecture, explicit trust transparency, and elegant user-centric design.

---

## 🌟 Key Features & Design Intent

- **Privacy-First Trust Card**: Features an extensive, highly structured section outlining Astrateq's core data principles, complete with custom high-contrast icons for immediate clarity:
  - No vehicle tracking or OBD connection required.
  - No insurance sharing or premium scoring under any circumstances.
  - No hardware dependency (no dashcams, scanners, or installation).
  - No advertisement-resale business models.
  - Simulation-only, pre-launch research focus.
  - Custom-designed for Canadian driver expectations and realities.
- **Pre-Launch Transparency Notice**: An eye-catching, amber-accented notice with a custom gradient background, official badge branding, and clear disclosures that explicitly identify the simulation context.
- **Intelligent Routing**: Fully updated action items and sub-links targeting `https://score.astrateqgadgets.com` with specific contextual query parameters (e.g., `?intent=context`, `?intent=privacy`) to seamlessly bridge user interest with live questionnaires.
- **Premium User Experience**: Styled using clean visual margins, high-density elements, smooth interaction feedback (`scale-[1.01]` translations on hover), and fluid entrance animations powered by `motion/react`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: TypeScript

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/           # Dynamic assets and high-resolution images
│   ├── components/       # Reusable, modular UI components
│   ├── App.tsx           # Primary application entry point & layout definition
│   ├── main.tsx          # React application bootstrapping
│   └── index.css         # Global stylesheets & Tailwind CSS integration
├── index.html            # Primary index page template
├── package.json          # Dependency declarations and build scripts
└── metadata.json         # Platform capabilities and application config
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system (v18+ recommended).

### Installation

Install all required project dependencies from `package.json`:

```bash
npm install
```

### Run the Development Server

Boot the local development server on port `3000`:

```bash
npm run dev
```

The portal will be accessible locally at `http://localhost:3000`.

### Build for Production

Compile and bundle the production assets inside the `/dist` directory:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 🛡️ Privacy & Compliance Declarations

This repository maintains zero backend dependencies or telemetry trackers to ensure full compliance with Canadian privacy expectations during the market validation study phase. No cookies or local storage objects are saved, and all outward routing to `score.astrateqgadgets.com` utilizes explicit query strings to customize the user journey rather than tracking pixels.
