import { useState } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { id: 'home', label: 'Главная', emoji: '🏠' },
  { id: 'games', label: 'Игры', emoji: '🎮' },
  { id: 'about', label: 'Обо мне', emoji: '👩‍⚕️' },
  { id: 'news', label: 'Новости', emoji: '📰' },
  { id: 'contact', label: 'Напишите нам', emoji: '💌' },
];

export default function Navbar({ current, onNav }: { current: string; onNav: (p: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => onNav('home')} className="flex items-center gap-2 hover:scale-105 transition-transform">
              <div className="relative w-10 h-10">
                <img
                  src="https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/28cc8f5f-91a5-4fdb-8ed1-4047556653ff.jpg"
                  alt="Динозавр"
                  className="w-10 h-10 rounded-xl object-cover shadow"
                />
              </div>
              <span className="font-baloo font-extrabold text-xl text-gradient">Говорилка</span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => onNav(l.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    current === l.id
                      ? 'bg-pink-100 text-pink-600'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  {l.emoji} {l.label}
                </button>
              ))}
            </div>

            {/* Auth buttons (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => onNav('login')}
                className="px-4 py-2 text-sm font-bold text-pink-500 border-2 border-pink-200 rounded-xl hover:bg-pink-50 transition-all"
              >
                Войти
              </button>
              <button
                onClick={() => onNav('register')}
                className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow"
              >
                Регистрация ✨
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-pink-50 text-pink-500 hover:bg-pink-100 transition-all"
            >
              <Icon name={open ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-pink-100 px-4 pb-4 pt-2 space-y-1">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => { onNav(l.id); setOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  current === l.id
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {l.emoji} {l.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <button onClick={() => { onNav('login'); setOpen(false); }} className="flex-1 py-2.5 text-sm font-bold text-pink-500 border-2 border-pink-200 rounded-xl">Войти</button>
              <button onClick={() => { onNav('register'); setOpen(false); }} className="flex-1 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl">Регистрация</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}