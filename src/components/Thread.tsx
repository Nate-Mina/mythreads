import React from 'react';
import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ThreadProps {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  replies: number;
  reposts: number;
}

export function Thread({ author, content, timestamp, likes, replies, reposts }: ThreadProps) {
  return (
    <article className="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex gap-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{author.name}</h3>
            <span className="text-gray-500">@{author.username}</span>
            <span className="text-gray-400">·</span>
            <time className="text-gray-500 text-sm">
              {formatDistanceToNow(timestamp, { addSuffix: true })}
            </time>
          </div>
          <p className="mt-2 text-gray-900">{content}</p>
          <div className="flex gap-6 mt-3">
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm">{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{replies}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-green-500 transition-colors">
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm">{reposts}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}