import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Game', href: '/game-interface', icon: 'Gamepad2' },
  ];

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-accent shadow-neo">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <Icon name="Zap" size={20} color="#1A1A1A" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-xl text-foreground leading-none">
              RiggedRPS
            </span>
            <span className="font-jetbrains-mono text-xs text-muted-foreground leading-none">
              v2.1.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActiveRoute(item.href)
                  ? 'bg-accent text-accent-foreground shadow-neo'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" iconName="BarChart3" iconPosition="left">
            Stats
          </Button>
          <Button variant="default" size="sm" iconName="Play" iconPosition="left">
            Play Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          iconName={isMobileMenuOpen ? "X" : "Menu"}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActiveRoute(item.href)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-3 border-t border-border space-y-2">
              <Button 
                variant="outline" 
                fullWidth 
                iconName="BarChart3" 
                iconPosition="left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Stats
              </Button>
              <Button 
                variant="default" 
                fullWidth 
                iconName="Play" 
                iconPosition="left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Play Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;