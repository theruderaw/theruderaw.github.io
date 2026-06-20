import React, { useEffect, useRef } from 'react'

export default function GameOfLifeBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let isDestroyed = false
        let animationFrameId
        let lastTickTime = 0
        const tickInterval = 120 // Speed of generations in ms
        let isPaused = false

        const cellSize = 12
        let cols = 0
        let rows = 0
        let grid = []

        const resize = () => {
            if (isDestroyed) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            cols = Math.ceil(canvas.width / cellSize)
            rows = Math.ceil(canvas.height / cellSize)
            
            // Generate initial random cells
            grid = Array(rows).fill(null).map(() => 
                Array(cols).fill(null).map(() => Math.random() > 0.88 ? 1.0 : 0.0)
            )
        }

        window.addEventListener('resize', resize)
        resize()

        const countNeighbors = (gridState, r, c) => {
            let sum = 0
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) continue
                    const row = (r + i + rows) % rows
                    const col = (c + j + cols) % cols
                    if (gridState[row][col] >= 0.9) {
                        sum++
                    }
                }
            }
            return sum
        }

        const updateGrid = () => {
            const nextGrid = Array(rows).fill(null).map(() => Array(cols).fill(0))

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const neighbors = countNeighbors(grid, r, c)
                    const state = grid[r][c]

                    if (state >= 0.9) {
                        if (neighbors < 2 || neighbors > 3) {
                            nextGrid[r][c] = 0.75 // Die, but start decaying
                        } else {
                            nextGrid[r][c] = 1.0 // Survive
                        }
                    } else {
                        if (neighbors === 3) {
                            nextGrid[r][c] = 1.0 // Birth
                        } else {
                            // Smoothly decay opacity of dead cells for trailing effect
                            nextGrid[r][c] = Math.max(0, state - 0.06)
                        }
                    }
                }
            }
            grid = nextGrid
        }

        const draw = () => {
            if (isDestroyed) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw cells
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const val = grid[r][c]
                    if (val > 0) {
                        ctx.fillStyle = `rgba(216, 216, 255, ${val * 0.05})`
                        ctx.fillRect(c * cellSize + 1, r * cellSize + 1, cellSize - 2, cellSize - 2)
                    }
                }
            }
        }

        const loop = (timestamp) => {
            if (isDestroyed) return
            if (!isPaused && timestamp - lastTickTime > tickInterval) {
                updateGrid()
                lastTickTime = timestamp
            }
            draw()
            animationFrameId = requestAnimationFrame(loop)
        }

        animationFrameId = requestAnimationFrame(loop)

        // Mouse interaction: Spawn clusters of active cells
        const handleInteraction = (e) => {
            if (isDestroyed) return
            const x = e.clientX
            const y = e.clientY
            const c = Math.floor(x / cellSize)
            const r = Math.floor(y / cellSize)

            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                const radius = 2
                for (let i = -radius; i <= radius; i++) {
                    for (let j = -radius; j <= radius; j++) {
                        const nr = (r + i + rows) % rows
                        const nc = (c + j + cols) % cols
                        if (Math.random() > 0.4) {
                            grid[nr][nc] = 1.0
                        }
                    }
                }
            }
        }

        const handleControl = (e) => {
            if (isDestroyed) return
            const action = e.detail
            if (action === 'clear') {
                grid = Array(rows).fill(null).map(() => Array(cols).fill(0))
            } else if (action === 'reset') {
                grid = Array(rows).fill(null).map(() => 
                    Array(cols).fill(null).map(() => Math.random() > 0.88 ? 1.0 : 0.0)
                )
            } else if (action === 'pause') {
                isPaused = true
            } else if (action === 'play') {
                isPaused = false
            }
        }

        window.addEventListener('mousemove', handleInteraction)
        window.addEventListener('mousedown', handleInteraction)
        window.addEventListener('gol-control', handleControl)

        return () => {
            isDestroyed = true
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleInteraction)
            window.removeEventListener('mousedown', handleInteraction)
            window.removeEventListener('gol-control', handleControl)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none', // Set to none so it doesn't block buttons or links
                backgroundColor: 'transparent'
            }}
        />
    )
}
