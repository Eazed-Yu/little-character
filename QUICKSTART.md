# Quick Start Guide - 快速入门

## For Users - 用户指南

### Download and Run - 下载并运行

**Coming Soon!** Pre-built binaries will be available in the [Releases](../../releases) page.

即将推出！预编译版本将在[发布页面](../../releases)中提供。

### Current Development Version - 当前开发版本

To run the development version:

运行开发版本：

```bash
# 1. Install Go (https://go.dev/dl/)
#    安装 Go

# 2. Install Node.js (https://nodejs.org/)
#    安装 Node.js

# 3. Install Wails CLI
#    安装 Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 4. Clone repository
#    克隆仓库
git clone https://github.com/Eazed-Yu/little-character.git
cd little-character

# 5. Install dependencies
#    安装依赖
cd frontend
npm install
cd ..

# 6. Run the app
#    运行应用
wails dev
```

## For Developers - 开发者指南

See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed development guide.

查看 [DEVELOPMENT.md](DEVELOPMENT.md) 获取详细开发指南。

## Features - 功能特性

### Basic Interactions - 基本交互

1. **Move the Pet - 移动宠物**
   - Click and drag anywhere on the pet
   - 点击并拖动宠物

2. **Talk to Pet - 与宠物对话**
   - Left-click on the pet
   - 左键点击宠物

3. **Open Menu - 打开菜单**
   - Right-click on the pet
   - 右键点击宠物

4. **Settings - 设置**
   - Right-click → Settings
   - 右键点击 → 设置

### Auto Behaviors - 自动行为

- Pet randomly moves around the screen
- 宠物会随机在屏幕上移动

- Blinking eyes animation
- 眨眼动画

- Walking animation when moving
- 移动时的行走动画

### Keyboard Shortcuts - 键盘快捷键

Currently, all interactions are through mouse/right-click menu.

目前所有交互都通过鼠标/右键菜单完成。

## Settings - 设置说明

### Auto Move - 自动移动
Enable/disable automatic movement around screen.

启用/禁用屏幕上的自动移动。

### Move Interval - 移动间隔
Set how often the pet moves (in seconds).

设置宠物移动的频率（以秒为单位）。

### Always on Top - 始终置顶
Keep pet above other windows.

将宠物保持在其他窗口之上。

### Show on Start - 启动时显示
Show pet when application starts.

应用启动时显示宠物。

## Troubleshooting - 故障排除

### Pet not showing - 宠物不显示

1. Check if window is minimized
   检查窗口是否被最小化

2. Try moving mouse to different screen areas
   尝试将鼠标移到不同的屏幕区域

3. Right-click system tray (if available) to show
   右键单击系统托盘（如可用）以显示

### Transparent background not working - 透明背景不工作

This feature requires:
此功能需要：

- Windows 10/11 with DWM enabled
  启用了 DWM 的 Windows 10/11

- macOS 10.14+ 
  macOS 10.14+

- Linux with compositor
  带合成器的 Linux

### Performance issues - 性能问题

1. Reduce move interval in settings
   在设置中减少移动间隔

2. Disable auto-move
   禁用自动移动

3. Close other heavy applications
   关闭其他占用资源的应用

## Uninstall - 卸载

### Windows
Simply delete the application folder.

直接删除应用程序文件夹。

### macOS
Drag application to Trash.

将应用程序拖到废纸篓。

### Linux
Remove the application directory.

删除应用程序目录。

## Support - 支持

- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)
- **Documentation**: See [README.md](README.md)

## What's Next - 接下来做什么

1. **Customize**: Try different settings
   自定义：尝试不同的设置

2. **Live2D**: Check [LIVE2D.md](LIVE2D.md) for adding custom models
   Live2D：查看 [LIVE2D.md](LIVE2D.md) 添加自定义模型

3. **Contribute**: See [CONTRIBUTING.md](CONTRIBUTING.md)
   贡献：查看 [CONTRIBUTING.md](CONTRIBUTING.md)

4. **Share**: Tell friends about this project!
   分享：告诉朋友们这个项目！

---

Enjoy your desktop pet! 享受你的桌面宠物！ 🐾
