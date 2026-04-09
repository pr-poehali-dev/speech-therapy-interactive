import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Mode = 'login' | 'register';

export default function Auth({ initialMode = 'login' }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [form, setForm] = useState({ name: '', email: '', password: '', password2: '' });
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="bubbles-bg min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-[2rem] shadow-xl p-10 text-center max-w-sm animate-bounce-in">
          <div className="text-6xl mb-4">{mode === 'login' ? '🎉' : '🌟'}</div>
          <h2 className="font-baloo text-2xl font-extrabold text-slate-800 mb-2">
            {mode === 'login' ? 'Добро пожаловать!' : 'Регистрация готова!'}
          </h2>
          <p className="text-slate-500 mb-6">{mode === 'login' ? 'Вы успешно вошли в систему' : 'Теперь вы часть нашей семьи 🌈'}</p>
          <button onClick={() => setDone(false)} className="bg-pink-500 text-white font-bold px-6 py-2.5 rounded-full hover:bg-pink-600 transition-all">
            Назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bubbles-bg min-h-screen flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Toggle */}
        <div className="flex bg-white rounded-2xl p-1 shadow-md mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${mode === 'login' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow' : 'text-slate-500 hover:text-slate-700'}`}
          >
            🔑 Войти
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${mode === 'register' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow' : 'text-slate-500 hover:text-slate-700'}`}
          >
            ✨ Регистрация
          </button>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{mode === 'login' ? '👋' : '🌟'}</div>
            <h2 className="font-baloo text-2xl font-extrabold text-slate-800">
              {mode === 'login' ? 'Добро пожаловать!' : 'Создать аккаунт'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {mode === 'login' ? 'Войдите в личный кабинет' : 'Присоединяйтесь к нам!'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Ваше имя</label>
                <div className="relative">
                  <Icon name="User" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Имя родителя или ребёнка"
                    className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl pl-10 pr-4 py-3 text-slate-800 outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <Icon name="Mail" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="ваш@email.ru"
                  className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl pl-10 pr-4 py-3 text-slate-800 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Пароль</label>
              <div className="relative">
                <Icon name="Lock" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl pl-10 pr-4 py-3 text-slate-800 outline-none transition-colors"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Повторите пароль</label>
                <div className="relative">
                  <Icon name="Lock" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={form.password2}
                    onChange={e => setForm({...form, password2: e.target.value})}
                    placeholder="••••••••"
                    className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl pl-10 pr-4 py-3 text-slate-800 outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg py-3.5 rounded-2xl shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all mt-2"
            >
              {mode === 'login' ? 'Войти 🚀' : 'Зарегистрироваться 🌈'}
            </button>
          </form>

          <div className="text-center mt-5">
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-pink-500 font-semibold text-sm hover:underline"
            >
              {mode === 'login' ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
