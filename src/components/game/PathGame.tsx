"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

// 10x10 maze (no outer walls - full usable area)
// Start: (0,0), End: (9,9) - VERIFIED SOLVABLE
const MAZE = [
  [0,0,0,1,0,0,0,0,1,0],
  [1,1,0,1,0,1,1,0,1,0],
  [0,0,0,1,0,0,1,0,0,0],
  [0,1,1,1,0,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [1,1,1,1,1,1,0,1,1,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,1,1,1,1,1,0,1,0,1],
  [0,0,0,1,0,0,0,1,0,1],
  [1,1,0,1,0,1,1,1,0,0],
];

// Responsive cell size
const getCellSize = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 480) return 34;
  return 52;
};

const START_X = 0;
const START_Y = 0;
const END_X = 9;
const END_Y = 9;

export default function PathGame() {
  const [cellSize, setCellSize] = useState(52);
  const [playerPos, setPlayerPos] = useState<Position>({ x: START_X, y: START_Y });
  const [gameState, setGameState] = useState<"idle" | "playing" | "won">("idle");
  const [moveCount, setMoveCount] = useState(0);
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; delay: number; color: string; size: number }[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Responsive cell size
  useEffect(() => {
    const updateSize = () => {
      setCellSize(getCellSize());
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const startGame = () => {
    setGameState("playing");
    setPlayerPos({ x: START_X, y: START_Y });
    setMoveCount(0);
    setConfetti([]);
    drawMaze();
  };

  const restart = () => {
    setGameState("idle");
    setPlayerPos({ x: START_X, y: START_Y });
    setMoveCount(0);
    setConfetti([]);
    setShowCelebration(false);
    drawMaze();
  };

  const isWall = (x: number, y: number): boolean => {
    if (y < 0 || y >= MAZE.length || x < 0 || x >= MAZE[0].length) return true;
    return MAZE[y][x] === 1;
  };

  const isEnd = (x: number, y: number): boolean => {
    return x === END_X && y === END_Y;
  };

  const movePlayer = useCallback((dx: number, dy: number) => {
    if (gameState !== "playing") return;

    setPlayerPos(prev => {
      const newX = prev.x + dx;
      const newY = prev.y + dy;

      if (isWall(newX, newY)) return prev;

      setMoveCount(m => m + 1);

      if (isEnd(newX, newY)) {
        setTimeout(() => {
          setGameState("won");
          setShowCelebration(true);
          // Generate confetti from both sides
          const newConfetti = [];
          // Left side confetti
          for (let i = 0; i < 15; i++) {
            newConfetti.push({
              id: i,
              x: Math.random() * 30,
              y: -20 - Math.random() * 100,
              delay: Math.random() * 0.3,
              color: ["#ec4899", "#f472b6", "#fbbf24", "#34d399", "#a78bfa", "#fb923c"][i % 6],
              size: 12 + Math.random() * 16,
              fromLeft: true,
            });
          }
          // Right side confetti
          for (let i = 15; i < 30; i++) {
            newConfetti.push({
              id: i,
              x: 70 + Math.random() * 30,
              y: -20 - Math.random() * 100,
              delay: Math.random() * 0.3,
              color: ["#ec4899", "#f472b6", "#fbbf24", "#34d399", "#a78bfa", "#fb923c"][(i + 2) % 6],
              size: 12 + Math.random() * 16,
              fromLeft: false,
            });
          }
          setConfetti(newConfetti);
        }, 100);
      }

      return { x: newX, y: newY };
    });
  }, [gameState]);

  const drawMaze = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentCellSize = cellSize;
    const width = MAZE[0].length * currentCellSize;
    const height = MAZE.length * currentCellSize;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Draw background
    ctx.fillStyle = "#fef3c7";
    ctx.fillRect(0, 0, width, height);

    // Draw maze cells
    for (let y = 0; y < MAZE.length; y++) {
      for (let x = 0; x < MAZE[y].length; x++) {
        const cellX = x * currentCellSize;
        const cellY = y * currentCellSize;

        if (MAZE[y][x] === 1) {
          // Wall - dark solid
          ctx.fillStyle = "#1f2937";
          ctx.fillRect(cellX, cellY, currentCellSize, currentCellSize);
        } else {
          // Path - warm sand with grid
          ctx.fillStyle = "#fde68a";
          ctx.fillRect(cellX, cellY, currentCellSize, currentCellSize);
          ctx.strokeStyle = "#fbbf24";
          ctx.lineWidth = 1;
          ctx.strokeRect(cellX, cellY, currentCellSize, currentCellSize);
        }
      }
    }

    // Draw end zone highlight (blue color)
    ctx.fillStyle = "#3b82f6";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(END_X * currentCellSize, END_Y * currentCellSize, currentCellSize, currentCellSize);
    ctx.globalAlpha = 1;

    // Draw rose emoji at start position (player) - smaller size
    if (gameState === "playing" || gameState === "won") {
      ctx.font = `${Math.floor(currentCellSize * 0.55)}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🌹", playerPos.x * currentCellSize + currentCellSize / 2, playerPos.y * currentCellSize + currentCellSize / 2);
    }
  }, [playerPos, gameState, cellSize]);

  // Redraw when position changes
  useEffect(() => {
    drawMaze();
  }, [playerPos, drawMaze]);

  // Initial draw
  useEffect(() => {
    drawMaze();
  }, [cellSize]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          movePlayer(0, -1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          movePlayer(0, 1);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          movePlayer(-1, 0);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          movePlayer(1, 0);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, movePlayer]);

  return (
    <div className="w-full flex flex-col items-center gap-2 relative">
      {/* Title */}
      <h3 className="font-[family-name:var(--font-swasam)] text-xl md:text-2xl text-rose-700">\^ve¡v hgn ImWn¡q</h3>

      {/* Game Area - Responsive layout */}
      {/* Mobile: Vertical stack - bride top-left, groom bottom-right */}
      {/* Desktop: Horizontal - bride left, groom right */}
      <div className="relative">
        {/* Bride photo - top left corner */}
        <img
          src="/assets/nafla_face.png"
          alt="Bride"
          className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 object-cover z-10"
        />

        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <canvas ref={canvasRef} className="block" />

          <AnimatePresence>
            {gameState === "idle" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-amber-900/60 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={startGame}
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-base font-bold rounded-full shadow-xl shadow-rose-500/40 flex items-center gap-2"
                >
                  <span>▶</span>
                  <span>Start</span>
                </motion.button>
              </motion.div>
            )}

            {gameState === "won" && showCelebration && (
              <>
                {/* Full screen confetti - above the game area */}
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                  {confetti.map((c) => (
                    <motion.div
                      key={c.id}
                      initial={{ y: -50, x: `${c.x}vw`, opacity: 1, rotate: 0, scale: 1 }}
                      animate={{ y: "110vh", opacity: [1, 1, 0], rotate: 720, scale: [1, 1.2, 0.5] }}
                      transition={{ duration: 2.5, delay: c.delay, ease: "easeIn" }}
                      className="absolute text-2xl"
                      style={{ fontSize: `${c.size}px` }}
                    >
                      {["✨", "❤️", "💕", "🎉", "🌸", "💖"][c.id % 6]}
                    </motion.div>
                  ))}
                </div>

                {/* Win overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-amber-900/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-5xl"
                  >
                    🎉
                  </motion.span>
                  <p className="text-white text-2xl font-bold drop-shadow-lg">Love Wins!</p>
                  <p className="text-rose-200 text-base font-medium">Moves: {moveCount}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={restart}
                    className="mt-2 px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm rounded-full font-bold shadow-xl"
                  >
                    Play Again
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Groom photo - bottom right corner */}
        <img
          src="/assets/nadeer_face.png"
          alt="Groom"
          className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 object-cover z-10"
        />
      </div>

      {/* Touch controls - redesigned */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => movePlayer(0, -1)}
          className="w-11 h-11 bg-gradient-to-b from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-rose-300/50 active:shadow-md"
          disabled={gameState !== "playing"}
        >
          ↑
        </motion.button>
        <div className="flex gap-1">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => movePlayer(-1, 0)}
            className="w-11 h-11 bg-gradient-to-b from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-rose-300/50 active:shadow-md"
            disabled={gameState !== "playing"}
          >
            ←
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => movePlayer(0, 1)}
            className="w-11 h-11 bg-gradient-to-b from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-rose-300/50 active:shadow-md"
            disabled={gameState !== "playing"}
          >
            ↓
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => movePlayer(1, 0)}
            className="w-11 h-11 bg-gradient-to-b from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-rose-300/50 active:shadow-md"
            disabled={gameState !== "playing"}
          >
            →
          </motion.button>
        </div>
      </div>

      {gameState === "playing" && (
        <button onClick={restart} className="text-xs text-rose-400 hover:text-rose-600 mt-1">
          Restart ↺
        </button>
      )}
    </div>
  );
}