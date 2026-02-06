package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options for desktop pet
	err := wails.Run(&options.App{
		Title:  "Little Character",
		Width:  300,
		Height: 300,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0}, // Transparent background
		OnStartup:        app.startup,
		Frameless:        true,  // No window frame
		AlwaysOnTop:      true,  // Always on top
		StartHidden:      false, // Start visible
		Bind: []interface{}{
			app,
		},
		Windows: &options.Windows{
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			DisableWindowIcon:    false,
		},
		Mac: &options.Mac{
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
		},
		Linux: &options.Linux{
			WindowIsTranslucent: true,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
