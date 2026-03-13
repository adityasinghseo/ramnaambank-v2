# Shri Ram Naam Vishwa Bank — Web Application

Official website for **Shri Ram Naam Vishwa Bank**, built with React, Vite, TypeScript, TailwindCSS, and integrated with WordPress + WooCommerce REST API and Razorpay payment gateway.

---

## 🚀 Quick Start (After Cloning)

```sh
# Step 1: Clone the repository
git clone https://github.com/adityasinghseo/ramnaambank-v2.git

# Step 2: Navigate into the project directory
cd ramnaambank-v2

# Step 3: Install all dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The app will automatically be available at **http://localhost:3000** (or the next available port).

> ✅ The `.env` file is included in this private repo — no manual configuration required. All API keys are already set.

---

## 🔑 Environment Variables (Already Configured)

The `.env` file at the root of the project contains all necessary credentials:

| Variable | Purpose |
|---|---|
| `VITE_WP_API` | WordPress REST API base URL |
| `VITE_WC_API` | WooCommerce REST API base URL |
| `VITE_WC_CONSUMER_KEY` | WooCommerce consumer key (read access) |
| `VITE_WC_CONSUMER_SECRET` | WooCommerce consumer secret |
| `VITE_RAZORPAY_KEY_ID` | Razorpay live key ID (for online payments) |
| `VITE_RAZORPAY_KEY_SECRET` | Razorpay live key secret |

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **Data Fetching**: TanStack React Query + Axios
- **CMS/Backend**: WordPress + WooCommerce REST API
- **Payments**: Razorpay
- **State Management**: Zustand

---

## 📦 Build for Production

```sh
npm run build
```

Output will be in the `dist/` folder. Deploy the contents of `dist/` to your hosting server (e.g., Hostinger).

---

## 🔗 Live Domains

| Environment | URL |
|---|---|
| Live Website | https://shriramnaambank.com |
| WordPress Admin | https://admin.shriramnaambank.com |
