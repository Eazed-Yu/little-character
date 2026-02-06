# Little Character - 桌面宠物 🐾

基于 Wails 技术开发的桌面宠物应用，支持透明窗口、Live2D 动画和交互功能。

## ✨ 特性

- 🪟 **透明无边框窗口** - 宠物可以自由浮动在桌面上
- 🎮 **交互功能** - 点击宠物可以触发对话和互动
- 🚶 **自主移动** - 宠物会随机在屏幕上移动
- 📍 **拖拽支持** - 可以拖动宠物到任意位置
- 🎨 **动画效果** - 包含待机、行走等动画状态
- 🖱️ **右键菜单** - 提供快捷操作菜单
- 🔝 **置顶显示** - 始终在其他窗口上方显示

## 🚀 快速开始

### 环境要求

- Go 1.18+
- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
# 安装 Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 安装前端依赖
cd frontend
npm install
```

### 开发模式

```bash
# 在项目根目录运行
wails dev
```

### 构建应用

```bash
# 构建生产版本
wails build

# 构建后的可执行文件位于 build/bin/ 目录
```

## 🎯 功能说明

### 当前功能

1. **透明窗口显示** - 宠物以透明背景形式显示在桌面
2. **点击交互** - 点击宠物会随机显示对话气泡
3. **右键菜单** - 提供说话、随机移动、退出等选项
4. **自动移动** - 宠物会定时随机移动到屏幕其他位置
5. **拖拽功能** - 可以通过拖拽移动宠物位置

### 计划功能

- [ ] Live2D 角色集成
- [ ] 多角色切换
- [ ] 自定义动画
- [ ] 系统托盘集成
- [ ] 开机自启动
- [ ] 更多交互行为
- [ ] 设置面板
- [ ] 角色商店

## 🏗️ 项目结构

```
little-character/
├── main.go              # 应用入口
├── app.go               # 应用逻辑
├── wails.json           # Wails 配置
├── go.mod               # Go 依赖
├── frontend/            # 前端代码
│   ├── src/
│   │   ├── App.tsx      # 主应用组件
│   │   ├── App.css      # 样式文件
│   │   └── main.tsx     # 入口文件
│   └── package.json     # 前端依赖
└── build/               # 构建资源
    ├── appicon.png      # 应用图标
    └── windows/         # Windows 资源
```

## 🛠️ 技术栈

- **后端**: Go + Wails v2
- **前端**: React + TypeScript + Vite
- **样式**: CSS3 动画
- **构建**: Wails Build System

## 📝 竞品分析

本项目参考了以下桌面宠物应用的特性：

1. **Shimeji** - 自由移动、爬窗口、多种动画
2. **Desktop Goose** - 恶作剧行为、用户交互
3. **Live2D Widget** - Live2D 支持、表情切换
4. **eSheep** - 简单可爱、低资源占用

### 差异化优势

- 使用现代 Web 技术栈，易于定制和扩展
- 原生应用性能，低内存占用
- 跨平台支持 (Windows/macOS/Linux)
- 开源且可自定义角色

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🎨 未来规划

### Phase 1: 基础功能 ✅
- [x] 项目初始化
- [x] 透明窗口
- [x] 基础交互
- [x] 动画系统

### Phase 2: Live2D 集成 🚧
- [ ] 集成 Live2D SDK
- [ ] 模型加载系统
- [ ] 动作触发器

### Phase 3: 高级功能 📋
- [ ] 系统托盘
- [ ] 配置面板
- [ ] 自启动功能
- [ ] 更新系统

### Phase 4: 内容扩展 💡
- [ ] 角色商店
- [ ] 自定义皮肤
- [ ] 社区分享

---

💖 如果你喜欢这个项目，请给个 Star！
