Markdown

# Plateforme B2B - Frontend

This is the frontend repository for the **Plateforme B2B** application. It is a React-based platform designed to connect **Clients** and **Enterprises**, facilitating project management, contract negotiation, and real-time communication.

## 🚀 Features

The application is divided into two main portals: **Client** and **Enterprise**, with shared functionality for authentication and communication.

### 🏢 Enterprise Portal
- **Dashboard:** Analytics and overview of activities.
- **Project Browsing:** View available projects listed by clients.
- **Offer Management:** Create, update, and manage offers/bids on projects.
- **Contract Management:** Create and view contracts.
- **Financials:** Manage transactions and request withdrawals.
- **Profile & Settings:** Manage enterprise profile and account settings.

### 👤 Client Portal
- **Dashboard:** Overview of posted projects and ongoing activities.
- **Project Management:** Create, update, and list projects.
- **Offer Review:** View and respond to offers received from enterprises.
- **Contract Viewing:** Access and review contracts.
- **Payments:** Payment processing (Success/Cancel flows).

### 🛠 Shared Features
- **Authentication:** Secure Login, Registration, Forgot Password, and Email Verification for both user types.
- **Real-time Chat:** Inbox and conversation system powered by Pusher/Websockets.
- **Notifications:** Real-time alerts using React Toastify and SweetAlert2.

## 💻 Tech Stack

- **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/), React Redux
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **UI Framework:** [Material UI (MUI)](https://mui.com/) & Emotion
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Real-time:** [Pusher JS](https://pusher.com/), Laravel Echo
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** Lucide React, MUI Icons

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd plateforme-b2b-frontend
Install dependencies:

Bash

npm install
Environment Setup: Create a .env file in the root directory and configure your environment variables (e.g., API base URL, Pusher keys).

Extrait de code

VITE_API_BASE_URL=http://localhost:8000/api
VITE_PUSHER_APP_KEY=your_pusher_key
VITE_PUSHER_CLUSTER=your_pusher_cluster
▶️ Running the App
Development Server: To start the application in development mode with Hot Module Replacement (HMR):

Bash

npm run dev
The app will generally run at http://localhost:5173.

Production Build: To build the application for production:

Bash

npm run build
Preview Production Build: To locally preview the production build:

Bash

npm run preview
Linting: To run ESLint and check for code quality issues:

Bash

npm run lint
📂 Project Structure
Plaintext

src/
├── Auth/              # Authentication pages (Login, Register) for Client/Enterprise
├── assets/            # Static assets (images, svgs)
├── components/        # Reusable UI components (Tables, Loaders, Inputs)
├── hooks/             # Custom React hooks (e.g., useReduxHooks)
├── layouts/           # Layout wrappers (Sidebar, Header)
├── pages/             # Main application pages
│   ├── contract/      # Contract management pages
│   ├── dashboard/     # Dashboard views
│   ├── inbox/         # Chat and messaging
│   ├── offer/         # Offer management
│   ├── project/       # Project creation and listing
│   ├── transaction/   # Financial pages
│   └── ...
├── redux/             # Redux slices and store configuration
├── services/          # API services, Axios instances, and Context providers
├── Routes/            # Routing configuration and Route Guards
└── main.jsx           # Entry point
🤝 Contributing
Fork the repository.

Create a new feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.
