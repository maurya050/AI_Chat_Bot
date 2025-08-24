# 🤖 AI Chat Bot

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://ai-chat-bot-seven-woad.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)](https://vercel.com/)

An intelligent chatbot powered by AI for natural language conversations and automated responses. Built with React and modern web technologies, featuring a sleek UI with emoji support and real-time chat functionality.

## 🚀 Live Preview

**[👉 View Live Demo](https://ai-chat-bot-seven-woad.vercel.app/)**

## 📑 Table of Contents

- [Features](#-features)
- [Demo Screenshots](#-demo-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🤖 **AI-Powered Conversations** - Intelligent responses using advanced AI models
- 💬 **Real-time Chat Interface** - Smooth and responsive messaging experience
- 😊 **Emoji Support** - Rich emoji picker for expressive conversations
- 🎨 **Modern UI Design** - Clean and intuitive user interface
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 💾 **Local Storage** - Conversation history persistence
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🔧 **Modular Components** - Well-structured React component architecture

## 📸 Demo Screenshots

> 🚧 *Screenshots coming soon - visit the [live demo](https://ai-chat-bot-seven-woad.vercel.app/) to see the application in action!*

## 🛠 Tech Stack

### Frontend
- **React** (18.2.0) - UI library for building user interfaces
- **Vite** (7.1.2) - Next-generation frontend build tool
- **CSS3** - Custom styling and responsive design
- **JavaScript/JSX** - Modern JavaScript with React syntax

### Dependencies
- **@emoji-mart/react** - Emoji picker component
- **@fortawesome/fontawesome-free** - Icon library
- **boxicons** - Additional icon set
- **uuid** - Unique identifier generation
- **react-dom** - React DOM rendering

### Development Tools
- **ESLint** - Code linting and formatting
- **Terser** - JavaScript minification
- **Vite Plugins** - React support and optimizations

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub Actions** - CI/CD pipeline

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maurya050/AI_Chat_Bot.git
   cd AI_Chat_Bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Setup

1. **Create environment file** (if needed)
   ```bash
   cp .env.example .env.local
   ```

2. **Configure API keys** (add your AI service API keys to the environment file)
   ```env
   VITE_AI_API_KEY=your_api_key_here
   VITE_AI_API_URL=your_api_endpoint_here
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📁 Project Structure

```
AI_Chat_Bot/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── vercel.json           # Vercel deployment config
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🚀 Deployment

This application is automatically deployed to Vercel. Every push to the main branch triggers a new deployment.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

### Environment Variables

Make sure to set up the following environment variables in your deployment platform:

- `VITE_AI_API_KEY` - Your AI service API key
- `VITE_AI_API_URL` - Your AI service endpoint URL

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Use ESLint for code formatting
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**maurya050**
- GitHub: [@maurya050](https://github.com/maurya050)
- Project Link: [https://github.com/maurya050/AI_Chat_Bot](https://github.com/maurya050/AI_Chat_Bot)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Vercel for seamless deployment
- All contributors and users of this project

---

⭐ **Star this repository if you found it helpful!** ⭐
