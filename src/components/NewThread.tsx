import React, { useState } from 'react';
import { Image, AtSign, Link2 } from 'lucide-react';

export function NewThread() {
  const [content, setContent] = useState('');

  return (
    <div className="border-b border-gray-100 p-4">
      <div className="flex gap-3">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60"
          alt="Your avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <textarea
            placeholder="Start a thread..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full resize-none border-0 bg-transparent text-gray-900 placeholder-gray-400 focus:ring-0 text-lg min-h-[100px]"
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <AtSign className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Link2 className="w-5 h-5" />
              </button>
            </div>
            <button
              disabled={!content.trim()}
              className="bg-black text-white px-4 py-1.5 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}