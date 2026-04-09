import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/5ebbb364-af22-4b59-9fba-822d49b648c3.jpg";

const skills = [
  { name: "Артикуляционная гимнастика", pct: 95, color: "bg-pink-500" },
  { name: "Коррекция звукопроизношения", pct: 90, color: "bg-blue-500" },
  { name: "Развитие речи у малышей", pct: 88, color: "bg-teal-500" },
  { name: "Работа с ОНР и ЗПР", pct: 85, color: "bg-purple-500" },
];

const certs = [
  { icon: "GraduationCap", title: "МПГУ", desc: "Дефектологический факультет, 2015 г.", color: "bg-blue-100 text-blue-500" },
  { icon: "Award", title: "Сертификат", desc: "Нейролингвистика для детей, 2021 г.", color: "bg-pink-100 text-pink-500" },
  { icon: "Star", title: "Повышение квалификации", desc: "Дислексия и дисграфия, 2023 г.", color: "bg-yellow-100 text-yellow-600" },
];

export default function About({ onNav }: { onNav: (p: string) => void }) {
  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-purple-100 text-purple-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">👩‍⚕️ О специалисте</div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Обо мне</h1>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-pink-400 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                <img src={HERO_IMAGE} alt="Логопед" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-baloo text-2xl font-extrabold text-center">Мария Ивановна</h2>
              <p className="text-pink-100 text-center mt-1">Логопед-дефектолог</p>
              <div className="flex gap-3 mt-4">
                <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
                  <div className="font-baloo font-bold text-2xl">8+</div>
                  <div className="text-xs text-pink-100">лет опыта</div>
                </div>
                <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
                  <div className="font-baloo font-bold text-2xl">500+</div>
                  <div className="text-xs text-pink-100">детей</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-8">
              <h3 className="font-baloo text-2xl font-bold text-slate-800 mb-4">Привет! 👋</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Я логопед-дефектолог с 8-летним опытом работы с детьми от 2 до 12 лет. Моя главная цель — сделать занятия настолько весёлыми, чтобы дети сами просили прийти ещё раз!
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Работаю с нарушениями звукопроизношения, задержкой речевого развития, заиканием и подготовкой к школе. Использую авторские методики с игровым подходом.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-slate-700">{s.name}</span>
                      <span className="text-slate-500">{s.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full transition-all duration-1000`} style={{width:`${s.pct}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <h2 className="font-baloo text-2xl font-extrabold text-center text-gradient-warm mb-6">Образование и сертификаты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {certs.map((c, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-6 shadow-md flex items-start gap-4">
              <div className={`${c.color} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon name={c.icon} size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-800">{c.title}</div>
                <div className="text-sm text-slate-500 mt-0.5">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-[2rem] p-8 text-center text-white shadow-xl">
          <div className="text-4xl mb-3">🤝</div>
          <h2 className="font-baloo text-2xl font-extrabold mb-2">Познакомимся?</h2>
          <p className="text-teal-100 mb-5">Первичная консультация бесплатно!</p>
          <button
            onClick={() => onNav('contact')}
            className="bg-white text-teal-600 font-bold px-8 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition-all"
          >
            Записаться 📅
          </button>
        </div>
      </div>
    </div>
  );
}
