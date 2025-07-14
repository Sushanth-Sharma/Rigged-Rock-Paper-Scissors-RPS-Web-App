import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GameBoard = ({ 
  playerMove, 
  computerMove, 
  gameState, 
  onMoveSelect, 
  onPlayAgain,
  showMoves 
}) => {
  const moves = [
    { id: 'rock', name: 'Rock', icon: 'Mountain', color: 'text-gray-400' },
    { id: 'paper', name: 'Paper', icon: 'FileText', color: 'text-blue-400' },
    { id: 'scissors', name: 'Scissors', icon: 'Scissors', color: 'text-red-400' }
  ];

  const getMoveIcon = (moveId) => {
    const move = moves.find(m => m.id === moveId);
    return move ? { icon: move.icon, color: move.color } : { icon: 'HelpCircle', color: 'text-gray-400' };
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Battle Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        {/* Player Zone */}
        <div className="order-1 lg:order-1">
          <div className="text-center mb-6">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">Your Move</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Player Move Display */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-card border-2 border-border rounded-2xl flex items-center justify-center shadow-neo">
              {playerMove && showMoves ? (
                <Icon 
                  name={getMoveIcon(playerMove).icon} 
                  size={64} 
                  className={`${getMoveIcon(playerMove).color} animate-bounce`}
                />
              ) : (
                <Icon name="HelpCircle" size={64} className="text-muted-foreground" />
              )}
            </div>
            <p className="text-center mt-4 text-sm font-medium text-muted-foreground">
              {playerMove && showMoves ? moves.find(m => m.id === playerMove)?.name : 'Choose your weapon'}
            </p>
          </div>

          {/* Move Selection Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {moves.map((move) => (
              <button
                key={move.id}
                onClick={() => onMoveSelect(move.id)}
                disabled={gameState !== 'selecting'}
                className={`
                  relative p-4 bg-card border-2 border-border rounded-xl 
                  transition-all duration-200 shadow-neo
                  ${gameState === 'selecting' ?'hover:border-accent hover:shadow-lg hover:scale-105 active:scale-95' :'opacity-50 cursor-not-allowed'
                  }
                  ${playerMove === move.id ? 'border-accent bg-accent/10' : ''}
                `}
              >
                <Icon 
                  name={move.icon} 
                  size={32} 
                  className={`${move.color} mx-auto mb-2`}
                />
                <span className="block text-xs font-medium text-foreground">
                  {move.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Battle Result Zone */}
        <div className="order-3 lg:order-2">
          <div className="text-center">
            {gameState === 'selecting' && (
              <div className="animate-pulse">
                <Icon name="Zap" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Choose Your Move
                </h3>
                <p className="text-sm text-muted-foreground">
                  The AI is waiting...
                </p>
              </div>
            )}

            {gameState === 'revealing' && (
              <div className="animate-spin">
                <Icon name="Loader2" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Battle in Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  Computing the perfect counter...
                </p>
              </div>
            )}

            {gameState === 'result' && (
              <div className="animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-4 bg-destructive/20 border-2 border-destructive rounded-full flex items-center justify-center">
                  <Icon name="X" size={40} className="text-destructive" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-destructive mb-2">
                  You Lost!
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  The AI always finds a way to win... 🤖
                </p>
                <Button 
                  variant="default" 
                  onClick={onPlayAgain}
                  iconName="RotateCcw" 
                  iconPosition="left"
                  className="animate-bounce"
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Computer Zone */}
        <div className="order-2 lg:order-3">
          <div className="text-center mb-6">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">AI Opponent</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-destructive to-warning mx-auto rounded-full"></div>
          </div>
          
          {/* Computer Move Display */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-card border-2 border-border rounded-2xl flex items-center justify-center shadow-neo relative overflow-hidden">
              {/* Rigged AI Indicator */}
              <div className="absolute top-2 right-2">
                <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              </div>
              
              {computerMove && showMoves ? (
                <Icon 
                  name={getMoveIcon(computerMove).icon} 
                  size={64} 
                  className={`${getMoveIcon(computerMove).color} animate-bounce`}
                />
              ) : (
                <Icon name="Bot" size={64} className="text-muted-foreground" />
              )}
            </div>
            <p className="text-center mt-4 text-sm font-medium text-muted-foreground">
              {computerMove && showMoves ? moves.find(m => m.id === computerMove)?.name : 'AI is thinking...'}
            </p>
          </div>

          {/* AI Status */}
          <div className="bg-card border border-border rounded-xl p-4 shadow-neo">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">AI Status</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success">Online</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Win Rate</span>
                <span className="text-destructive font-bold">100%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Strategy</span>
                <span className="text-warning font-bold">Rigged</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Difficulty</span>
                <span className="text-destructive font-bold">Impossible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;