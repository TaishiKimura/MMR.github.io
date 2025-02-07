import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">M・M・R</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">会社概要</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">事業内容</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600 transition-colors">ホーム</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">会社概要</a>
            <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">事業内容</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</a>
          </div>
        )}
      </nav>
    </header>
  );
}