# 🖥️ macOS Portfolio

> A fully interactive macOS-inspired developer portfolio that turns my profile into a functional desktop experience.

🌐 **Live Demo:** [Coming Soon](#)

---

## 📸 Preview

![macOS Portfolio Preview](./public/preview.png)

---

## ✨ About The Project

This project is a personal portfolio designed to recreate the experience of using a macOS desktop directly inside the browser.

Instead of using a traditional portfolio layout with separate pages for About, Projects, Resume, and Contact, the entire portfolio is presented as an interactive desktop environment.

Users can interact with the menu bar, dock, application windows, external integrations, and a built-in terminal to explore my professional profile.

---

## 🚀 Features

### 🍎 macOS-Inspired Desktop

- macOS-style desktop interface
- Top navigation/menu bar
- Apple-style menu layout
- Dynamic date and time
- Wi-Fi status indicator
- Desktop wallpaper
- macOS-inspired dock
- Application-style windows
- Multiple applications can be opened and viewed independently

### 🐙 GitHub

The GitHub application provides quick access to my GitHub profile and projects.

### 📝 Notes

A Notes-style application containing my:

- Introduction
- Developer profile
- Skills
- Experience
- Projects
- Other professional information

### 📄 Resume

A built-in PDF viewer that allows visitors to view my resume directly inside the portfolio without leaving the website.

### 📅 Calendar

An integrated Google Calendar application for displaying my calendar directly within the portfolio environment.

### 🎵 Spotify

An embedded Spotify experience containing my selected playlist.

### ✉️ Mail

A mail application that allows visitors to quickly access my email address and contact me.

### 🔗 LinkedIn

Provides direct access to my LinkedIn profile.

### 💻 Terminal

One of the main interactive features of the portfolio.

The Terminal application provides a React-based command-line interface where visitors can interact with the portfolio using terminal-style commands.

---

## 🧩 Applications

| Application | Purpose |
|------------|---------|
| 🐙 GitHub | GitHub profile |
| 📝 Notes | Personal & professional information |
| 📄 Resume | Embedded resume PDF |
| 📅 Calendar | Google Calendar |
| 🎵 Spotify | Spotify playlist |
| ✉️ Mail | Email contact |
| 🔗 LinkedIn | LinkedIn profile |
| 💻 Terminal | Interactive React terminal |

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Integrations

- GitHub
- LinkedIn
- Google Calendar
- Spotify
- PDF Viewer

### Other

- React-based terminal interface
- Responsive desktop UI
- Component-based architecture

---

## 📂 Project Structure

```text
macos-portfolio/
│
├── public/
│   ├── icons/
│   ├── wallpapers/
│   └── preview.png
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Dock/
│   │   ├── MenuBar/
│   │   ├── Window/
│   │   └── ...
│   │
│   ├── apps/
│   │   ├── Github/
│   │   ├── Notes/
│   │   ├── Resume/
│   │   ├── Calendar/
│   │   ├── Spotify/
│   │   ├── Mail/
│   │   ├── LinkedIn/
│   │   └── Terminal/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md