import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/5ebbb364-af22-4b59-9fba-822d49b648c3.jpg";

const features = [
  { icon: "Mic", color: "bg-pink-100 text-pink-500", label: "Артикуляция", desc: "Упражнения для развития речи" },
  { icon: "Gamepad2", color: "bg-blue-100 text-blue-500", label: "Игры", desc: "Весёлые обучающие игры" },
  { icon: "Star", color: "bg-yellow-100 text-yellow-500", label: "Достижения", desc: "Награды за успехи" },
  { icon: "Heart", color: "bg-green-100 text-green-500", label: "Забота", desc: "Индивидуальный подход" },
];

const steps = [
  { num: "1", title: "Записываемся", desc: "Оставьте заявку или напишите нам", color: "bg-pink-500" },
  { num: "2", title: "Знакомимся", desc: "Первичная консультация бесплатно", color: "bg-orange-400" },
  { num: "3", title: "Занимаемся", desc: "Весёлые занятия 2–3 раза в неделю", color: "bg-teal-500" },
  { num: "4", title: "Говорим!", desc: "Результат заметен уже через месяц", color: "bg-purple-500" },
];

export default function Home({ onNav }: { onNav: (p: string) => void }) {
  return (
    <div className="bubbles-bg min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-8 pb-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-pink-100 text-pink-600 font-bold text-sm px-4 py-1.5 rounded-full mb-4 animate-bounce-in">
            🌈 Логопед для детей
          </div>
          <h1 className="font-baloo text-5xl md:text-6xl font-extrabold leading-tight mb-4 opacity-0 animate-slide-up delay-100" style={{animationFillMode:'forwards'}}>
            Учимся говорить
            <span className="block text-gradient">весело и легко!</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg opacity-0 animate-slide-up delay-200" style={{animationFillMode:'forwards'}}>
            Логопедические занятия для детей от 2 до 12 лет. Игровой подход, любящий специалист и результат уже через месяц!
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start opacity-0 animate-slide-up delay-300" style={{animationFillMode:'forwards'}}>
            <button
              onClick={() => onNav('contact')}
              className="animate-pulse-ring bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Записаться бесплатно 🎉
            </button>
            <button
              onClick={() => onNav('games')}
              className="bg-white hover:bg-yellow-50 text-pink-500 font-bold text-lg px-8 py-3.5 rounded-full shadow border-2 border-pink-200 transition-all hover:scale-105 active:scale-95"
            >
              Играть сейчас 🎮
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center opacity-0 animate-slide-up delay-400" style={{animationFillMode:'forwards'}}>
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] overflow-hidden shadow-2xl rainbow-border animate-float">
              <img src={HERO_IMAGE} alt="Логопед с ребёнком" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-white font-baloo font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-wiggle">⭐</div>
            <div className="absolute -bottom-3 -left-3 bg-teal-400 text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">100+ детей</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-baloo text-3xl font-extrabold text-center mb-10 text-gradient">Почему выбирают нас?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className={`card-hover bg-white rounded-3xl p-6 text-center shadow-md opacity-0 animate-slide-up delay-${(i+1)*100}`} style={{animationFillMode:'forwards'}}>
              <div className={`${f.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                <Icon name={f.icon} size={26} />
              </div>
              <div className="font-bold text-base text-slate-800">{f.label}</div>
              <div className="text-sm text-slate-500 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-baloo text-3xl font-extrabold text-center mb-10 text-gradient-warm">Как это работает?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-6 text-center shadow-md relative overflow-hidden">
              <div className={`${s.color} text-white font-baloo font-extrabold text-4xl w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md`}>{s.num}</div>
              <div className="font-bold text-base text-slate-800">{s.title}</div>
              <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-[2rem] p-10 text-center text-white shadow-xl">
          <div className="text-5xl mb-4">🗣️</div>
          <h2 className="font-baloo text-3xl font-extrabold mb-3">Готовы начать?</h2>
          <p className="text-pink-100 mb-6 text-lg">Первая консультация — бесплатно! Записывайтесь прямо сейчас.</p>
          <button
            onClick={() => onNav('contact')}
            className="bg-white text-pink-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Написать нам 💌
          </button>
        </div>
      </section>
    </div>
  );
}
