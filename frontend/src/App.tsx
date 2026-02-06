import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Greet, MoveWindow, GetRandomPosition, Quit } from "../wailsjs/go/main/App";

function App() {
    const [petState, setPetState] = useState<'idle' | 'walking' | 'dragging'>('idle');
    const [message, setMessage] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const petRef = useRef<HTMLDivElement>(null);

    // Random movement
    useEffect(() => {
        const interval = setInterval(() => {
            if (petState === 'idle' && Math.random() > 0.7) {
                // Randomly move the pet
                GetRandomPosition().then((pos) => {
                    setPetState('walking');
                    MoveWindow(pos.x, pos.y);
                    setTimeout(() => setPetState('idle'), 2000);
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [petState]);

    const handlePetClick = () => {
        const greetings = [
            "你好呀！ 😊",
            "要一起玩吗？ 🎮",
            "今天过得怎么样？ ✨",
            "我在这里陪你哦~ 💖",
            "点击我试试看！ 🌟"
        ];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        setMessage(randomGreeting);
        setTimeout(() => setMessage(''), 3000);
    };

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    };

    const handleQuit = () => {
        Quit();
    };

    return (
        <div id="App" onContextMenu={handleRightClick}>
            <div className="pet-container" ref={petRef}>
                {/* Pet Character */}
                <div 
                    className={`pet ${petState}`}
                    onClick={handlePetClick}
                    style={{ WebkitAppRegion: 'no-drag' } as any}
                >
                    <div className="pet-body">
                        <div className="pet-face">
                            <div className="pet-eyes">
                                <div className="eye left"></div>
                                <div className="eye right"></div>
                            </div>
                            <div className="pet-mouth"></div>
                        </div>
                    </div>
                    <div className="pet-shadow"></div>
                </div>

                {/* Message bubble */}
                {message && (
                    <div className="message-bubble">
                        {message}
                    </div>
                )}

                {/* Context menu */}
                {showMenu && (
                    <div 
                        className="context-menu"
                        style={{ WebkitAppRegion: 'no-drag' } as any}
                    >
                        <div className="menu-item" onClick={() => {
                            setShowMenu(false);
                            handlePetClick();
                        }}>
                            💬 说话
                        </div>
                        <div className="menu-item" onClick={() => {
                            setShowMenu(false);
                            GetRandomPosition().then((pos) => {
                                MoveWindow(pos.x, pos.y);
                            });
                        }}>
                            🚀 随机移动
                        </div>
                        <div className="menu-divider"></div>
                        <div className="menu-item quit" onClick={handleQuit}>
                            ❌ 退出
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
