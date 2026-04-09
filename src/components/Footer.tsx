export default function Footer({ onNav }: { onNav: (p: string) => void }) {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-0">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-baloo font-extrabold text-lg">Г</div>
              <span className="font-baloo font-extrabold text-xl">Говорилка</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Логопедические занятия для детей от 2 до 12 лет. Учимся говорить весело и с любовью!</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-pink-400">Разделы</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[['home','🏠 Главная'],['games','🎮 Игры'],['about','👩‍⚕️ Обо мне'],['news','📰 Новости'],['contact','💌 Напишите нам']].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => onNav(id)} className="hover:text-pink-400 transition-colors">{label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-pink-400">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 +7 (999) 123-45-67</li>
              <li>📧 logoped@govorilka.ru</li>
              <li>📍 ул. Примерная, 10, Москва</li>
              <li>🕐 Пн–Пт: 9:00–19:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          © 2026 Говорилка. Сделано с ❤️ для детей и родителей.
        </div>
      </div>
    </footer>
  );
}
