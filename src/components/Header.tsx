import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './Theme';
import './Header.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: '01 : Home' },
    { path: '/projects', label: '02 : Projects' },
    { path: '/about', label: '03 : About me' },
    { path: '/contact', label: '04 : Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container flex justify-between items-center">
          {/* Mobile menu toggle */}
          <button
            className="menu-toggle md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation links */}
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''} flex-grow`}>
            <ul className="navbar-nav flex flex-col md:flex-row md:items-center gap-4">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme toggle aligned to the right */}
          <div className="hidden md:flex ml-auto">
            <button
              className="theme-toggle ml-4"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
