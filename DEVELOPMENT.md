# Development Guide - 开发指南

## Architecture Overview

This desktop pet application is built with:
- **Backend**: Go using Wails v2 framework
- **Frontend**: React + TypeScript + Vite
- **Communication**: Wails bindings (Go ↔ JavaScript/TypeScript)

## Project Structure

```
little-character/
├── main.go                 # Application entry point
├── app.go                  # Backend logic and Go methods
├── wails.json             # Wails configuration
├── go.mod                 # Go dependencies
├── frontend/
│   ├── src/
│   │   ├── App.tsx        # Main React component
│   │   ├── App.css        # Main styles
│   │   ├── style.css      # Global styles
│   │   ├── components/    # React components
│   │   │   ├── Settings.tsx      # Settings panel
│   │   │   ├── Settings.css      # Settings styles
│   │   │   └── Live2DViewer.tsx  # Live2D component (placeholder)
│   │   └── main.tsx       # React entry point
│   ├── wailsjs/           # Auto-generated Wails bindings
│   └── package.json       # Frontend dependencies
└── build/                 # Build resources and outputs
    ├── bin/               # Compiled binaries (gitignored)
    ├── appicon.png        # Application icon
    └── windows/           # Windows-specific resources
```

## Development Workflow

### 1. Initial Setup

```bash
# Install Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Development Mode

```bash
# Start development server with hot reload
wails dev
```

This will:
- Start the Go backend
- Start Vite dev server for frontend
- Open the application with live reload enabled
- Watch for file changes

### 3. Making Changes

#### Backend Changes (Go)

1. Edit `app.go` or `main.go`
2. Add new methods to the `App` struct
3. Run `wails generate module` to update TypeScript bindings
4. Use the methods in your React components

Example:
```go
// In app.go
func (a *App) NewMethod() string {
    return "Hello from Go!"
}
```

Then regenerate bindings:
```bash
wails generate module
```

Use in React:
```typescript
import { NewMethod } from "../wailsjs/go/main/App";

NewMethod().then(result => console.log(result));
```

#### Frontend Changes (React/TypeScript)

1. Edit files in `frontend/src/`
2. Changes will hot-reload automatically in dev mode
3. No need to rebuild manually

### 4. Building for Production

```bash
# Build the application
wails build

# The executable will be in build/bin/
```

Build options:
```bash
# Clean build
wails build -clean

# Build with debug info
wails build -debug

# Build for specific platform
wails build -platform windows/amd64
wails build -platform darwin/universal
wails build -platform linux/amd64
```

## Key Features Implementation

### Transparent Window

Configured in `main.go`:
```go
BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
Frameless: true,
Windows: &windows.Options{
    WebviewIsTransparent: true,
    WindowIsTranslucent:  true,
},
```

CSS in `frontend/src/style.css`:
```css
html, body {
    background-color: transparent;
    overflow: hidden;
}
```

### Window Dragging

Using `-webkit-app-region: drag` in CSS:
```css
#app {
    -webkit-app-region: drag;
}

/* Disable drag on interactive elements */
.pet {
    -webkit-app-region: no-drag;
}
```

### Go ↔ React Communication

1. **Go to React**: Expose Go methods
```go
func (a *App) GetRandomPosition() map[string]int {
    return map[string]int{"x": 100, "y": 200}
}
```

2. **React to Go**: Call from TypeScript
```typescript
import { GetRandomPosition } from "../wailsjs/go/main/App";

GetRandomPosition().then(pos => {
    console.log(pos.x, pos.y);
});
```

3. **Runtime Methods**: Control window
```go
import "github.com/wailsapp/wails/v2/pkg/runtime"

runtime.WindowSetPosition(a.ctx, x, y)
runtime.WindowHide(a.ctx)
runtime.Quit(a.ctx)
```

## Adding New Features

### Example: Adding a New Behavior

1. **Add Go method** in `app.go`:
```go
func (a *App) DoSomething(param string) string {
    // Your logic here
    return "Result: " + param
}
```

2. **Regenerate bindings**:
```bash
wails generate module
```

3. **Use in React**:
```typescript
import { DoSomething } from "../wailsjs/go/main/App";

DoSomething("test").then(result => {
    console.log(result);
});
```

### Example: Adding a New Component

1. Create `frontend/src/components/MyComponent.tsx`
2. Create `frontend/src/components/MyComponent.css`
3. Import and use in `App.tsx`

## Live2D Integration (Planned)

To add Live2D support:

1. Install dependencies:
```bash
cd frontend
npm install pixi.js pixi-live2d-display
```

2. Update `Live2DViewer.tsx` component
3. Add model loading logic
4. Configure model paths in settings

## Testing

### Manual Testing
```bash
# Development mode
wails dev

# Test functionality:
# 1. Click the pet - should show message
# 2. Right-click - should show menu
# 3. Drag window - should move
# 4. Check transparency
# 5. Test auto-movement
```

### Build Testing
```bash
# Build and test
wails build
./build/bin/little-character
```

## Common Issues

### 1. Transparent window not working
- Check `BackgroundColour` is RGBA with A=0
- Verify CSS has `background-color: transparent`
- Ensure platform-specific options are set

### 2. TypeScript errors
- Run `wails generate module` after Go changes
- Check `frontend/wailsjs/` is generated correctly

### 3. Build fails
- Run `go mod tidy` to clean dependencies
- Clear `build/bin/` and rebuild
- Check all imports are correct

## Performance Tips

1. **Minimize re-renders**: Use React.memo for heavy components
2. **Optimize animations**: Use CSS animations over JavaScript
3. **Reduce bundle size**: Code-split large features
4. **Memory management**: Clean up intervals and listeners

## Resources

- [Wails Documentation](https://wails.io/docs/introduction)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Happy coding! 🎉
