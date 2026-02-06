package main

import (
	"context"
	"fmt"
	"math/rand"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	// Note: In Go 1.20+, rand is automatically seeded
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// GetScreenSize returns the screen dimensions
func (a *App) GetScreenSize() map[string]int {
	// This is a placeholder - in production, you'd use platform-specific APIs
	return map[string]int{
		"width":  1920,
		"height": 1080,
	}
}

// MoveWindow moves the window to specified position
func (a *App) MoveWindow(x, y int) {
	runtime.WindowSetPosition(a.ctx, x, y)
}

// GetRandomPosition returns a random position on screen
func (a *App) GetRandomPosition() map[string]int {
	screenSize := a.GetScreenSize()
	return map[string]int{
		"x": rand.Intn(screenSize["width"] - 300),
		"y": rand.Intn(screenSize["height"] - 300),
	}
}

// Quit closes the application
func (a *App) Quit() {
	runtime.Quit(a.ctx)
}

// HideWindow hides the window
func (a *App) HideWindow() {
	runtime.WindowHide(a.ctx)
}

// ShowWindow shows the window
func (a *App) ShowWindow() {
	runtime.WindowShow(a.ctx)
}
