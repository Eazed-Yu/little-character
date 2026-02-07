import React, { useEffect, useRef } from 'react';

interface Live2DViewerProps {
    width?: number;
    height?: number;
    modelPath?: string;
}

/**
 * Live2D Viewer Component
 * This is a placeholder for future Live2D integration
 * Will use pixi.js and pixi-live2d-display for rendering Live2D models
 */
export const Live2DViewer: React.FC<Live2DViewerProps> = ({ 
    width = 300, 
    height = 300,
    modelPath 
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // TODO: Initialize Live2D model loader
        // This will be implemented with pixi-live2d-display
        console.log('Live2D Viewer initialized');
        
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                // Placeholder rendering
                ctx.clearRect(0, 0, width, height);
            }
        }

        return () => {
            // Cleanup
            console.log('Live2D Viewer cleanup');
        };
    }, [modelPath, width, height]);

    return (
        <canvas 
            ref={canvasRef}
            width={width}
            height={height}
            style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Live2DViewer;
