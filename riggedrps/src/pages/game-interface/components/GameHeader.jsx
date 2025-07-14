import React from 'react';
import Icon from '../../../components/AppIcon';

const GameHeader = ({ currentRound, streak }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="text-center">
        
        {/* Main Title */}
        <div className="mb-6">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground mb-2">
            Battle Arena
          </h2>
          <p className="text-lg text-muted-foreground">
            Face the unbeatable AI in Rock Paper Scissors
          </p>
        </div>

        {/* Round Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          
          {/* Current Round */}
          <div className="flex items-center space-x-3 px-4 py-2 bg-card border border-border rounded-xl shadow-neo">
            <Icon name="Target" size={20} className="text-primary" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Round</div>
              <div className="text-xl font-orbitron font-bold text-foreground">#{currentRound}</div>
            </div>
          </div>

          {/* VS Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold">
              VS
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-destructive to-transparent"></div>
          </div>

          {/* Loss Streak */}
          <div className="flex items-center space-x-3 px-4 py-2 bg-card border border-border rounded-xl shadow-neo">
            <Icon name="TrendingDown" size={20} className="text-destructive" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Loss Streak</div>
              <div className="text-xl font-orbitron font-bold text-destructive">{streak}</div>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Icon name="AlertTriangle" size={20} className="text-warning" />
            <span className="text-sm font-bold text-warning">RIGGED GAME WARNING</span>
          </div>
          <p className="text-xs text-muted-foreground">
            This AI has been programmed to always win. Your defeat is mathematically guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;