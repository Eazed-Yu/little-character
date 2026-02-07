import React, { useState } from 'react';
import './Settings.css';

interface SettingsProps {
    onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onClose }) => {
    const [settings, setSettings] = useState({
        autoMove: true,
        moveInterval: 5000,
        alwaysOnTop: true,
        showOnStart: true,
    });

    const handleSave = () => {
        // Save settings to localStorage
        localStorage.setItem('petSettings', JSON.stringify(settings));
        onClose();
    };

    const handleReset = () => {
        const defaultSettings = {
            autoMove: true,
            moveInterval: 5000,
            alwaysOnTop: true,
            showOnStart: true,
        };
        setSettings(defaultSettings);
        localStorage.setItem('petSettings', JSON.stringify(defaultSettings));
    };

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
                <h2>设置 Settings</h2>
                
                <div className="setting-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={settings.autoMove}
                            onChange={(e) => setSettings({ ...settings, autoMove: e.target.checked })}
                        />
                        自动移动 Auto Move
                    </label>
                </div>

                <div className="setting-item">
                    <label>
                        移动间隔 (秒) Move Interval (seconds):
                        <input
                            type="number"
                            min="1"
                            max="60"
                            value={settings.moveInterval / 1000}
                            onChange={(e) => setSettings({ ...settings, moveInterval: parseInt(e.target.value) * 1000 })}
                        />
                    </label>
                </div>

                <div className="setting-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={settings.alwaysOnTop}
                            onChange={(e) => setSettings({ ...settings, alwaysOnTop: e.target.checked })}
                        />
                        始终置顶 Always on Top
                    </label>
                </div>

                <div className="setting-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={settings.showOnStart}
                            onChange={(e) => setSettings({ ...settings, showOnStart: e.target.checked })}
                        />
                        启动时显示 Show on Start
                    </label>
                </div>

                <div className="settings-buttons">
                    <button onClick={handleReset} className="btn-secondary">
                        重置 Reset
                    </button>
                    <button onClick={handleSave} className="btn-primary">
                        保存 Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
