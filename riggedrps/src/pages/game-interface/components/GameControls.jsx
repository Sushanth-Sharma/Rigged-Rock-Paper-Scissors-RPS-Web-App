import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GameControls = ({ 
  soundEnabled, 
  onToggleSound, 
  onResetGame, 
  onToggleStats,
  showStats,
  gameState 
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Game Title & Status */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} color="#1A1A1A" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-orbitron font-bold text-foreground">RiggedRPS</h1>
              <p className="text-sm text-muted-foreground">The Unwinnable Game</p>
            </div>
          </div>
          
          {/* Game Status Indicator */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-card border border-border rounded-full">
            <div className={`w-2 h-2 rounded-full ${
              gameState === 'selecting' ? 'bg-warning animate-pulse' :
              gameState === 'revealing'? 'bg-primary animate-spin' : 'bg-destructive'
            }`}></div>
            <span className="text-xs font-medium text-foreground capitalize">
              {gameState === 'selecting' ? 'Waiting' : 
               gameState === 'revealing' ? 'Processing' : 'Complete'}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center space-x-3">
          
          {/* Sound Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleSound}
            className="relative"
          >
            <Icon 
              name={soundEnabled ? "Volume2" : "VolumeX"} 
              size={18} 
              className={soundEnabled ? "text-success" : "text-muted-foreground"}
            />
            {soundEnabled && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
            )}
          </Button>

          {/* Stats Toggle */}
          <Button
            variant={showStats ? "default" : "outline"}
            size="sm"
            onClick={onToggleStats}
            iconName="BarChart3"
            iconPosition="left"
          >
            <span className="hidden sm:inline">Stats</span>
          </Button>

          {/* Reset Game */}
          <Button
            variant="destructive"
            size="sm"
            onClick={onResetGame}
            iconName="RotateCcw"
            iconPosition="left"
          >
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>
      </div>

      {/* Mobile Game Status */}
      <div className="sm:hidden mt-4 flex justify-center">
        <div className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-full">
          <div className={`w-2 h-2 rounded-full ${
            gameState === 'selecting' ? 'bg-warning animate-pulse' :
            gameState === 'revealing'? 'bg-primary animate-spin' : 'bg-destructive'
          }`}></div>
          <span className="text-sm font-medium text-foreground">
            {gameState === 'selecting' ? 'Choose your move' : 
             gameState === 'revealing' ? 'AI is thinking...' : 'Round complete'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameControls;