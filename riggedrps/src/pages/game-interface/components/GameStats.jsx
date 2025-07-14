import React from 'react';
import Icon from '../../../components/AppIcon';

const GameStats = ({ stats, isVisible }) => {
  const statItems = [
    {
      label: 'Games Played',
      value: stats.gamesPlayed,
      icon: 'GamepadIcon',
      color: 'text-primary'
    },
    {
      label: 'Your Wins',
      value: stats.playerWins,
      icon: 'Trophy',
      color: 'text-success'
    },
    {
      label: 'AI Wins',
      value: stats.computerWins,
      icon: 'Bot',
      color: 'text-destructive'
    },
    {
      label: 'Win Rate',
      value: `${stats.gamesPlayed > 0 ? Math.round((stats.playerWins / stats.gamesPlayed) * 100) : 0}%`,
      icon: 'TrendingUp',
      color: 'text-warning'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-neo">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-orbitron font-bold text-foreground">Game Statistics</h3>
          <div className="flex items-center space-x-2">
            <Icon name="BarChart3" size={20} className="text-accent" />
            <span className="text-sm text-muted-foreground">Live Stats</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statItems.map((item, index) => (
            <div 
              key={item.label}
              className="bg-background border border-border rounded-xl p-4 text-center hover:border-accent transition-colors duration-200"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Icon name={item.icon} size={24} className={item.color} />
                </div>
              </div>
              <div className="text-2xl font-orbitron font-bold text-foreground mb-1">
                {item.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Zap" size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">
                AI Response Time: <span className="text-foreground font-medium">0.001s</span>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Target" size={16} className="text-destructive" />
              <span className="text-sm text-muted-foreground">
                AI Accuracy: <span className="text-destructive font-medium">100%</span>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Brain" size={16} className="text-warning" />
              <span className="text-sm text-muted-foreground">
                Rigged Level: <span className="text-warning font-medium">Maximum</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;