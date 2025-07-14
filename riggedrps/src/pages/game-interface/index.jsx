import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import GameControls from './components/GameControls';
import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import GameStats from './components/GameStats';

const GameInterface = () => {
  // Game state management
  const [gameState, setGameState] = useState('selecting'); // 'selecting', 'revealing', 'result'
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [showMoves, setShowMoves] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  
  // Game statistics
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    playerWins: 0,
    computerWins: 0,
    ties: 0,
    lossStreak: 0,
    winStreak: 0
  });

  // UI controls
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showStats, setShowStats] = useState(false);

  // Game result state
  const [gameResult, setGameResult] = useState(null); // 'win', 'lose', 'tie'

  // Rigged game logic - AI always wins
  const getWinningMove = (playerChoice) => {
    const winningMoves = {
      'rock': 'paper',
      'paper': 'scissors', 
      'scissors': 'rock'
    };
    return winningMoves[playerChoice];
  };

  // Enhanced game logic with 25% player winning chance
  const getGameOutcome = (playerChoice) => {
    const random = Math.random();
    
    // 25% chance player wins, 10% chance tie, 65% chance computer wins
    if (random < 0.25) {
      // Player wins - computer chooses losing move
      const losingMoves = {
        'rock': 'scissors',
        'paper': 'rock', 
        'scissors': 'paper'
      };
      return { computerMove: losingMoves[playerChoice], result: 'win' };
    } else if (random < 0.35) {
      // Tie - computer chooses same move
      return { computerMove: playerChoice, result: 'tie' };
    } else {
      // Computer wins - computer chooses winning move
      const winningMoves = {
        'rock': 'paper',
        'paper': 'scissors', 
        'scissors': 'rock'
      };
      return { computerMove: winningMoves[playerChoice], result: 'lose' };
    }
  };

  // Handle player move selection
  const handleMoveSelect = (move) => {
    if (gameState !== 'selecting') return;
    
    setPlayerMove(move);
    setGameState('revealing');
    setShowMoves(false);

    // Simulate AI thinking time
    setTimeout(() => {
      const outcome = getGameOutcome(move);
      setComputerMove(outcome.computerMove);
      setGameResult(outcome.result);
      setShowMoves(true);
      setGameState('result');
      
      // Update statistics based on outcome
      setStats(prev => {
        const newStats = {
          ...prev,
          gamesPlayed: prev.gamesPlayed + 1
        };

        if (outcome.result === 'win') {
          newStats.playerWins = prev.playerWins + 1;
          newStats.winStreak = prev.winStreak + 1;
          newStats.lossStreak = 0;
        } else if (outcome.result === 'lose') {
          newStats.computerWins = prev.computerWins + 1;
          newStats.lossStreak = prev.lossStreak + 1;
          newStats.winStreak = 0;
        } else {
          newStats.ties = prev.ties + 1;
          newStats.lossStreak = 0;
          newStats.winStreak = 0;
        }

        return newStats;
      });
    }, 2000);
  };

  // Handle play again
  const handlePlayAgain = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setShowMoves(false);
    setGameState('selecting');
    setGameResult(null);
    setCurrentRound(prev => prev + 1);
  };

  // Handle game reset
  const handleResetGame = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setShowMoves(false);
    setGameState('selecting');
    setGameResult(null);
    setCurrentRound(1);
    setStats({
      gamesPlayed: 0,
      playerWins: 0,
      computerWins: 0,
      ties: 0,
      lossStreak: 0,
      winStreak: 0
    });
  };

  // Handle sound toggle
  const handleToggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  // Handle stats toggle
  const handleToggleStats = () => {
    setShowStats(prev => !prev);
  };

  // Sound effects simulation
  useEffect(() => {
    if (!soundEnabled) return;
    
    if (gameState === 'revealing') {
      // Simulate thinking sound
      console.log('🔊 AI thinking sound...');
    } else if (gameState === 'result') {
      // Simulate result sound
      console.log('🔊 Game result sound...');
    }
  }, [gameState, soundEnabled]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-8">
        {/* Game Controls */}
        <GameControls
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onResetGame={handleResetGame}
          onToggleStats={handleToggleStats}
          showStats={showStats}
          gameState={gameState}
        />

        {/* Game Header */}
        <GameHeader 
          currentRound={currentRound}
          streak={gameResult === 'win' ? stats.winStreak : stats.lossStreak}
          streakType={gameResult === 'win' ? 'win' : 'loss'}
        />

        {/* Game Statistics */}
        <GameStats 
          stats={stats}
          isVisible={showStats}
        />

        {/* Main Game Board */}
        <GameBoard
          playerMove={playerMove}
          computerMove={computerMove}
          gameState={gameState}
          gameResult={gameResult}
          onMoveSelect={handleMoveSelect}
          onPlayAgain={handlePlayAgain}
          showMoves={showMoves}
        />

        {/* Footer Info */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-12">
          <div className="text-center">
            <div className="bg-card border border-border rounded-xl p-6 shadow-neo">
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-3">
                How It Works
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <p>Choose your move from Rock, Paper, or Scissors</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                    <span className="text-warning font-bold">2</span>
                  </div>
                  <p>AI calculates outcome with 25% player win chance</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <span className="text-success font-bold">3</span>
                  </div>
                  <p>Now you have a fighting chance - but AI still has the edge!</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} RiggedRPS - Still challenging, but fair! 🎮
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameInterface;