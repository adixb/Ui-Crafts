export const InstallationData = [
    {
      id: 1,
      title: "React.js",
      Description: "Create React Js App with create-react-app",
      Command1: 'npx create-react-app my-app',
      Command2: 'cd my-app',
      Command3: 'npm run start',
      category: "React"
    },
    {
      id: 2,
      title: "Next.js",
      Description: 'Install Next.js with Create Next App',
      Command1: 'npx create-next-app@latest',
      Command2: 'cd my-app',
      Command3: 'npm run dev',
      Command4: `What is your project named? my-app
  Would you like to use TypeScript? No / Yes
  Would you like to use ESLint? No / Yes
  Would you like to use Tailwind CSS? No / Yes
  Would you like to use src/ directory? No / Yes
  Would you like to use App Router? (recommended) No / Yes
  Would you like to customize the default import alias (@/*)? No / Yes
  What import alias would you like configured? @/*`,
      category: "Next"
    },
    {
      id: 3,
      title: "Tailwind",
      Description: "Install Tailwind CSS with ReactJs or NextJs",
      Command1: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
      Command3: `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };`,
      Command4: `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;`,
      Command5: `export default function Home() {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>
  }`,
      category: "Tailwind"
    }
  ];
  