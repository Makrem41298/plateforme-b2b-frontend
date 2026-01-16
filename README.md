# Plateforme B2B – Frontend

This repository contains the **frontend** of the **Plateforme B2B** application.
It is a React-based platform connecting **Clients** and **Enterprises** for project management, offer negotiation, contracts, payments, and real-time communication.

---

## 🚀 Features

### 🏢 Enterprise Portal
- Dashboard with analytics and activity overview
- Browse projects posted by clients
- Create, update, and manage offers
- Create and view contracts
- Manage transactions and request withdrawals
- Manage enterprise profile and settings

### 👤 Client Portal
- Dashboard for projects and collaborations
- Create, update, and manage projects
- Review and respond to offers
- View contracts
- Handle payments (Success / Cancel)

### 🛠 Shared Features
- Authentication (Login, Register, Forgot Password, Email Verification)
- Real-time chat using **Pusher & WebSockets**
- Real-time notifications (**React Toastify**, **SweetAlert2**)

---

## 💻 Tech Stack

- **Core:** React 19, Vite
- **State Management:** Redux Toolkit, React Redux
- **Routing:** React Router DOM v7
- **UI:** Material UI (MUI), Emotion
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **Real-time:** Pusher JS, Laravel Echo
- **Charts:** Recharts
- **Icons:** Lucide React, MUI Icons

---

## ⚙️ Prerequisites

- Node.js v18+
- npm or yarn

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone [https://github.com/Makrem41298/plateforme-b2b-frontend.git](https://github.com/Makrem41298/plateforme-b2b-frontend.git)
cd plateforme-b2b-frontend
2. Install dependencies
Bash

npm install
# or
yarn install
▶️ Running the Application
1. Development Mode
Start the development server:

Bash

npm run dev
# or
yarn dev
2. Access the Application
Open your browser and navigate to: http://localhost:5173

🏗️ Production Build
To build the application for production:

Bash

npm run build
# or
yarn build

### 📝 Summary of Changes
1.  **Closed Code Blocks:** Added missing \`\`\` (backticks) to close the bash scripts in the Installation and Running sections.
2.  **Fixed Numbering:** Corrected the logic in the "Running the Application" section (changed "3. The application will run at" to "2. Access the Application").
3.  **Visual Separation:** Added horizontal rules (`---`) between major sections for better readability.

**Would you like me to help you create a template for the `.env` file (Environment Variables) that usually goes with this stack?**
