# Little Character - Desktop Pet 🐾

A desktop pet application built with Wails, featuring transparent windows, Live2D animations, and interactive features.

[中文文档](README.zh-CN.md)

## ✨ Features

- 🪟 **Transparent Frameless Window** - Pet floats freely on desktop
- 🎮 **Interactive** - Click pet to trigger dialogues and interactions
- 🚶 **Autonomous Movement** - Pet randomly moves around the screen
- 📍 **Draggable** - Drag the pet to any position
- 🎨 **Animations** - Includes idle, walking, and other animation states
- 🖱️ **Context Menu** - Right-click menu for quick actions
- 🔝 **Always on Top** - Stays above other windows

## 🚀 Quick Start

### Requirements

- Go 1.18+
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Install frontend dependencies
cd frontend
npm install
```

### Development

```bash
# Run in project root
wails dev
```

### Build

```bash
# Build production version
wails build

# Executable will be in build/bin/ directory
```

## 🎯 Features

### Current Features

1. **Transparent Window** - Pet displays with transparent background
2. **Click Interaction** - Random dialogue bubbles on click
3. **Context Menu** - Talk, random move, and quit options
4. **Auto Movement** - Periodically moves to random screen positions
5. **Dragging** - Move pet by dragging

### Planned Features

- [ ] Live2D character integration
- [ ] Multiple character switching
- [ ] Custom animations
- [ ] System tray integration
- [ ] Auto-start on boot
- [ ] More interactive behaviors
- [ ] Settings panel
- [ ] Character store

## 🏗️ Project Structure

```
little-character/
├── main.go              # Application entry
├── app.go               # Application logic
├── wails.json           # Wails configuration
├── go.mod               # Go dependencies
├── frontend/            # Frontend code
│   ├── src/
│   │   ├── App.tsx      # Main component
│   │   ├── App.css      # Styles
│   │   └── main.tsx     # Entry point
│   └── package.json     # Frontend dependencies
└── build/               # Build resources
    ├── appicon.png      # App icon
    └── windows/         # Windows resources
```

## 🛠️ Tech Stack

- **Backend**: Go + Wails v2
- **Frontend**: React + TypeScript + Vite
- **Styling**: CSS3 Animations
- **Build**: Wails Build System

## 📝 Competitive Analysis

This project references features from desktop pet applications:

1. **Shimeji** - Free movement, window climbing, multiple animations
2. **Desktop Goose** - Prank behaviors, user interaction
3. **Live2D Widget** - Live2D support, expression switching
4. **eSheep** - Simple & cute, low resource usage

### Advantages

- Modern web tech stack, easy to customize and extend
- Native app performance, low memory footprint
- Cross-platform support (Windows/macOS/Linux)
- Open source and customizable characters

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License

## 🎨 Roadmap

### Phase 1: Basic Features ✅
- [x] Project initialization
- [x] Transparent window
- [x] Basic interaction
- [x] Animation system

### Phase 2: Live2D Integration 🚧
- [ ] Integrate Live2D SDK
- [ ] Model loading system
- [ ] Action triggers

### Phase 3: Advanced Features 📋
- [ ] System tray
- [ ] Settings panel
- [ ] Auto-start
- [ ] Update system

### Phase 4: Content Expansion 💡
- [ ] Character store
- [ ] Custom skins
- [ ] Community sharing

---

💖 If you like this project, please give it a Star!

