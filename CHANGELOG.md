# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project structure with Wails v2
- Transparent, frameless window for desktop pet
- Basic pet character with CSS animations
- Draggable window functionality
- Random movement behavior
- Click interaction with message bubbles
- Right-click context menu
- Settings panel with preferences
  - Auto-move toggle
  - Move interval configuration
  - Always on top option
  - Show on start option
- Live2D component placeholder for future integration
- Window control methods (move, hide, show, quit)
- Comprehensive documentation:
  - README.md (English)
  - README.zh-CN.md (Chinese)
  - DEVELOPMENT.md (Development guide)
  - LIVE2D.md (Live2D integration guide)
  - CONTRIBUTING.md (Contribution guidelines)
- MIT License

### Features
- 🪟 Transparent window with no frame
- 🎮 Interactive pet (click for responses)
- 🚶 Autonomous movement around screen
- 📍 Drag to reposition
- 🎨 Smooth CSS animations (idle, walking, blinking)
- 🖱️ Context menu (talk, move, settings, quit)
- ⚙️ Settings panel
- 🔝 Always on top display

### Technical Stack
- Backend: Go 1.24+ with Wails v2.11.0
- Frontend: React 18 + TypeScript + Vite 3
- Build System: Wails Build
- Styling: CSS3 with animations

## [0.1.0] - 2026-02-06

### Added
- Initial prototype release
- Basic desktop pet functionality
- Project documentation and setup guides

---

## Version History

- **0.1.0** - Initial Prototype
  - Core desktop pet features
  - Transparent window
  - Basic interactions
  - Settings system
  - Documentation

## Planned Releases

### [0.2.0] - Live2D Integration
- [ ] Live2D SDK integration
- [ ] Model loading system
- [ ] Multiple character support
- [ ] Model marketplace/selector

### [0.3.0] - System Integration
- [ ] System tray support
- [ ] Auto-start on boot
- [ ] Multiple instance prevention
- [ ] Taskbar integration

### [0.4.0] - Advanced Features
- [ ] Character behavior AI
- [ ] Screen edge detection
- [ ] Window interaction (climb, sit)
- [ ] Time-based behaviors
- [ ] Event system

### [0.5.0] - Polish & Distribution
- [ ] Installer packages
- [ ] Auto-update system
- [ ] Performance optimizations
- [ ] Cross-platform testing
- [ ] Release builds

### [1.0.0] - Stable Release
- [ ] Full feature set
- [ ] Comprehensive testing
- [ ] Production-ready
- [ ] User documentation
- [ ] Community features

---

For detailed changes, see the [commit history](https://github.com/Eazed-Yu/little-character/commits/main).
