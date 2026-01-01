import { useState } from 'react';
import { Gamepad2, Tv, Star, Search } from 'lucide-react';
import Seo from '../components/Seo';

const CharacterAnalysis = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const animeCharacters = [
  // One Piece
  { name: 'モンキー・D・ルフィ', series: 'ワンピース', type: 'ENFP', description: '自由を愛する冒険家', image: '🏴‍☠️' },
  { name: 'ロロノア・ゾロ', series: 'ワンピース', type: 'ISTJ', description: '規律正しい剣士', image: '⚔️' },
  { name: 'ナミ', series: 'ワンピース', type: 'ENTJ', description: '戦略的なナビゲーター', image: '🗺️' },
  { name: 'サンジ', series: 'ワンピース', type: 'ESFJ', description: '思いやり深いコック', image: '👨‍🍳' },
    
  // Haikyuu
  { name: '日向翔陽', series: 'ハイキュー!!', type: 'ESFP', description: 'エネルギッシュなスパイカー', image: '🏐' },
  { name: '影山飛雄', series: 'ハイキュー!!', type: 'ISTJ', description: '完璧主義のセッター', image: '👑' },
  { name: '月島蛍', series: 'ハイキュー!!', type: 'INTP', description: '冷静な分析家', image: '🦕' },
  { name: '菅原孝支', series: 'ハイキュー!!', type: 'ESFJ', description: '支える副主将', image: '🤝' },
    
  // Demon Slayer
  { name: '竈門炭治郎', series: '鬼滅の刃', type: 'ENFJ', description: '思いやり深い主人公', image: '🔥' },
  { name: '我妻善逸', series: '鬼滅の刃', type: 'ISFP', description: '心優しい雷の使い手', image: '⚡' },
  { name: '嘴平伊之助', series: '鬼滅の刃', type: 'ESTP', description: '野生的な戦士', image: '🐗' },
  { name: '冨岡義勇', series: '鬼滅の刃', type: 'INTJ/ISTP', description: '寡黙な水柱', image: '🌊' },
    
  // My Hero Academia
  { name: '緑谷出久', series: '僕のヒーローアカデミア', type: 'INFP', description: '理想主義のヒーロー', image: '💚' },
  { name: '爆豪勝己', series: '僕のヒーローアカデミア', type: 'ENTJ', description: '野心的なライバル', image: '💥' },
  { name: '轟焦凍', series: '僕のヒーローアカデミア', type: 'INTJ', description: '冷静な戦略家', image: '❄️🔥' },
  { name: '麗日お茶子', series: '僕のヒーローアカデミア', type: 'ENFJ/ESFJ', description: '明るく支え合うヒーロー', image: '✨' },
    
  // Studio Ghibli
  { name: '千尋', series: 'ジブリ作品', type: 'ISFJ', description: '成長する少女', image: '🏮' },
  { name: 'ハウル', series: 'ジブリ作品', type: 'ENFP', description: '魅力的な魔法使い', image: '🪶' },
  { name: 'トトロ', series: 'ジブリ作品', type: 'ISFP', description: '優しい森の精霊', image: '🌳' },
  ];

  const celebrities = [
    { name: 'BTS RM', series: 'K-POP', type: 'ENFP', description: 'カリスマ的リーダー', image: '🎤' },
    { name: 'BTS Jin', series: 'K-POP', type: 'ENFP/ESFJ', description: 'ウィットに富んだお茶目', image: '🎵' },
    { name: 'BTS SUGA', series: 'K-POP', type: 'INTJ', description: '内向的な天才', image: '🎹' },
    { name: 'TREASURE ヨシ', series: 'K-POP', type: 'ESFP', description: '明るいエンターテイナー', image: '💎' },
  ];

  const allCharacters = [...animeCharacters, ...celebrities];

  const seriesOptions = [
    { value: 'all', label: '全て' },
    { value: 'ワンピース', label: 'ワンピース' },
    { value: 'ハイキュー!!', label: 'ハイキュー!!' },
    { value: '鬼滅の刃', label: '鬼滅の刃' },
    { value: '僕のヒーローアカデミア', label: 'ヒロアカ' },
    { value: 'ジブリ作品', label: 'ジブリ' },
    { value: 'K-POP', label: 'K-POP' },
  ];

  const filteredCharacters = allCharacters.filter(character => {
    const matchesSeries = selectedSeries === 'all' || character.series === selectedSeries;
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeries && matchesSearch;
  });

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      'ENFP': 'bg-[#E8F5E9] border-[#A5D6A7] text-[#2E7D32]',
      'ENFJ': 'bg-[#E8F5E9] border-[#A5D6A7] text-[#2E7D32]',
      'INFP': 'bg-[#E8F5E9] border-[#A5D6A7] text-[#2E7D32]',
      'INFJ': 'bg-[#E8F5E9] border-[#A5D6A7] text-[#2E7D32]',
      'ENTJ': 'bg-[#F3E5F5] border-[#CE93D8] text-[#7B1FA2]',
      'INTJ': 'bg-[#F3E5F5] border-[#CE93D8] text-[#7B1FA2]',
      'ENTP': 'bg-[#F3E5F5] border-[#CE93D8] text-[#7B1FA2]',
      'INTP': 'bg-[#F3E5F5] border-[#CE93D8] text-[#7B1FA2]',
      'ESTJ': 'bg-[#E1F5FE] border-[#81D4FA] text-[#0277BD]',
      'ISTJ': 'bg-[#E1F5FE] border-[#81D4FA] text-[#0277BD]',
      'ESFJ': 'bg-[#E1F5FE] border-[#81D4FA] text-[#0277BD]',
      'ISFJ': 'bg-[#E1F5FE] border-[#81D4FA] text-[#0277BD]',
      'ESTP': 'bg-[#FFF3E0] border-[#FFCC80] text-[#EF6C00]',
      'ISTP': 'bg-[#FFF3E0] border-[#FFCC80] text-[#EF6C00]',
      'ESFP': 'bg-[#FFF3E0] border-[#FFCC80] text-[#EF6C00]',
      'ISFP': 'bg-[#FFF3E0] border-[#FFCC80] text-[#EF6C00]',
    };
    return colors[type] || 'bg-gray-100 border-gray-300 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-[#F0F7F4] py-12 font-sans">
      <Seo title="キャラクター MBTI 分析 - アニメ・有名人の性格タイプ" description="人気アニメや有名人のMBTIを分析。キャラクターの性格特徴や作品別の傾向をわかりやすく紹介します。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            キャラクター MBTI分析
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            人気アニメ・漫画のキャラクターや芸能人のMBTIタイプを分析。
            <br className="hidden sm:block" />
            推しキャラの性格を深く理解し、自分との相性もチェックしましょう。
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Series Filter */}
            <div className="flex items-center space-x-3 bg-white p-2 rounded-2xl border-2 border-gray-200 shadow-[0_4px_0_#E0E0E0]">
              <Tv className="w-6 h-6 text-[#4FC3F7] ml-2" />
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 border-none bg-transparent focus:ring-0 text-gray-700 font-bold cursor-pointer"
              >
                {seriesOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="キャラクター名やMBTIタイプで検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#4FC3F7] focus:ring-0 focus:outline-none w-full sm:w-80 shadow-[0_4px_0_#E0E0E0] font-medium"
              />
            </div>
          </div>
        </div>

        {/* Character Grid */}
        <div id="character-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredCharacters.map((character, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{character.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{character.name}</h3>
                <div className="text-sm text-gray-500 mb-3 font-medium">{character.series}</div>
                <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold border-2 ${getTypeColor(character.type)}`}>
                  {character.type}
                </div>
              </div>
              <p className="text-gray-600 text-sm text-center leading-relaxed font-medium">{character.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Star className="w-6 h-6 mr-2 text-[#FFD54F]" />
            人気シリーズ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'ワンピース', emoji: '🏴‍☠️', count: '4' },
              { name: 'ハイキュー!!', emoji: '🏐', count: '4' },
              { name: '鬼滅の刃', emoji: '⚔️', count: '4' },
              { name: 'ヒロアカ', emoji: '🦸', count: '4' },
              { name: 'ジブリ', emoji: '🌳', count: '3' },
              { name: 'K-POP', emoji: '🎤', count: '4' },
            ].map((series, index) => (
              <button
                key={index}
                onClick={() => setSelectedSeries(series.name === 'ヒロアカ' ? '僕のヒーローアカデミア' : series.name === 'ジブリ' ? 'ジブリ作品' : series.name)}
                className="bg-white rounded-3xl p-4 shadow-[0_6px_0_#E0E0E0] border-2 border-gray-200 hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{series.emoji}</div>
                <div className="font-bold text-gray-800 text-sm">{series.name}</div>
                <div className="text-xs text-gray-500 font-medium">{series.count}キャラ</div>
              </button>
            ))}
          </div>
        </div>

        {/* Type Distribution */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">キャラクターのMBTI分布</h2>
          <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {Array.from(new Set(allCharacters.flatMap(c => c.type.split('/').map(t => t.trim())))).map((type) => {
                const count = allCharacters.filter(c => c.type.split('/').map(t => t.trim()).includes(type)).length;
                return (
                  <div key={type} className={`p-3 rounded-2xl border-2 text-center ${getTypeColor(type)}`}>
                    <div className="font-black text-lg">{type}</div>
                    <div className="text-xs font-bold opacity-80">{count}キャラ</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Character Insights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">キャラクター分析のポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <Star className="w-12 h-12 mx-auto mb-4 text-[#FFD54F]" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">主人公タイプ</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                ENFJやENFPが多く、人を惹きつけるカリスマ性と理想主義を持っています。
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-[#4FC3F7]" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">多様性の魅力</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                様々なMBTIタイプが物語に深みを与え、読者・視聴者が共感できる要素を作り出しています。
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <Tv className="w-12 h-12 mx-auto mb-4 text-[#AED581]" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">成長の物語</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                各キャラクターのMBTIの特徴が成長の軌跡と密接に関わり、深い物語性を生み出しています。
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#7E57C2] rounded-3xl p-10 text-white shadow-[0_8px_0_#512DA8] border-2 border-[#512DA8] relative overflow-hidden">
            <div className="relative z-10">
              <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-[#D1C4E9]" />
              <h3 className="text-3xl font-black mb-4 tracking-tight">あなたと推しキャラの相性は？</h3>
              <p className="text-[#D1C4E9] mb-8 max-w-2xl mx-auto text-lg font-bold">
                自分のMBTIタイプを知って、お気に入りのキャラクターとの相性を診断してみましょう。
                新たな発見があるかもしれません！
              </p>
              <a
                href="/diagnostics"
                className="inline-block px-10 py-4 bg-white text-[#7E57C2] font-black rounded-2xl shadow-[0_6px_0_#D1C4E9] border-2 border-[#D1C4E9] hover:bg-gray-50 active:shadow-none active:translate-y-[6px] transition-all text-lg"
              >
                診断で相性をチェック
              </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 transform skew-y-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterAnalysis;

export async function getStaticProps() {
  // 页面使用前端交互过滤，构建时无额外数据依赖
  return { props: {} };
}