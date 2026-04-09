import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="inline-block bg-green-100 text-green-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">💌 Связь</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Напишите нам!</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">Отвечаем в течение нескольких часов</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="card-hover bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-pink-100 text-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Телефон</div>
                <div className="text-pink-500 font-semibold">+7 (999) 123-45-67</div>
              </div>
            </div>

            <div className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Email</div>
                <div className="text-blue-500 font-semibold">logoped@govorilka.ru</div>
              </div>
            </div>

            <div className="card-hover bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-teal-100 text-teal-500 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Адрес</div>
                <div className="text-slate-600 text-sm">ул. Примерная, 10, Москва</div>
              </div>
            </div>

            <div className="card-hover bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Часы работы</div>
                <div className="text-slate-600 text-sm">Пн–Пт: 9:00 – 19:00<br/>Сб: 10:00 – 15:00</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-bold text-purple-700">Первая консультация</div>
              <div className="font-baloo text-2xl font-extrabold text-pink-600">БЕСПЛАТНО</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2rem] shadow-xl p-8">
            {sent ? (
              <div className="text-center py-10 animate-bounce-in">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-baloo text-2xl font-extrabold text-slate-800 mb-2">Отправлено!</h3>
                <p className="text-slate-500">Мы свяжемся с вами очень скоро</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 bg-pink-500 text-white font-bold px-6 py-2.5 rounded-full hover:bg-pink-600 transition-all"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-baloo text-2xl font-extrabold text-slate-800 mb-6">Оставьте заявку</h3>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Мария Петровна"
                    className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl px-4 py-3 text-slate-800 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl px-4 py-3 text-slate-800 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Ваш вопрос</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Расскажите о вашем ребёнке и что вас беспокоит..."
                    className="w-full border-2 border-slate-200 focus:border-pink-400 rounded-2xl px-4 py-3 text-slate-800 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg py-3.5 rounded-2xl shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Отправить заявку 🚀
                </button>
                <p className="text-xs text-center text-slate-400">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
