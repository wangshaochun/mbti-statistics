import React from 'react';
import Link from 'next/link';

interface TypeGridProps {
  preview?: boolean;
}

const mbtiTypes = [
    // Analysts
  { type: 'INTJ', name: '建築家', category: 'アナリスト', color: 'bg-purple-100 border-purple-300 text-purple-800', description: '想像力豊かで戦略的な思想家。すべてが計画の中にある。' },
  { type: 'INTP', name: '論理学者', category: 'アナリスト', color: 'bg-purple-100 border-purple-300 text-purple-800', description: '創造的な発明家で、知識に飽くことのない渇望を持つ。' },
  { type: 'ENTJ', name: '指揮官', category: 'アナリスト', color: 'bg-purple-100 border-purple-300 text-purple-800', description: '大胆で想像力に富み意志の強いリーダー。常に解決策を見つけ出すか創り出す。' },
  { type: 'ENTP', name: '討論者', category: 'アナリスト', color: 'bg-purple-100 border-purple-300 text-purple-800', description: '聡明で好奇心旺盛な思想家。知的な挑戦を決して諦めない。' },
    
    // Diplomats
  { type: 'INFJ', name: '提唱者', category: '外交官', color: 'bg-green-100 border-green-300 text-green-800', description: '静かで神秘的、同時に鼓舞する疲れ知らずの理想主義者。' },
  { type: 'INFP', name: '仲介者', category: '外交官', color: 'bg-green-100 border-green-300 text-green-800', description: '詩的で親切な利他主義者。常に正義のために熱心に手を差し伸べる。' },
  { type: 'ENFJ', name: '主人公', category: '外交官', color: 'bg-green-100 border-green-300 text-green-800', description: '魅力的で人を鼓舞するリーダー。聴衆を惹きつける力を持つ。' },
  { type: 'ENFP', name: '広報運動家', category: '外交官', color: 'bg-green-100 border-green-300 text-green-800', description: '情熱的で創造的、社交的な自由人。いつも笑顔の理由を見つける。' },
    
    // Sentinels  
  { type: 'ISTJ', name: '管理者', category: '番人', color: 'bg-blue-100 border-blue-300 text-blue-800', description: '実際的で事実を重んじる人。信頼性は疑いようがない。' },
  { type: 'ISFJ', name: '擁護者', category: '番人', color: 'bg-blue-100 border-blue-300 text-blue-800', description: '非常に献身的で温かい守護者。大切な人々を守る準備が常にできている。' },
  { type: 'ESTJ', name: '幹部', category: '番人', color: 'bg-blue-100 border-blue-300 text-blue-800', description: '優れた管理者であり、物事や人を管理することに長けている。' },
  { type: 'ESFJ', name: '領事', category: '番人', color: 'bg-blue-100 border-blue-300 text-blue-800', description: '思いやりがあり社交的で人気者。常に熱心に助けようとする。' },
    
    // Explorers
  { type: 'ISTP', name: '巨匠', category: '探検家', color: 'bg-orange-100 border-orange-300 text-orange-800', description: '大胆で実践的な実験家。あらゆる種類の道具の扱いに長けている。' },
  { type: 'ISFP', name: '冒険家', category: '探検家', color: 'bg-orange-100 border-orange-300 text-orange-800', description: '柔軟で魅力的な芸術家。新しいことを探索し体験する準備ができている。' },
  { type: 'ESTP', name: '起業家', category: '探検家', color: 'bg-orange-100 border-orange-300 text-orange-800', description: '聡明で精力的、感覚に優れた人々。境界線で生きることを心から楽しむ。' },
  { type: 'ESFP', name: 'エンターテイナー', category: '探検家', color: 'bg-orange-100 border-orange-300 text-orange-800', description: '自発的で精力的、情熱的な演者――彼らの周りにいると決して退屈しない。' },
];

const TypeGrid: React.FC<TypeGridProps> = ({ preview = false }) => {
  const displayTypes = React.useMemo(() => (preview ? mbtiTypes.slice(0, 8) : mbtiTypes), [preview]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayTypes.map((item) => (
        <Link
          key={item.type}
          href={`/type/${item.type.toLowerCase()}`}
          className={`p-4 rounded-xl border-2 ${item.color} hover:shadow-md transition-all duration-200 group hover:scale-105`}
        >
          <div className="text-center">
            <div className="text-lg font-bold mb-1">{item.type}</div>
            <div className="text-sm font-semibold mb-2">{item.name}</div>
            <div className="text-xs opacity-75 mb-2">{item.category}</div>
            <div className="text-xs leading-tight">{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(TypeGrid);