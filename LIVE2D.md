# Live2D Integration Guide

## Overview

This document describes how to integrate Live2D models into the Little Character desktop pet application.

## Current Status

✅ **Completed**:
- Live2DViewer component structure
- Canvas setup
- Component lifecycle management

🚧 **In Progress**:
- Live2D SDK integration
- Model loading system
- Animation triggers

## Prerequisites

### Required Libraries

1. **pixi.js** - 2D rendering engine
```bash
npm install pixi.js
```

2. **pixi-live2d-display** - Live2D plugin for Pixi.js
```bash
npm install pixi-live2d-display
```

3. **Live2D Cubism SDK** - Core SDK for Live2D
- Download from: https://www.live2d.com/download/cubism-sdk/
- Use the Web version (Cubism SDK for Web)

## Implementation Plan

### Phase 1: Setup (Completed)
- [x] Create Live2DViewer component
- [x] Add canvas element
- [x] Setup component structure

### Phase 2: Integration (Next)
- [ ] Install dependencies
- [ ] Initialize Pixi.js application
- [ ] Load Live2D Cubism Core
- [ ] Implement model loader

### Phase 3: Features
- [ ] Load .model3.json files
- [ ] Add motion support
- [ ] Implement expression switching
- [ ] Add mouse tracking
- [ ] Implement idle animations

### Phase 4: Polish
- [ ] Add model configuration
- [ ] Create model selector
- [ ] Implement model preloading
- [ ] Optimize performance

## Code Implementation

### Step 1: Install Dependencies

```bash
cd frontend
npm install pixi.js pixi-live2d-display
npm install --save-dev @types/pixi.js
```

### Step 2: Update Live2DViewer Component

```typescript
import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';

interface Live2DViewerProps {
    width?: number;
    height?: number;
    modelPath: string;
}

export const Live2DViewer: React.FC<Live2DViewerProps> = ({ 
    width = 300, 
    height = 300,
    modelPath 
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<PIXI.Application | null>(null);
    const modelRef = useRef<Live2DModel | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create Pixi application
        const app = new PIXI.Application({
            width,
            height,
            transparent: true,
            backgroundAlpha: 0,
        });

        containerRef.current.appendChild(app.view as HTMLCanvasElement);
        appRef.current = app;

        // Load Live2D model
        Live2DModel.from(modelPath).then((model) => {
            modelRef.current = model;
            
            // Scale and position model
            model.scale.set(0.5);
            model.position.set(width / 2, height / 2);
            model.anchor.set(0.5, 0.5);

            // Add to stage
            app.stage.addChild(model);

            // Start idle motion
            model.motion('idle');
        });

        return () => {
            // Cleanup
            if (modelRef.current) {
                modelRef.current.destroy();
            }
            if (appRef.current) {
                appRef.current.destroy(true);
            }
        };
    }, [modelPath, width, height]);

    return (
        <div 
            ref={containerRef}
            style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}
        />
    );
};
```

### Step 3: Prepare Live2D Models

1. **Model Structure**:
```
models/
├── character1/
│   ├── character1.model3.json   # Model definition
│   ├── character1.moc3          # Model data
│   ├── character1.physics3.json # Physics
│   ├── textures/
│   │   └── texture_00.png
│   └── motions/
│       ├── idle_01.motion3.json
│       └── tap_body.motion3.json
```

2. **Place in Frontend**:
```bash
mkdir -p frontend/public/models
# Copy your Live2D models here
```

3. **Update Model Path**:
```typescript
<Live2DViewer 
    modelPath="/models/character1/character1.model3.json"
/>
```

## Model Sources

### Free Live2D Models
1. **Official Samples**:
   - https://www.live2d.com/download/sample-data/
   
2. **Community Resources**:
   - https://github.com/guansss/pixi-live2d-display/tree/master/test/assets
   - VTuber models (check licenses)

### Creating Your Own
1. Use Live2D Cubism Editor
2. Export as .model3.json format
3. Include all required assets (textures, motions)

## Advanced Features

### Mouse Tracking
```typescript
model.internalModel.motionManager.expressionManager = null;

// Track mouse position
app.stage.on('pointermove', (e) => {
    if (model) {
        const point = e.data.global;
        model.focus(point.x, point.y);
    }
});
```

### Expression Switching
```typescript
// Set expression
model.expression('smile');

// Random expression
const expressions = ['normal', 'smile', 'angry', 'sad'];
const randomExpr = expressions[Math.floor(Math.random() * expressions.length)];
model.expression(randomExpr);
```

### Motion Triggers
```typescript
// Play motion
model.motion('tap_body');

// Motion groups
model.motion('idle', 0); // First idle motion
model.motion('idle', 1); // Second idle motion
```

## Performance Optimization

### Tips:
1. **Preload Models**: Load models at startup
2. **Limit Model Count**: One model per window
3. **Optimize Textures**: Use appropriate resolution
4. **Reduce Draw Calls**: Combine textures when possible
5. **Frame Rate**: Limit to 30-60 FPS

### Example:
```typescript
const app = new PIXI.Application({
    width,
    height,
    transparent: true,
    backgroundAlpha: 0,
    antialias: true,
    resolution: window.devicePixelRatio,
    autoDensity: true,
});

// Limit FPS
app.ticker.maxFPS = 60;
```

## Integration with App

### Update App.tsx:
```typescript
import Live2DViewer from './components/Live2DViewer';

function App() {
    const [modelPath, setModelPath] = useState('/models/default/default.model3.json');
    
    return (
        <div id="App">
            <Live2DViewer modelPath={modelPath} />
            {/* Rest of your app */}
        </div>
    );
}
```

### Add Model Selector in Settings:
```typescript
<select 
    value={modelPath} 
    onChange={(e) => setModelPath(e.target.value)}
>
    <option value="/models/character1/character1.model3.json">Character 1</option>
    <option value="/models/character2/character2.model3.json">Character 2</option>
</select>
```

## Backend Integration (Optional)

### Add Go Method to Load Models:
```go
func (a *App) GetAvailableModels() []string {
    // Read models from directory
    models := []string{}
    // Implementation here
    return models
}

func (a *App) LoadModel(modelName string) string {
    // Return model path
    return "/models/" + modelName + "/" + modelName + ".model3.json"
}
```

## Troubleshooting

### Common Issues:

1. **Model not loading**:
   - Check file paths are correct
   - Verify all assets are present
   - Check browser console for errors

2. **Performance issues**:
   - Reduce texture resolution
   - Limit animation complexity
   - Check GPU acceleration is enabled

3. **Transparent background issues**:
   - Ensure Pixi app has `transparent: true`
   - Set `backgroundAlpha: 0`
   - Check CSS doesn't override transparency

## Resources

- [Live2D Cubism SDK](https://www.live2d.com/en/sdk/download/)
- [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display)
- [Pixi.js Documentation](https://pixijs.com/)
- [Live2D Creator Forum](https://community.live2d.com/)

## Next Steps

1. Install dependencies: `npm install pixi.js pixi-live2d-display`
2. Download a sample Live2D model
3. Place model in `frontend/public/models/`
4. Update `Live2DViewer.tsx` with the implementation above
5. Test with development server: `wails dev`
6. Optimize and customize as needed

---

For questions or issues, please open a GitHub issue.
