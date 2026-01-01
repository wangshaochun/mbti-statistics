import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Users, Briefcase, Star, Shield, Zap } from 'lucide-react';
import Seo from '../components/Seo';

const CompatibilityOverview = () => {
  const [selectedContext, setSelectedContext] = useState<'love' | 'friendship' | 'work'>('love');
  const [selectedType, setSelectedType] = useState<string>('INFJ');

  const compatibilityMatrix = {
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
  };

  const compatibilityAnalyses = {
    love: `
      恋愛関係マッチ度解析：
      
      優秀なマッチ（天然吸引力）：通常は核心的な認知機能を共有しているか、補完的で調和する組み合わせです（例：INFJ と ENFP は直感(N)と感情(F)の共通点や補完性）。会話が自然で、お互いを深く理解しやすい傾向があります。
      
      良好なマッチ（要経営）：共通点はあるものの、調和させるために意識的な努力が必要な差異が存在します（例：INFP と INTP は理想や内向的傾向を共有するが、F/T の違いで価値判断の擦り合わせが必要）。双方が歩み寄れば良好に保てます。
      
      注意が必要（挑戦と成長）：認知パターンや価値観が大きく異なる組み合わせです（例：ESFJ と INTP）。短期的な魅力はあっても、長期的な安定には高い成熟度・コミュニケーション技術・相手の世界を理解しようとする意志が求められます。
    `,
    friendship: `
      友人関係マッチ度解析：
      
      友人関係は恋愛よりも寛容で、共通の興味や価値観が鍵になります。
      
      優秀なマッチ（ベストな遊び相手／知己）：同じ感覚/判断の志向を共有していると、共通の話題や活動が生まれやすいです（例：同じSPタイプは冒険や体験を共有しやすい）。
      
      良好なマッチ（一緒に楽しめる）：タイプが異なっても互いに補完し合い、一緒に楽しめる関係になります（例：SJとSPのペアで実務と遊びを両立）。
      
      注意が必要（話が合わない可能性）：S型とN型の組み合わせでは、S型が具体性を求める一方でN型が抽象的な話を好み、噛み合わないことがあります。ただし共通の具体的な興味（趣味・映画・スポーツ等）を見つければ問題は解消されやすいです。
    `,
    work: `
      職場関係マッチ度解析：
      
      職場では直接的な協働の相性を重視します。優秀な組み合わせは夢想家と実行者、計画者と柔軟担当などで、役割が明確に分かれると高効率になります。
      
      良好なマッチ（信頼できるチームメイト）：同じ気質を共有することで協働の安定性が高まり、信頼できる仲間として機能します（例：二人のNT型による戦略的協働）。
      
      注意が必要（潜在的対立）：思考や優先順位が異なる場合、ルールや進め方を巡って衝突が生じやすいです。ただし適切なマネジメントや役割分担があれば、その対立はイノベーションの源泉にもなり得ます。
    `
  };

  const contexts = [
    { key: 'love' as const, label: '恋愛関係', icon: Heart, color: 'bg-[#FF8A80] border-[#D32F2F] shadow-[#D32F2F]' },
    { key: 'friendship' as const, label: '友人関係', icon: Users, color: 'bg-[#4FC3F7] border-[#0288D1] shadow-[#0288D1]' },
    { key: 'work' as const, label: '職場関係', icon: Briefcase, color: 'bg-[#AED581] border-[#689F38] shadow-[#689F38]' }
  ];

  type Level = 'excellent' | 'good' | 'challenging';
  const getCompatibilityColor = (level: Level): string => {
    switch (level) {
      case 'excellent': return 'bg-[#E8F5E9] border-2 border-[#81C784] text-[#2E7D32] shadow-[0_4px_0_#81C784]';
      case 'good': return 'bg-[#E3F2FD] border-2 border-[#64B5F6] text-[#1565C0] shadow-[0_4px_0_#64B5F6]';
      case 'challenging': return 'bg-[#FFF3E0] border-2 border-[#FFB74D] text-[#EF6C00] shadow-[0_4px_0_#FFB74D]';
    }
  };

  const compatibilityTips = {
    love: [
      'お互いの価値観を理解し合うことが重要',
      '感情を素直に表現することを心がける',
      '将来の目標について定期的に話し合う',
      'お互いの個人的な時間も尊重する'
    ],
    friendship: [
      '共通の興味や趣味を見つける',
      'お互いの違いを受け入れる',
      '深い話から軽い話まで幅広く楽しむ',
      '困った時には支え合える関係を築く'
    ],
    work: [
      '役割分担を明確にする',
      'コミュニケーション方法を合わせる',
      'お互いの強みを活かし合う',
      '建設的なフィードバックを心がける'
    ]
  };

  const allTypes = ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ENFP', 'ENFJ', 'ENTJ', 'ENTP'];
  
  const popularPairs = [
    {
      types: 'INFJ × ENFP',
      title: '魂の伴侶のような深い結びつき',
      icon: Star,
      gradient: 'from-pink-400 to-rose-500',
      summary: 'NFの共有による深い対話と理解。直感と感情が共鳴する関係。',
      details: {
        love: '両者は互いの内面世界を深く理解し、長時間の対話が自然に続く理想的なパートナー。',
        friendship: 'ENFPは内向的なINFJを外へ導き、INFJはENFPに深い洞察を提供する補完関係。',
        work: '芸術・教育・心理分野で高い相乗効果を発揮。INFJの構想力とENFPの創造性が調和。'
      }
    },
    {
      types: 'ISTJ × ESFJ',
      title: '揺るぎない現実の盟友',
      icon: Shield,
      gradient: 'from-green-400 to-teal-500',
      summary: 'SJの共有による安定と信頼性。伝統と責任を重んじる関係。',
      details: {
        love: '事実・責任・伝統・家庭を大切にする共通価値観で堅実な関係を築く。',
        friendship: '実務的な協力体制に優れ、地域活動や家庭の企画を効率よく進められる。',
        work: '組織の安定運営に最適。ESFJが人間関係を調整し、ISTJが品質管理を担う。'
      }
    },
    {
      types: 'INTJ × ENTP',
      title: '火花散る知的な挑戦',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500',
      summary: 'NTの共有による知的興奮。戦略と可能性を探求する関係。',
      details: {
        love: '抽象概念と戦略的思考への共通の興味。知的な刺激と駆け引きが関係を活性化。',
        friendship: '「思考のジム」のような関係で、複雑な問題や新しいアイデアを議論するのを楽しむ。',
        work: 'ENTPのアイデア創出力とINTJの体系化能力が高効率な補完関係を形成する。'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F7F4] py-12 font-sans">
      <Seo title="MBTI 相性診断・分析 - 恋愛・友人・職場の相性" description="MBTIタイプ別の相性マトリクスを恋愛・友情・職場ごとに分析。相性の良い組み合わせや改善のコツを紹介します。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm tracking-tight">
            MBTI相性診断・分析
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            16タイプの性格別相性を恋愛・友情・仕事の観点から詳しく分析。
            <br className="hidden sm:block" />
            理想のパートナーや良好な人間関係を築くヒントを見つけましょう。
          </p>
        </div>

        {/* Context Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">関係性を選択</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {contexts.map((context) => {
              const Icon = context.icon;
              const isSelected = selectedContext === context.key;
              return (
                <button
                  key={context.key}
                  onClick={() => setSelectedContext(context.key)}
                  className={`flex items-center space-x-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all transform border-2 ${
                    isSelected
                      ? `${context.color} text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] translate-y-[-4px]`
                      : 'bg-white text-gray-600 border-gray-200 shadow-[0_6px_0_#E5E7EB] hover:bg-gray-50'
                  } active:shadow-none active:translate-y-[2px]`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                  <span>{context.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compatibility Matrix Sample */}
        <div id="compatibility-matrix" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {contexts.find(c => c.key === selectedContext)?.label}での相性マトリックス
          </h2>
          
          {/* Type Selector */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-700 mb-6 text-center">MBTIタイプを選択してください</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto">
              {allTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                    selectedType === type
                      ? 'bg-[#FFD54F] border-[#FFA000] text-gray-900 shadow-[0_4px_0_#FFA000] translate-y-[-2px]'
                      : 'bg-white border-gray-200 text-gray-600 shadow-[0_4px_0_#E5E7EB] hover:bg-gray-50'
                  } active:shadow-none active:translate-y-[2px]`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-white p-8">
            <div className="max-w-4xl mx-auto">
              {/* Selected Type Compatibility */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
                  <div className="w-24 h-16 bg-[#4DB6AC] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-[0_4px_0_#00897B] border-2 border-[#00897B]">
                    {selectedType}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedType}タイプの{selectedContext === 'love' ? '恋愛パートナー' : selectedContext === 'friendship' ? '友人関係' : '職場での関係'}相性
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(compatibilityMatrix[selectedContext][selectedType as keyof typeof compatibilityMatrix.love]).map(([level, types]) => (
                    <div key={level} className={`p-6 rounded-2xl ${getCompatibilityColor(level as Level)} transition-transform hover:scale-[1.02]`}>
                      <h4 className="font-bold mb-4 text-center text-lg">
                        {level === 'excellent' ? '★★★ 抜群の相性' : 
                         level === 'good' ? '★★☆ 良好な相性' : '★☆☆ 要注意の相性'}
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {types.map((compatibleType) => (
                          <Link
                            key={compatibleType}
                            href={`/type/${compatibleType.toLowerCase()}`}
                            className="px-4 py-2 bg-white/60 rounded-lg text-sm font-bold hover:bg-white/90 transition-all shadow-sm"
                          >
                            {compatibleType}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility Tips */}
        <div id="compatibility-tips" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {contexts.find(c => c.key === selectedContext)?.label}での関係改善のコツ
          </h2>
          <div className="bg-[#E0F2F1] rounded-3xl p-8 border-2 border-[#B2DFDB] shadow-[0_8px_0_#B2DFDB]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {compatibilityTips[selectedContext].map((tip, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/50 p-4 rounded-xl">
                  <div className="w-10 h-10 bg-[#26A69A] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatibility Analyses (日本語) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{contexts.find(c => c.key === selectedContext)?.label}の次元解析</h2>
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-gray-100 p-8">
            <p className="text-gray-700 whitespace-pre-line leading-loose font-medium">{compatibilityAnalyses[selectedContext]}</p>
          </div>
        </div>
 

        {/* Popular Compatibility Insights */}
        <div id="popular-pairs" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">人気の相性パターン</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {popularPairs.map((pair, index) => {
              const Icon = pair.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)]"
                >
                  <div className={`w-full h-4 bg-gradient-to-r ${pair.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mr-4 bg-gradient-to-br ${pair.gradient} shadow-md`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-800">{pair.types}</div>
                        <h3 className="text-sm font-bold text-gray-500">{pair.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 font-medium leading-relaxed">{pair.summary}</p>
                    
                    <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
                      <div className="bg-rose-50 p-3 rounded-xl">
                        <div className="flex items-center mb-1">
                          <Heart className="w-4 h-4 text-rose-500 mr-2" />
                          <span className="font-bold text-xs text-rose-700">恋愛</span>
                        </div>
                        <p className="text-xs text-gray-600">{pair.details.love}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <div className="flex items-center mb-1">
                          <Users className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="font-bold text-xs text-blue-700">友人</span>
                        </div>
                        <p className="text-xs text-gray-600">{pair.details.friendship}</p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-xl">
                        <div className="flex items-center mb-1">
                          <Briefcase className="w-4 h-4 text-green-500 mr-2" />
                          <span className="font-bold text-xs text-green-700">職場</span>
                        </div>
                        <p className="text-xs text-gray-600">{pair.details.work}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      {(() => {
                        const firstType = pair.types.split('×')[0].trim().toLowerCase();
                        return (
                          <Link 
                            href={`/type/${firstType}`} 
                            className="inline-block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                          >
                            詳細ページへ
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link href="/types" className="inline-flex items-center px-8 py-4 bg-[#7E57C2] text-white font-bold rounded-2xl shadow-[0_6px_0_#5E35B1] hover:bg-[#673AB7] active:shadow-none active:translate-y-[6px] transition-all border-2 border-[#5E35B1]">
              すべての相性パターンを見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-12">
          <div className="bg-[#FF8A80] rounded-3xl p-10 text-white shadow-[0_10px_0_#D32F2F] border-2 border-[#D32F2F] max-w-4xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
            <Heart className="w-20 h-20 mx-auto mb-6 text-white drop-shadow-md" />
            <h3 className="text-3xl font-bold mb-6 drop-shadow-sm">あなたの理想の相性を見つけましょう</h3>
            <p className="text-white mb-8 max-w-2xl mx-auto text-lg font-medium opacity-90">
              詳細な診断で、恋愛・友情・仕事における理想のパートナーを発見し、
              より良い人間関係を築いていきましょう。
            </p>
            <a
              href="/diagnostics"
              className="inline-block px-10 py-4 bg-white text-[#D32F2F] font-bold rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 active:shadow-none active:translate-y-[6px] transition-all text-lg"
            >
              今すぐ相性診断
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityOverview;

export async function getStaticProps() {
  return { props: {} };
}