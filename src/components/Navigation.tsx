import React from 'react';
import { Home, Search, PenSquare, Heart, User } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 md:top-0 md:left-0 md:bottom-0 md:w-16 md:border-r md:border-t-0">
      <ul className="flex justify-around md:flex-col md:gap-8 md:mt-8">
        <li>
          <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors">
            <Home className="w-6 h-6" />
          </button>
        </li>
        <li>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </li>
        <li>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <PenSquare className="w-6 h-6" />
          </button>
        </li>
        <li>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
        </li>
        <li>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
}