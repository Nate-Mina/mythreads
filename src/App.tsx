import React from 'react';
import { Navigation } from './components/Navigation';
import { NewThread } from './components/NewThread';
import { Thread } from './components/Thread';

const SAMPLE_THREADS = [
  {
    id: 1,
    author: {
      name: 'Sarah Chen',
      username: 'sarahchen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60'
    },
    content: 'Just launched my new portfolio website! 🚀 Check it out and let me know what you think. Built with React and Tailwind CSS.',
    timestamp: new Date('2024-03-10T09:24:00'),
    likes: 142,
    replies: 28,
    reposts: 12
  },
  {
    id: 2,
    author: {
      name: 'Alex Rivera',
      username: 'arivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60'
    },
    content: 'The future of AI is not about replacing humans, but augmenting our capabilities. We need to focus on creating tools that enhance human creativity and problem-solving.',
    timestamp: new Date('2024-03-10T08:15:00'),
    likes: 89,
    replies: 15,
    reposts: 7
  },
  {
    id: 3,
    author: {
      name: 'Emily Zhang',
      username: 'emilyzhang',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60'
    },
    content: '📚 Reading "The Psychology of Money" by Morgan Housel. Fascinating insights on how our relationship with money shapes our decisions. Highly recommend!',
    timestamp: new Date('2024-03-10T07:30:00'),
    likes: 234,
    replies: 42,
    reposts: 18
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white md:ml-16">
      <Navigation />
      <main className="max-w-2xl mx-auto">
        <header className="sticky top-0 z-10 bg-white bg-opacity-70 backdrop-blur-md border-b border-gray-100 p-4">
          <h1 className="text-xl font-bold">Home</h1>
        </header>
        <NewThread />
        <section>
          {SAMPLE_THREADS.map((thread) => (
            <Thread key={thread.id} {...thread} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;