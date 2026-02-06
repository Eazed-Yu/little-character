# Contributing to Little Character

Thank you for your interest in contributing to Little Character! This document provides guidelines for contributing to the project.

## 🎯 Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Create Live2D models or character designs
- 💻 Submit code improvements
- 🌍 Translate to other languages

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/little-character.git
cd little-character
```

### 2. Set Up Development Environment

```bash
# Install Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

## 📝 Development Guidelines

### Code Style

#### Go Code
- Follow [Effective Go](https://go.dev/doc/effective_go)
- Use `gofmt` to format code
- Add comments for exported functions
- Keep functions focused and simple

Example:
```go
// GetRandomPosition returns a random position on screen
func (a *App) GetRandomPosition() map[string]int {
    screenSize := a.GetScreenSize()
    return map[string]int{
        "x": rand.Intn(screenSize["width"] - 300),
        "y": rand.Intn(screenSize["height"] - 300),
    }
}
```

#### TypeScript/React Code
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Add prop types for all components

Example:
```typescript
interface MyComponentProps {
    value: string;
    onChange: (value: string) => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ value, onChange }) => {
    // Component implementation
};
```

#### CSS
- Use meaningful class names
- Group related styles together
- Use CSS variables for theme colors
- Add comments for complex styles

### Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```bash
feat(live2d): add model loading support
fix(ui): correct pet positioning bug
docs(readme): update installation instructions
style(app): format code with prettier
```

### Testing

Before submitting:

1. **Build the project**:
```bash
wails build
```

2. **Test manually**:
- Run the application
- Test all interactive features
- Check for console errors
- Verify transparency works
- Test on target platforms if possible

3. **Check TypeScript**:
```bash
cd frontend
npm run build
```

## 🎨 Contributing Live2D Models

### Model Requirements
- Format: Live2D Cubism model (.model3.json)
- Include all assets (textures, motions, physics)
- Provide model license information
- Optimize texture sizes (recommended: 2048x2048 or smaller)

### Submission
1. Place model in `frontend/public/models/MODEL_NAME/`
2. Include README with:
   - Model name and author
   - License information
   - Credits and attributions
3. Test model loads and animates correctly

## 📚 Documentation

### When to Update Documentation

Update documentation when:
- Adding new features
- Changing existing behavior
- Adding new dependencies
- Modifying configuration

### Documentation Files
- `README.md` - Main project overview
- `README.zh-CN.md` - Chinese documentation
- `DEVELOPMENT.md` - Development guide
- `LIVE2D.md` - Live2D integration guide
- `CONTRIBUTING.md` - This file

## 🐛 Bug Reports

### Good Bug Report Includes:
1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**:
   - OS and version
   - Wails version
   - Go version
   - Node.js version
6. **Screenshots**: If applicable
7. **Logs**: Error messages or console output

### Template:
```markdown
## Bug Description
[Clear description]

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- OS: [e.g., Windows 11]
- Wails: [e.g., v2.11.0]
- Go: [e.g., 1.21]
- Node: [e.g., v18.0.0]

## Screenshots
[If applicable]

## Additional Context
[Any other relevant information]
```

## 💡 Feature Requests

### Good Feature Request Includes:
1. **Problem Statement**: What problem does it solve?
2. **Proposed Solution**: Your suggested implementation
3. **Alternatives**: Other solutions you've considered
4. **Use Cases**: Real-world scenarios
5. **Mockups**: If applicable (UI changes)

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Update documentation
2. ✅ Test your changes
3. ✅ Follow code style guidelines
4. ✅ Write clear commit messages
5. ✅ Update CHANGELOG (if applicable)

### PR Template

```markdown
## Description
[Clear description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
[How you tested the changes]

## Screenshots
[If applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests (if applicable)
- [ ] All tests pass
```

### Review Process

1. Submit PR with clear description
2. Automated checks will run
3. Maintainers will review
4. Address feedback if requested
5. PR will be merged when approved

## 🌍 Translations

### Adding a New Language

1. Copy `README.md` to `README.[lang].md`
2. Translate content
3. Update language selector in main README
4. Submit PR with translation

### Current Languages
- English (README.md)
- 中文 (README.zh-CN.md)

## 📋 Priority Features

Current high-priority features:
1. Live2D model integration
2. System tray support
3. Multiple character support
4. Auto-start functionality
5. Settings persistence
6. Character marketplace

## 🤝 Community

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Pull Requests**: Code contributions

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## ❓ Questions?

- Check [DEVELOPMENT.md](DEVELOPMENT.md) for development help
- Check [LIVE2D.md](LIVE2D.md) for Live2D integration
- Open a GitHub Discussion for questions
- Contact maintainers via GitHub

## 🙏 Thank You!

Every contribution helps make Little Character better. Thank you for being part of this project!

---

Happy contributing! 🎉
