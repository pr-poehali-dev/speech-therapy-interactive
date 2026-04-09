import { useState } from 'react';
import Icon from '@/components/ui/icon';

const GAMES_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/b8244814-6202-4265-80ad-7e55d177afc3.jpg";
const DINO_IMAGE = "https://cdn.poehali.dev/projects/53f21a1b-1c9e-4b10-8b7d-5bb967285277/files/28cc8f5f-91a5-4fdb-8ed1-4047556653ff.jpg";

const games = [
  {
    id: 1,
    title: "Повтори за мной!",
    desc: "Слушай звуки и повторяй — тренируем артикуляцию",
    emoji: "🎵",
    color: "from-pink-400 to-rose-500",
    badge: "Звуки",
    difficulty: "Лёгко",
    diffColor: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Угадай слово",
    desc: "По картинке назови слово правильно",
    emoji: "🖼️",
    color: "from-blue-400 to-indigo-500",
    badge: "Слова",
    difficulty: "Средне",
    diffColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Скороговорки",
    desc: "Говори быстро и чётко — соревнуйся с собой!",
    emoji: "🚀",
    color: "from-orange-400 to-amber-500",
    badge: "Речь",
    difficulty: "Сложно",
    diffColor: "bg-red-100 text-red-600",
  },
  {
    id: 4,
    title: "Буква-путешественница",
    desc: "Найди все слова с нужной буквой",
    emoji: "✈️",
    color: "from-teal-400 to-cyan-500",
    badge: "Буквы",
    difficulty: "Лёгко",
    diffColor: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    title: "Рифмы и стихи",
    desc: "Подбирай рифмы — развиваем слуховое восприятие",
    emoji: "🎤",
    color: "from-purple-400 to-violet-500",
    badge: "Стихи",
    difficulty: "Средне",
    diffColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 6,
    title: "Сказочные истории",
    desc: "Составляй истории по картинкам",
    emoji: "📖",
    color: "from-green-400 to-emerald-500",
    badge: "Рассказ",
    difficulty: "Сложно",
    diffColor: "bg-red-100 text-red-600",
  },
];

const tongueTwisters = [
  "Шла Саша по шоссе и сосала сушку",
  "На горе Арарат растёт крупный виноград",
  "Карл у Клары украл кораллы",
  "Ехал Грека через реку",
];

export default function Games() {
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [currentTwister, setCurrentTwister] = useState(0);

  return (
    <div className="bubbles-bg min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-100 text-blue-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">🎮 Игровая комната</div>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src={DINO_IMAGE} alt="Дино" className="w-20 h-20 rounded-full object-cover border-4 border-orange-400 shadow-lg animate-float" />
              <div className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">Дино</div>
            </div>
          </div>
          <h1 className="font-baloo text-4xl md:text-5xl font-extrabold text-gradient mb-3">Играем и учимся!</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">Весёлые игры для развития речи. Каждая игра — шаг к красивой речи!</p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {games.map((game, i) => (
            <div
              key={game.id}
              onClick={() => setActiveGame(activeGame === game.id ? null : game.id)}
              className={`card-hover cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md opacity-0 animate-slide-up delay-${(i+1)*100}`}
              style={{animationFillMode:'forwards'}}
            >
              <div className={`bg-gradient-to-br ${game.color} p-6 text-center`}>
                <div className="text-5xl mb-1">{game.emoji}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2.5 py-1 rounded-full">{game.badge}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${game.diffColor}`}>{game.difficulty}</span>
                </div>
                <h3 className="font-baloo font-bold text-lg text-slate-800 mb-1">{game.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{game.desc}</p>
                <button className={`w-full bg-gradient-to-r ${game.color} text-white font-bold py-2.5 rounded-2xl hover:opacity-90 transition-all active:scale-95`}>
                  {activeGame === game.id ? "Скоро будет готово! 🔧" : "Играть! 🎯"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tongue twister mini-game */}
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-[2rem] p-8 text-white shadow-xl text-center">
          <div className="text-4xl mb-3">🗣️</div>
          <h2 className="font-baloo text-2xl font-extrabold mb-2">Скороговорка дня</h2>
          <p className="text-orange-100 mb-4">Повторяй быстрее!</p>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-5 mb-6">
            <p className="font-baloo text-xl font-bold text-white">"{tongueTwisters[currentTwister]}"</p>
          </div>
          <button
            onClick={() => setCurrentTwister((currentTwister + 1) % tongueTwisters.length)}
            className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition-all"
          >
            Следующая 🔄
          </button>
        </div>

        {/* Games image */}
        <div className="mt-10 rounded-3xl overflow-hidden shadow-xl">
          <img src={GAMES_IMAGE} alt="Игры для детей" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}