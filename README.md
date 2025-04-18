# Personal Portfolio

A modern and responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- Responsive design
- Smooth animations with Framer Motion
- Dynamic GitHub projects integration
- Interactive skill cards
- Clean and modern UI
- Dark theme

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Octokit (GitHub API)
- React Icons

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your GitHub token:
```env
VITE_GITHUB_TOKEN=your_github_token_here
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── About.tsx
│   ├── DragCards.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Project.tsx
│   ├── ProjectCard.tsx
│   └── Skills.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🔧 Configuration

- TypeScript configuration in `tsconfig.json`
- Vite configuration in `vite.config.ts`
- ESLint configuration in `eslint.config.js`

## 📝 License

This project is open source and available under the [MIT License](./LICENSE).