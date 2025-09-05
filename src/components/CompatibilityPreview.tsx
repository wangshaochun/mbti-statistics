import React, { useState } from 'react';
import { Heart, Users, Briefcase } from 'lucide-react';

const compatibilityMatrix: Record<'love' | 'friendship' | 'work', Record<string, { excellent: string[]; good: string[]; challenging: string[] }>> = {
    love: {
      ISTJ: { excellent: ['ESFJ', 'ISFJ'], good: ['ESTJ', 'ISTP'], challenging: ['ENFP', 'ENTP'] },
      ISFJ: { excellent: ['ESFJ', 'ISTJ'], good: ['ESTJ', 'ISFP'], challenging: ['ENTP', 'INTP'] },
      ESTJ: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTP'], challenging: ['INFP', 'INTP'] },
      ESFJ: { excellent: ['ISTJ', 'ISFJ'], good: ['ESTJ', 'ESFP'], challenging: ['INTP', 'ISTP'] },
      ISTP: { excellent: ['ESTJ', 'ESFJ'], good: ['ISTJ', 'ISFP'], challenging: ['ENFJ', 'ENFJ'] },
      ISFP: { excellent: ['ESFJ', 'ESTJ'], good: ['ISFJ', 'ISTP'], challenging: ['ENTJ', 'ENTP'] },
      ESTP: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTJ'], challenging: ['INFJ', 'INTJ'] },
      ESFP: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTJ'], challenging: ['INTJ', 'INTP'] },
      INFJ: { excellent: ['ENFP', 'ENTP'], good: ['INFP', 'INTJ'], challenging: ['ESTP', 'ESFP'] },
      INFP: { excellent: ['ENFJ', 'ENTJ'], good: ['INFJ', 'INTP'], challenging: ['ESTJ', 'ESTP'] },
      INTJ: { excellent: ['ENFP', 'ENTP'], good: ['INFJ', 'INTP'], challenging: ['ESFP', 'ESFJ'] },
      INTP: { excellent: ['ENTJ', 'ENFJ'], good: ['INTJ', 'INFP'], challenging: ['ESFJ', 'ESTJ'] },
      ENFP: { excellent: ['INFJ', 'INTJ'], good: ['ENFJ', 'ENTP'], challenging: ['ISTJ', 'ISFJ'] },
      ENFJ: { excellent: ['INFP', 'INTP'], good: ['ENFP', 'INFJ'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['INFP', 'INTP'], good: ['INTJ', 'ENTP'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['INFJ', 'INTJ'], good: ['ENFP', 'INTP'], challenging: ['ISFJ', 'ISTJ'] }
    },
    friendship: {
      ISTJ: { excellent: ['ESTJ', 'ISFJ'], good: ['ISTP', 'ESFJ'], challenging: ['ENFP', 'ENTP'] },
      ISFJ: { excellent: ['ESFJ', 'ISTJ'], good: ['ISFP', 'ESTJ'], challenging: ['ENTP', 'INTP'] },
      ESTJ: { excellent: ['ISTJ', 'ESFJ'], good: ['ESTP', 'ENTJ'], challenging: ['INFP', 'INTP'] },
      ESFJ: { excellent: ['ISFJ', 'ESTJ'], good: ['ESFP', 'ENFJ'], challenging: ['INTJ', 'INTP'] },
      ISTP: { excellent: ['ESTP', 'ISFP'], good: ['ISTJ', 'INTP'], challenging: ['ENFJ', 'INFJ'] },
      ISFP: { excellent: ['ESFP', 'ISTP'], good: ['ISFJ', 'INFP'], challenging: ['ENTJ', 'ESTJ'] },
      ESTP: { excellent: ['ISTP', 'ESFP'], good: ['ESTJ', 'ENTP'], challenging: ['INFJ', 'INTJ'] },
      ESFP: { excellent: ['ISFP', 'ESTP'], good: ['ESFJ', 'ENFP'], challenging: ['INTJ', 'INFJ'] },
      INFJ: { excellent: ['ENFJ', 'INFP'], good: ['INTJ', 'ENFP'], challenging: ['ESTP', 'ESFP'] },
      INFP: { excellent: ['ENFP', 'INFJ'], good: ['INTP', 'ISFP'], challenging: ['ESTJ', 'ENTJ'] },
      INTJ: { excellent: ['ENTJ', 'INTP'], good: ['INFJ', 'ENTP'], challenging: ['ESFP', 'ESFJ'] },
      INTP: { excellent: ['ENTP', 'INTJ'], good: ['INFP', 'ISTP'], challenging: ['ESFJ', 'ESTJ'] },
      ENFP: { excellent: ['INFP', 'ENTP'], good: ['ENFJ', 'INFJ'], challenging: ['ISTJ', 'ISTP'] },
      ENFJ: { excellent: ['INFJ', 'ENFP'], good: ['ESFJ', 'INFP'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['INTJ', 'ENTP'], good: ['ESTJ', 'INTP'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['INTP', 'ENFP'], good: ['INTJ', 'ENTJ'], challenging: ['ISFJ', 'ISFP'] }
    },
    work: {
      ISTJ: { excellent: ['ENFP', 'ENTJ'], good: ['ESTJ', 'ISFJ'], challenging: ['INFP', 'ENTP'] },
      ISFJ: { excellent: ['ENTP', 'ENFJ'], good: ['ESFJ', 'ISTJ'], challenging: ['INTP', 'ENTJ'] },
      ESTJ: { excellent: ['INFP', 'INTP'], good: ['ISTJ', 'ENTJ'], challenging: ['ENFP', 'INFJ'] },
      ESFJ: { excellent: ['INTJ', 'INTP'], good: ['ISFJ', 'ENFJ'], challenging: ['ENTJ', 'ISTP'] },
      ISTP: { excellent: ['ENFJ', 'ESFJ'], good: ['ESTP', 'ISFP'], challenging: ['INFJ', 'ENFP'] },
      ISFP: { excellent: ['ENTJ', 'ESTJ'], good: ['ESFP', 'INFP'], challenging: ['INTJ', 'ENTJ'] },
      ESTP: { excellent: ['INFJ', 'INTJ'], good: ['ISTP', 'ESFP'], challenging: ['INFP', 'ISFJ'] },
      ESFP: { excellent: ['INTJ', 'INFJ'], good: ['ESTP', 'ENFJ'], challenging: ['ISTJ', 'INTP'] },
      INFJ: { excellent: ['ESTP', 'ESFP'], good: ['ENFJ', 'INFP'], challenging: ['ESTJ', 'ISTP'] },
      INFP: { excellent: ['ESTJ', 'ENTJ'], good: ['ENFP', 'INFJ'], challenging: ['ESTP', 'ISTJ'] },
      INTJ: { excellent: ['ESFP', 'ESFJ'], good: ['ENTJ', 'INTP'], challenging: ['ESFJ', 'ISFP'] },
      INTP: { excellent: ['ESFJ', 'ENTJ'], good: ['INTJ', 'ENTP'], challenging: ['ESFP', 'ISFJ'] },
      ENFP: { excellent: ['ISTJ', 'ISFJ'], good: ['ENTP', 'INFJ'], challenging: ['ISTJ', 'ESTJ'] },
      ENFJ: { excellent: ['ISTP', 'INTP'], good: ['ENFP', 'INFJ'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['ISFP', 'INFP'], good: ['INTJ', 'ESTJ'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['ISFJ', 'ISTJ'], good: ['INTP', 'INTJ'], challenging: ['ISFJ', 'ESFJ'] }
    }
  } as const;

const contexts = [
    { key: 'love' as const, label: '恋愛関係', icon: Heart, color: 'bg-rose-500' },
    { key: 'friendship' as const, label: '友人関係', icon: Users, color: 'bg-blue-500' },
    { key: 'work' as const, label: '職場関係', icon: Briefcase, color: 'bg-green-500' }
  ];

type Level = 'excellent' | 'good' | 'challenging';

const allTypes = Object.keys(compatibilityMatrix.love) as string[];

const CompatibilityPreview: React.FC = () => {
  const [selectedContext, setSelectedContext] = useState<'love' | 'friendship' | 'work'>('love');
  const [selectedType, setSelectedType] = useState<string>('ENFJ');
  const getCompatibilityColor = (level: Level | 'neutral'): string => {
    switch (level) {
      case 'excellent': return 'bg-green-100 border-green-300 text-green-800';
      case 'good': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'challenging': return 'bg-red-100 border-red-300 text-red-800';
      default: return 'bg-gray-100 border-gray-200 text-gray-700';
    }
  };

  const getCompatibilityLevelFor = (base: string, other: string): Level | 'neutral' => {
    const data = compatibilityMatrix[selectedContext][base];
    if (!data) return 'neutral';
    if (data.excellent.includes(other)) return 'excellent';
    if (data.good.includes(other)) return 'good';
    if (data.challenging.includes(other)) return 'challenging';
    return 'neutral';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-900 mb-3">関係性をプレビュー:</label>
          <div className="flex gap-3">
            {contexts.map((c) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.key}
                  onClick={() => setSelectedContext(c.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${selectedContext === c.key ? `${c.color} text-white shadow` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="type-select" className="block text-lg font-semibold text-gray-900 mb-3">あなたのMBTIタイプを選択:</label>
          <select
            id="type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
          >
            {allTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
          {allTypes.map((type) => {
            const level = getCompatibilityLevelFor(type, selectedType);
            return (
              <div key={type} className={`p-3 rounded-lg text-center border ${getCompatibilityColor(level as Level | 'neutral')}`}>
                <div className="font-semibold text-sm">{type}</div>
                <div className="text-xs mt-1">
                  {level === 'excellent' ? '★★★' : level === 'good' ? '★★☆' : level === 'challenging' ? '★☆☆' : '---'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="font-semibold">抜群の相性 (★★★)</div>
            <div className="text-gray-600">深い理解と成長</div>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <div className="font-semibold">良好な相性 (★★☆)</div>
            <div className="text-gray-600">安定した関係</div>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
            <div className="font-semibold">要注意の相性 (★☆☆)</div>
            <div className="text-gray-600">理解に努力が必要</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CompatibilityPreview);