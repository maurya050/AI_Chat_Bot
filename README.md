# AI ChatBot 🤖

## Overview

AI ChatBot is a sophisticated, real-time conversational interface powered by OpenAI's GPT-4o-mini model. Built with modern React architecture, this application delivers an intuitive chat experience with persistent conversation management, emoji support, and a responsive design.

### 🌟 Key Features

- **Advanced AI Integration**: Powered by OpenAI's GPT-4o-mini for intelligent, context-aware responses
- **Multi-Chat Management**: Create, manage, and switch between multiple conversation threads
- **Persistent Storage**: Local storage implementation ensures conversations are preserved across sessions
- **Real-time Interaction**: Smooth typing indicators and instant message delivery
- **Rich Text Support**: Enhanced message formatting with bold text, numbered lists, and proper line breaks
- **Emoji Integration**: Full emoji picker support with @emoji-mart for expressive conversations
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and interactions

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Modern component-based architecture
- **Vite 7.1.2** - Next-generation frontend build tool
- **CSS3** - Custom styling with modern design principles
- **JavaScript ES6+** - Latest ECMAScript features

### Development Tools
- **ESLint 9.33.0** - Code quality and consistency
- **Terser** - JavaScript optimization and minification
- **Vite Build System** - Fast development and optimized production builds

### UI Components & Libraries
- **@emoji-mart/react** - Comprehensive emoji picker
- **@fortawesome/fontawesome-free** - Icon library
- **Boxicons** - Additional icon set
- **UUID** - Unique identifier generation

### External APIs
- **OpenAI GPT-4o-mini** - AI-powered conversation engine
- **OpenAI API** - RESTful integration for chat completions

### Deployment & Hosting
- **Vercel** - Serverless deployment platform
- **Production URL**: [ai-chat-bot-beta-peach.vercel.app](https://ai-chat-bot-beta-peach.vercel.app/)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**
- **OpenAI API Key** (required for AI functionality)

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

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   > **Note**: Obtain your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. **Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## 💡 Usage

### Basic Operation

1. **Starting a Chat**: Click the start button to begin your first conversation
2. **Sending Messages**: Type your message and press Enter or click the send button
3. **Creating New Chats**: Click the edit icon in the chat list to start a new conversation
4. **Switching Chats**: Click on any chat in the sidebar to switch between conversations
5. **Adding Emojis**: Click the emoji icon to open the picker and add emojis to your messages
6. **Deleting Chats**: Click the X button next to any chat to delete it

### Advanced Features

- **Keyboard Shortcuts**: Press Enter to send messages (Shift+Enter for new lines)
- **Auto-scroll**: Messages automatically scroll to the latest message
- **Persistent Data**: All conversations are saved locally and restored on page reload
- **Rich Formatting**: AI responses support bold text, lists, and proper formatting

## 📁 Project Structure

```
AI_Chat_Bot/
├── public/
├── src/
│   ├── components/
│   │   ├── ChatBotApp.jsx      # Main chat interface
│   │   ├── ChatBotApp.css      # Chat interface styles
│   │   ├── ChatBotStart.jsx    # Landing/start screen
│   │   └── ChatBotStart.css    # Start screen styles
│   ├── App.jsx                 # Root component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── package-lock.json
├── vercel.json               # Vercel deployment config
├── vite.config.js            # Vite build configuration
└── README.md
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.js`.

### ESLint Setup
Code quality is maintained with ESLint. Rules are defined in `eslint.config.js`.

### Vercel Deployment
Deployment configuration is managed through `vercel.json` for optimal production performance.

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots if applicable

### Code Standards

- **Code Style**: Follow ESLint rules and existing patterns
- **Commit Messages**: Use conventional commit format (`feat:`, `fix:`, `docs:`, etc.)
- **Testing**: Ensure all functionality works as expected
- **Documentation**: Update README and comments as needed

### Areas for Contribution

- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🔧 Performance optimizations
- 🧪 Testing implementation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **OpenAI** for providing the powerful GPT-4o-mini API
- **React Team** for the excellent framework
- **Vite Team** for the lightning-fast build tool
- **Vercel** for seamless deployment platform
- **Community Contributors** for their valuable input and improvements

## 📞 Support

For questions, issues, or feature requests:

- **GitHub Issues**: [Create an issue](https://github.com/maurya050/AI_Chat_Bot/issues)
- **Discussions**: Use GitHub Discussions for general questions
- **Live Demo**: [ai-chat-bot-beta-peach.vercel.app](https://ai-chat-bot-beta-peach.vercel.app/)

---

**Built with ❤️ by [maurya050](https://github.com/maurya050)**
