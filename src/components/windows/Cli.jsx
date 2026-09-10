import "./cli.scss";
import MacWindow from "./MacWindow.jsx";
import TerminalLib from "react-console-emulator";

const Terminal = TerminalLib.default || TerminalLib;

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () => `Hi! I'm Rahul 👋
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 A passionate Full-Stack Developer who loves crafting
                 clean, scalable, and user-friendly web applications.

                 I enjoy turning complex problems into elegant solutions,
                 and I'm always excited to learn new technologies!

                 Type 'skills' to see what I work with, or 'projects' to
                 see what I've built. 🚀`,
    },

    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () => `Technical Skills
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 🎨 Frontend     : React, Next.js, Tailwind CSS, SCSS, HTML5
                 ⚙️  Backend      : Node.js, Express.js, REST APIs, GraphQL
                 🗄️  Databases    : MongoDB, PostgreSQL, MySQL, Redis
                 🔧 Tools        : Git, GitHub, Docker, Webpack, Vite
                 ☁️  Cloud        : AWS, Vercel, Netlify, Heroku
                 🧪 Testing      : Jest, React Testing Library, Cypress
                 📦 Other        : Socket.io, Prisma, TypeScript, Linux`,
    },

    projects: {
      description: "View my projects",
      usage: "projects [number]",
      fn: (...args) => {
        const all = [
          {
            id: 1,
            name: "🛒 E-Commerce Platform",
            stack: "MERN Stack + Stripe",
            desc: "Full-featured shopping app with auth, payments & admin panel.",
            link: "https://github.com/rahul4work/ecommerce",
          },
          {
            id: 2,
            name: "💬 Real-time Chat App",
            stack: "React + Node.js + Socket.io",
            desc: "Live group & private chat with typing indicators and emoji support.",
            link: "https://github.com/rahul4work/chatapp",
          },
          {
            id: 3,
            name: "📊 Data Dashboard",
            stack: "React + Chart.js + REST API",
            desc: "Interactive analytics dashboard with dynamic charts and filters.",
            link: "https://github.com/rahul4work/dashboard",
          },
          {
            id: 4,
            name: "✅ Task Manager",
            stack: "Next.js + PostgreSQL + Prisma",
            desc: "Kanban-style task manager with drag & drop and team collaboration.",
            link: "https://github.com/rahul4work/taskmanager",
          },
          {
            id: 5,
            name: "🌐 Portfolio Terminal",
            stack: "React + react-console-emulator",
            desc: "This very terminal you're using right now!",
            link: "https://github.com/rahul4work/portfolio",
          },
        ];

        const num = parseInt(args[0]);
        if (!isNaN(num) && num >= 1 && num <= all.length) {
          const p = all[num - 1];
          return `Project #${p.id}: ${p.name}
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 Stack  : ${p.stack}
                 About  : ${p.desc}
                 GitHub : ${p.link}`;
        }

        return `My Projects
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ${all.map((p) => `  ${p.id}. ${p.name}\n     ${p.stack}\n     ${p.desc}`).join("\n\n")}

                💡 Tip: Type 'projects <number>' (e.g. 'projects 2') for more details.`;
      },
    },

    experience: {
      description: "View my work experience",
      usage: "experience",
      fn: () => `Work Experience
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      💼 Full Stack Developer @ TechStartup Inc.  (2023 - Present)
      • Built and maintained 3+ production React applications
      • Designed RESTful APIs with Node.js serving 10k+ daily users
      • Optimized DB queries, reducing load time by 40%

      💼 Frontend Developer @ WebAgency Co.       (2022 - 2023)
      • Developed pixel-perfect UIs from Figma designs
      • Integrated third-party APIs (Stripe, Twilio, Google Maps)
      • Collaborated in agile sprints with cross-functional teams

      💼 Freelance Developer                      (2021 - 2022)
      • Delivered 10+ client projects (landing pages, dashboards)
      • Worked directly with clients to define scope and timelines`,
    },

    education: {
      description: "View my education",
      usage: "education",
      fn: () => `Education
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 🎓 B.Tech in Computer Science
                 XYZ University, 2018 - 2022  |  GPA: 8.5/10

                 📜 Certifications
                 • AWS Certified Cloud Practitioner
                 • Meta Frontend Developer Certificate (Coursera)
                 • MongoDB Developer Path (MongoDB University)`,
    },

    contact: {
      description: "Get my contact information",
      usage: "contact",
      fn: () => `Get In Touch
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 📧 Email    : rahul@example.com
                 📱 Phone    : +91 98765 43210
                 📍 Location : Bangalore, India
                 💼 LinkedIn : linkedin.com/in/rahul4work
                 🐙 GitHub   : github.com/rahul4work
                 🌐 Website  : rahul4work.dev

                 I'm open to freelance projects & full-time opportunities!
                 Feel free to reach out — I usually respond within 24 hours. 😊`,
    },

    github: {
      description: "Open my GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/rahul4work", "_blank");
        return "🐙 Opening GitHub profile in a new tab...";
      },
    },

    linkedin: {
      description: "Open my LinkedIn profile",
      usage: "linkedin",
      fn: () => {
        window.open("https://linkedin.com/in/rahul4work", "_blank");
        return "💼 Opening LinkedIn profile in a new tab...";
      },
    },

    resume: {
      description: "Download my resume",
      usage: "resume",
      fn: () => {
        const link = document.createElement("a");
        link.href = "/rahul-resume.pdf"; // ← put your actual resume PDF path here
        link.download = "Rahul_Resume.pdf";
        link.click();
        return "📄 Downloading resume... Check your downloads folder!";
      },
    },

    social: {
      description: "View all my social links",
      usage: "social",
      fn: () => `Social Links
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 🐙 GitHub    : github.com/rahul4work
                 💼 LinkedIn  : linkedin.com/in/rahul4work
                 🐦 Twitter   : twitter.com/rahul4work
                 📸 Instagram : instagram.com/rahul4work
                 🌐 Portfolio : rahul4work.dev`,
    },

    whoami: {
      description: "Who are you?",
      usage: "whoami",
      fn: () => "You are a visitor to Rahul's portfolio. Welcome! 🎉",
    },

    date: {
      description: "Show current date and time",
      usage: "date",
      fn: () =>
        `📅 ${new Date().toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}  🕐 ${new Date().toLocaleTimeString("en-IN")}`,
    },

    joke: {
      description: "Hear a developer joke",
      usage: "joke",
      fn: () => {
        const jokes = [
          "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
          "How many programmers does it take to change a light bulb?\nNone — that's a hardware problem! 💡",
          "A SQL query walks into a bar, walks up to two tables and asks...\n'Can I join you?' 😄",
          "Why do Java developers wear glasses?\nBecause they don't C#! 👓",
          "I had a bug in my code and couldn't figure it out for hours.\nThen I explained it to a rubber duck... and the duck judged me. 🦆",
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      },
    },

    echo: {
      description: "Echo back any text you type",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
                          ┌──────────────────────────┐
                          🚀 Dev Terminal Initialized          
                          └──────────────────────────┘

                          Hey there, Explorer! 👋

                          You've just entered my digital workspace — a place where ideas turn into code, and code turns into experiences.

                          This isn't just a portfolio… it's a command-line journey through:
                          → who I am
                          → what I build
                          → and how I think 💡

                          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                          🧭 Available Commands:

                          • help        → Show all commands
                          • about       → Who am I?
                          • skills      → Tech stack & tools
                          • projects    → Things I've built
                          • experience  → My journey so far
                          • contact     → Let's connect

                          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                          ⚡ Tip: Start with 'help' or jump straight in.

                          System ready. Awaiting your command...

                          > _

  `;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="terminal-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"rahul4work:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
