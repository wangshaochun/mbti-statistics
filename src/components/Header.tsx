import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Brain, Heart, Users, BarChart3, Gamepad2, TestTube, BookOpen,Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/types', label: 'MBTI一覧', icon: Brain },
    { path: '/compatibility', label: '相性診断', icon: Heart },
    { path: '/statistics', label: '統計・割合', icon: BarChart3 },
    { path: '/characters', label: 'キャラ分析', icon: Gamepad2 },
    { path: '/diagnostics', label: '診断ツール', icon: TestTube },
    { path: '/careers', label: '職業分析', icon: Briefcase },
    { path: '/blog', label: 'ブログ', icon: BookOpen },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-[#4FC3F7] border-2 border-gray-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <Users className="w-7 h-7 text-gray-900" />
            </div>
            <div className="hidden sm:block">
              <h4 className="text-xl font-bold text-gray-900">MBTI相性診断ガイド</h4>
              <p className="text-xs text-gray-500">16タイプ性格分析・相性</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;