import React from 'react';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Building2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">M・M・R</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} 有限会社M・M・R / ウッズコーポレーション
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}