import React, { useState } from 'react'
import '../styles/help.css'

export default function HelpButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const triggerControl = (action) => {
        if (action === 'pause') {
            setIsPaused(true)
        } else if (action === 'play') {
            setIsPaused(false)
        }
        window.dispatchEvent(new CustomEvent('gol-control', { detail: action }))
    }

    return (
        <div
            className="help-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={`help-modal ${isOpen ? 'open' : ''}`}>
                <h4><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="gol-link">Conway's Game of Life</a></h4>
                <p>
                    The background runs a cellular automaton simulation. Move or click your cursor across the page to seed new active cell colonies!
                </p>
                <div className="help-controls">
                    {isPaused ? (
                        <button onClick={() => triggerControl('play')}>▶ Play</button>
                    ) : (
                        <button onClick={() => triggerControl('pause')}>⏸ Pause</button>
                    )}
                    <button onClick={() => triggerControl('clear')}>🗑 Clear</button>
                    <button onClick={() => triggerControl('reset')}>🔄 Reset</button>
                </div>
            </div>
            <button className="help-btn">
                ?
            </button>
        </div>
    )
}
